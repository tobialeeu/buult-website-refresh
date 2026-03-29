import {
  showcaseFontsStylesheetHref,
  showcaseGlobalAssetReplacements,
  showcaseSlideAssetReplacements,
} from "./assetManifest.js";

type SlideAssetId = keyof typeof showcaseSlideAssetReplacements;

type LocalizeHtmlShowcaseOptions = {
  removePatterns?: RegExp[];
  stylesheetHrefs?: string[];
};

const googleFontLinkPattern =
  /<link[^>]+href="https:\/\/fonts\.(?:googleapis|gstatic)\.com[^"]*"[^>]*>\s*/gi;
const googleFontImportPattern =
  /@import\s+url\((['"])https:\/\/fonts\.googleapis\.com\/css2\?[^'"]+\1\);?/gi;

function replaceAllLiteral(source: string, search: string, replacement: string) {
  return source.split(search).join(replacement);
}

export function applyLocalShowcaseAssetReplacements(source: string, slideId: SlideAssetId) {
  const replacements = {
    ...showcaseGlobalAssetReplacements,
    ...showcaseSlideAssetReplacements[slideId],
  };

  let result = source.replace(googleFontLinkPattern, "").replace(googleFontImportPattern, "");

  for (const [search, replacement] of Object.entries(replacements).sort((a, b) => b[0].length - a[0].length)) {
    result = replaceAllLiteral(result, search, replacement);
  }

  return result;
}

function injectStylesheets(documentSource: string, stylesheetHrefs: string[]) {
  const hrefs = Array.from(new Set(stylesheetHrefs.filter(Boolean)));

  if (hrefs.length === 0) {
    return documentSource;
  }

  const tags = hrefs.map((href) => `  <link rel="stylesheet" href="${href}">`).join("\n");

  if (/<\/head>/i.test(documentSource)) {
    return documentSource.replace(/<\/head>/i, `${tags}\n</head>`);
  }

  if (/<body[\s>]/i.test(documentSource)) {
    return documentSource.replace(/<body([^>]*)>/i, `<body$1>\n${tags}`);
  }

  return `${tags}\n${documentSource}`;
}

export function localizeHtmlShowcase(
  source: string,
  slideId: SlideAssetId,
  options: LocalizeHtmlShowcaseOptions = {},
) {
  let result = applyLocalShowcaseAssetReplacements(source, slideId);

  for (const pattern of options.removePatterns ?? []) {
    result = result.replace(pattern, "");
  }

  return injectStylesheets(result, [showcaseFontsStylesheetHref, ...(options.stylesheetHrefs ?? [])]);
}

export {
  showcaseFontsStylesheetHref,
};
