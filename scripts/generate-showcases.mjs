import { execFileSync } from "node:child_process";
import { mkdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { build } from "esbuild";

import {
  showcaseGlobalAssetReplacements,
  showcaseSlideAssetReplacements,
} from "../src/content/website-showcases/assetManifest.js";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(scriptDir, "..");
const generatedDir = path.join(rootDir, "public", "website-showcases", "generated");
const reactSlides = [
  {
    id: "nova-nights",
    modulePath: path.join(rootDir, "src", "content", "website-showcases", "novaNights.ts"),
    constName: "novaNightsSource",
    outputFileName: "nova-nights.js",
  },
  {
    id: "vectorflow",
    modulePath: path.join(rootDir, "src", "content", "website-showcases", "vectorFlow.ts"),
    constName: "vectorFlowSource",
    outputFileName: "vectorflow.js",
  },
  {
    id: "wild-kin",
    modulePath: path.join(rootDir, "src", "content", "website-showcases", "wildKin.ts"),
    constName: "wildKinSource",
    outputFileName: "wild-kin.js",
  },
];

function getTailwindCliPath() {
  return path.join(rootDir, "node_modules", "tailwindcss", "lib", "cli.js");
}

function replaceAllLiteral(source, search, replacement) {
  return source.split(search).join(replacement);
}

function applyLocalAssetReplacements(source, slideId) {
  const replacements = {
    ...showcaseGlobalAssetReplacements,
    ...(showcaseSlideAssetReplacements[slideId] ?? {}),
  };

  let result = source;

  for (const [search, replacement] of Object.entries(replacements).sort((a, b) => b[0].length - a[0].length)) {
    result = replaceAllLiteral(result, search, replacement);
  }

  return result;
}

function extractDoubleQuotedValue(moduleSource, startQuoteIndex) {
  let cursor = startQuoteIndex + 1;
  let escaped = false;

  while (cursor < moduleSource.length) {
    const character = moduleSource[cursor];

    if (!escaped && character === '"') {
      return JSON.parse(moduleSource.slice(startQuoteIndex, cursor + 1));
    }

    escaped = !escaped && character === "\\";
    cursor += 1;
  }

  throw new Error("Could not find closing double quote.");
}

function extractTemplateLiteralValue(moduleSource, startBacktickIndex, expressionPrefix = "") {
  let cursor = startBacktickIndex + 1;
  let escaped = false;

  while (cursor < moduleSource.length) {
    const character = moduleSource[cursor];

    if (!escaped && character === "`") {
      const literal = `${expressionPrefix}${moduleSource.slice(startBacktickIndex, cursor + 1)}`;
      return Function(`return ${literal};`)();
    }

    escaped = !escaped && character === "\\";
    cursor += 1;
  }

  throw new Error("Could not find closing template literal.");
}

function extractConstValue(moduleSource, constName) {
  const prefix = `const ${constName} = `;
  const prefixIndex = moduleSource.indexOf(prefix);

  if (prefixIndex === -1) {
    throw new Error(`Could not find constant "${constName}".`);
  }

  let cursor = prefixIndex + prefix.length;

  while (cursor < moduleSource.length && /\s/.test(moduleSource[cursor])) {
    cursor += 1;
  }

  const currentCharacter = moduleSource[cursor];

  if (currentCharacter === '"') {
    return extractDoubleQuotedValue(moduleSource, cursor);
  }

  if (currentCharacter === "`") {
    return extractTemplateLiteralValue(moduleSource, cursor);
  }

  if (moduleSource.startsWith("String.raw`", cursor)) {
    return extractTemplateLiteralValue(moduleSource, cursor + "String.raw".length, "String.raw");
  }

  throw new Error(`Unsupported constant format for "${constName}".`);
}

function runTailwindBuild(configFileName, inputFileName, outputFileName) {
  execFileSync(
    process.execPath,
    [
      getTailwindCliPath(),
      "-c",
      path.join(rootDir, "scripts", "website-showcases", configFileName),
      "-i",
      path.join(rootDir, "scripts", "website-showcases", inputFileName),
      "-o",
      path.join(generatedDir, outputFileName),
      "--minify",
    ],
    {
      cwd: rootDir,
      stdio: "inherit",
    },
  );
}

async function buildReactShowcaseBundle({ id, modulePath, constName, outputFileName }) {
  const moduleSource = await readFile(modulePath, "utf8");
  const rawSource = extractConstValue(moduleSource, constName);
  const localizedSource = applyLocalAssetReplacements(rawSource, id);
  const bundleEntry = `${localizedSource}

import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(React.createElement(App));
`;

  await build({
    stdin: {
      contents: bundleEntry,
      resolveDir: rootDir,
      sourcefile: `${id}.tsx`,
      loader: "tsx",
    },
    bundle: true,
    format: "iife",
    platform: "browser",
    target: ["es2020"],
    minify: true,
    legalComments: "none",
    outfile: path.join(generatedDir, outputFileName),
  });
}

async function main() {
  await mkdir(generatedDir, { recursive: true });

  runTailwindBuild("tailwind.react.config.cjs", "input.react.css", "react-showcases.css");
  runTailwindBuild("tailwind.maison-ember.config.cjs", "input.maison-ember.css", "maison-ember.css");

  for (const slide of reactSlides) {
    await buildReactShowcaseBundle(slide);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
