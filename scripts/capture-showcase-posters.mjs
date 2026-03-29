import { execFileSync } from "node:child_process";
import { createReadStream, existsSync } from "node:fs";
import { mkdir, mkdtemp, rm } from "node:fs/promises";
import http from "node:http";
import os from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

import { chromium } from "@playwright/test";
import { build } from "esbuild";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(scriptDir, "..");
const publicDir = path.join(rootDir, "public");
const postersDir = path.join(publicDir, "website-showcases", "posters");
const defaultCaptureDelayMs = 1200;
const reactCaptureDelayMs = 1500;

function ensureGeneratedShowcases() {
  execFileSync(process.execPath, [path.join(scriptDir, "generate-showcases.mjs")], {
    cwd: rootDir,
    stdio: "inherit",
  });
}

async function loadWebsiteShowcasesModule(tempDir) {
  const outputFile = path.join(tempDir, "website-showcases.mjs");

  await build({
    stdin: {
      contents:
        'export { websiteShowcaseSlides, DEFAULT_SHOWCASE_VIEWPORT_WIDTH, DEFAULT_SHOWCASE_VIEWPORT_HEIGHT } from "./src/content/website-showcases/index.ts";',
      resolveDir: rootDir,
      sourcefile: "capture-showcase-posters-entry.ts",
      loader: "ts",
    },
    bundle: true,
    platform: "node",
    format: "esm",
    target: ["node20"],
    outfile: outputFile,
  });

  return import(`${pathToFileURL(outputFile).href}?t=${Date.now()}`);
}

function getContentType(filePath) {
  const extension = path.extname(filePath).toLowerCase();

  switch (extension) {
    case ".css":
      return "text/css; charset=utf-8";
    case ".js":
      return "application/javascript; charset=utf-8";
    case ".svg":
      return "image/svg+xml";
    case ".png":
      return "image/png";
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".woff":
      return "font/woff";
    case ".woff2":
      return "font/woff2";
    default:
      return "application/octet-stream";
  }
}

function startStaticServer() {
  return new Promise((resolve, reject) => {
    const server = http.createServer((request, response) => {
      const requestUrl = new URL(request.url ?? "/", "http://127.0.0.1");
      const relativePath = requestUrl.pathname.replace(/^\/+/, "");
      const filePath = path.resolve(publicDir, relativePath);

      if (!filePath.startsWith(path.resolve(publicDir)) || !existsSync(filePath)) {
        response.statusCode = 404;
        response.end("Not found");
        return;
      }

      response.setHeader("Content-Type", getContentType(filePath));
      createReadStream(filePath).pipe(response);
    });

    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();

      if (!address || typeof address === "string") {
        reject(new Error("Could not determine static server address."));
        return;
      }

      resolve({
        server,
        baseUrl: `http://127.0.0.1:${address.port}`,
      });
    });
  });
}

function injectCaptureBase(html, baseUrl) {
  const normalizedHtml = html.replace(
    /\b(src|href)=["']\/([^"']+)["']/gi,
    (_match, attributeName, assetPath) => `${attributeName}="${baseUrl}/${assetPath}"`,
  );
  const captureStyle = `<base href="${baseUrl}/"><style id="codex-poster-capture">html,body{scroll-behavior:auto!important}*,*::before,*::after{animation:none!important;transition:none!important;caret-color:transparent!important}.cursor-dot,.noise-overlay{display:none!important}body{cursor:default!important}</style>`;

  if (/<\/head>/i.test(normalizedHtml)) {
    return normalizedHtml.replace(/<\/head>/i, `${captureStyle}</head>`);
  }

  if (/<body[\s>]/i.test(normalizedHtml)) {
    return normalizedHtml.replace(/<body([^>]*)>/i, `<body$1>${captureStyle}`);
  }

  return `${captureStyle}${normalizedHtml}`;
}

function getPosterOutputPath(posterSrc) {
  const relativePosterPath = posterSrc.replace(/^\/+/, "");
  return path.resolve(publicDir, relativePosterPath);
}

async function captureSlidePoster({
  baseUrl,
  browser,
  defaultHeight,
  defaultWidth,
  slide,
}) {
  const page = await browser.newPage({
    viewport: {
      width: slide.viewportWidth ?? defaultWidth,
      height: slide.viewportHeight ?? defaultHeight,
    },
    deviceScaleFactor: 1,
  });

  try {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.setContent(injectCaptureBase(slide.html, baseUrl), { waitUntil: "load" });
    await page.waitForLoadState("networkidle").catch(() => undefined);

    if (/id=["']root["']/.test(slide.html)) {
      await page
        .waitForFunction(() => {
          const root = document.getElementById("root");
          return Boolean(root && root.children.length > 0);
        })
        .catch(() => undefined);
    }

    await page
      .evaluate(async () => {
        if ("fonts" in document && document.fonts?.ready) {
          await document.fonts.ready;
        }
      })
      .catch(() => undefined);

    await page.waitForTimeout(/id=["']root["']/.test(slide.html) ? reactCaptureDelayMs : defaultCaptureDelayMs);

    const posterPath = getPosterOutputPath(slide.posterSrc);
    await mkdir(path.dirname(posterPath), { recursive: true });

    await page.screenshot({
      path: posterPath,
      type: "jpeg",
      quality: 84,
      fullPage: false,
    });

    console.log(`Captured poster: ${slide.id} -> ${posterPath}`);
  } finally {
    await page.close();
  }
}

async function main() {
  ensureGeneratedShowcases();
  await mkdir(postersDir, { recursive: true });

  const tempDir = await mkdtemp(path.join(os.tmpdir(), "buult-showcase-posters-"));

  try {
    const { websiteShowcaseSlides, DEFAULT_SHOWCASE_VIEWPORT_WIDTH, DEFAULT_SHOWCASE_VIEWPORT_HEIGHT } =
      await loadWebsiteShowcasesModule(tempDir);
    const { server, baseUrl } = await startStaticServer();

    try {
      const browser = await chromium.launch({ headless: true });

      try {
        for (const slide of websiteShowcaseSlides) {
          await captureSlidePoster({
            slide,
            browser,
            baseUrl,
            defaultWidth: DEFAULT_SHOWCASE_VIEWPORT_WIDTH,
            defaultHeight: DEFAULT_SHOWCASE_VIEWPORT_HEIGHT,
          });
        }
      } finally {
        await browser.close();
      }
    } finally {
      await new Promise((resolve, reject) => {
        server.close((error) => {
          if (error) {
            reject(error);
            return;
          }

          resolve();
        });
      });
    }
  } finally {
    await rm(tempDir, { recursive: true, force: true });
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
