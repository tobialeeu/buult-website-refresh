type BundledReactPreviewOptions = {
  title: string;
  bundleSrc: string;
  stylesheetHrefs?: string[];
};

export function createBundledReactPreviewDocument({
  title,
  bundleSrc,
  stylesheetHrefs = [],
}: BundledReactPreviewOptions) {
  const dedupedStylesheets = Array.from(new Set(stylesheetHrefs.filter(Boolean)));
  const styleLinks = dedupedStylesheets
    .map((href) => `  <link rel="stylesheet" href="${href}">`)
    .join("\n");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
${styleLinks}
  <style>
    html, body, #root {
      min-height: 100%;
    }

    @keyframes codexSpin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    .animate-spin-slow {
      animation-name: codexSpin;
      animation-duration: 12s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
  </style>
</head>
<body>
  <div id="root"></div>
  <script src="${bundleSrc}" defer></script>
</body>
</html>`;
}
