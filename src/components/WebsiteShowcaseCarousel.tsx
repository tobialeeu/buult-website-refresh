import * as React from "react";
import { AlertTriangle, Monitor } from "lucide-react";

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  DEFAULT_SHOWCASE_VIEWPORT_HEIGHT,
  DEFAULT_SHOWCASE_VIEWPORT_WIDTH,
  type WebsiteShowcaseSlide,
  websiteShowcaseSlides,
} from "@/content/website-showcases";

type ActiveIframeStatus = "idle" | "mounting" | "ready" | "error";

const LIVE_IFRAME_MOUNT_DELAY_MS = 140;
const previewDocumentPattern = /<!doctype html|<html[\s>]|<body[\s>]/i;
const previewScrollReset = `<style id="codex-preview-scroll-reset">html,body{margin:0!important;padding:0!important;-ms-overflow-style:none!important;scrollbar-width:none!important;}html::-webkit-scrollbar,body::-webkit-scrollbar{display:none!important;width:0!important;height:0!important;}#root{margin:0!important;padding:0!important;min-height:100%;width:100%;}</style>`;
const previewInteractionGuard = `<script id="codex-preview-interaction-guard">(()=>{if(window.__codexPreviewInteractionGuardInstalled){return;}window.__codexPreviewInteractionGuardInstalled=true;const noop=()=>undefined;const stopEvent=(event)=>{event.preventDefault();event.stopPropagation();};const blockAnchorNavigation=(event)=>{const target=event.target;if(!(target instanceof Element)){return;}const anchor=target.closest('a[href],area[href]');if(anchor){stopEvent(event);}};document.addEventListener('click',blockAnchorNavigation,true);document.addEventListener('auxclick',blockAnchorNavigation,true);document.addEventListener('submit',(event)=>{stopEvent(event);},true);try{window.open=()=>null;}catch(error){}try{if(typeof history.pushState==='function'){history.pushState=noop;}if(typeof history.replaceState==='function'){history.replaceState=noop;}}catch(error){}try{const locationPrototype=Object.getPrototypeOf(window.location);if(locationPrototype){if(typeof locationPrototype.assign==='function'){locationPrototype.assign=noop;}if(typeof locationPrototype.replace==='function'){locationPrototype.replace=noop;}}}catch(error){}try{if(typeof HTMLFormElement!=='undefined'){HTMLFormElement.prototype.submit=noop;if(typeof HTMLFormElement.prototype.requestSubmit==='function'){HTMLFormElement.prototype.requestSubmit=noop;}}}catch(error){}})();<\/script>`;

function isRenderableHtmlDocument(html: string) {
  return html.trim().length > 0 && previewDocumentPattern.test(html);
}

function withPreviewViewportReset(html: string) {
  const missingPreviewEnhancements = [];

  if (!/<style id=["']codex-preview-scroll-reset["']>/.test(html)) {
    missingPreviewEnhancements.push(previewScrollReset);
  }

  if (!/<script id=["']codex-preview-interaction-guard["']>/.test(html)) {
    missingPreviewEnhancements.push(previewInteractionGuard);
  }

  if (missingPreviewEnhancements.length === 0) {
    return html;
  }

  const previewEnhancements = missingPreviewEnhancements.join("");

  if (/<\/head>/i.test(html)) {
    return html.replace(/<\/head>/i, `${previewEnhancements}</head>`);
  }

  if (/<body[\s>]/i.test(html)) {
    return html.replace(/<body([^>]*)>/i, `<body$1>${previewEnhancements}`);
  }

  return `${previewEnhancements}${html}`;
}

function useElementWidth<T extends HTMLElement>() {
  const elementRef = React.useRef<T | null>(null);
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    const node = elementRef.current;

    if (!node) {
      return;
    }

    const updateWidth = () => {
      setWidth(node.clientWidth);
    };

    updateWidth();

    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", updateWidth);

      return () => {
        window.removeEventListener("resize", updateWidth);
      };
    }

    const observer = new ResizeObserver(() => {
      updateWidth();
    });

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return { elementRef, width };
}

function getViewportWidth(slide: WebsiteShowcaseSlide) {
  return slide.viewportWidth ?? DEFAULT_SHOWCASE_VIEWPORT_WIDTH;
}

function getViewportHeight(slide: WebsiteShowcaseSlide) {
  return slide.viewportHeight ?? DEFAULT_SHOWCASE_VIEWPORT_HEIGHT;
}

function getShowcaseArrowClasses(slideId: string) {
  switch (slideId) {
    case "fixfast":
      return "border-[#fca311]/60 bg-[#fca311] text-[#14213d] shadow-[0_16px_32px_-20px_rgba(252,163,17,0.95)] hover:bg-[#ffb42b]";
    case "nova-nights":
      return "border-[#ccff00]/60 bg-[#ccff00] text-black shadow-[0_16px_32px_-20px_rgba(204,255,0,0.95)] hover:bg-white";
    case "maison-ember":
      return "border-[#f1e7da]/45 bg-[#f5f1e8] text-[#111111] shadow-[0_16px_32px_-20px_rgba(245,241,232,0.8)] hover:bg-white";
    case "vectorflow":
      return "border-indigo-300/45 bg-indigo-500 text-white shadow-[0_16px_32px_-20px_rgba(99,102,241,0.95)] hover:bg-indigo-400";
    case "wild-kin":
      return "border-[#c46d4d]/55 bg-[#f4f1ea] text-[#2c302e] shadow-[0_16px_32px_-20px_rgba(196,109,77,0.72)] hover:bg-[#c46d4d] hover:text-white";
    default:
      return "border-border/60 bg-white/95 text-slate-900 shadow-xl hover:bg-white";
  }
}

function getPosterWarmupIds(slides: WebsiteShowcaseSlide[], activeIndex: number) {
  if (slides.length === 0) {
    return [];
  }

  if (slides.length === 1) {
    return [slides[activeIndex]?.id].filter(Boolean);
  }

  const previousIndex = (activeIndex - 1 + slides.length) % slides.length;
  const nextIndex = (activeIndex + 1) % slides.length;

  return [slides[activeIndex]?.id, slides[nextIndex]?.id, slides[previousIndex]?.id].filter(
    (slideId, index, array): slideId is string => Boolean(slideId) && array.indexOf(slideId) === index,
  );
}

function warmPosterImage(src: string) {
  if (typeof window === "undefined") {
    return;
  }

  const image = new window.Image();
  image.decoding = "async";
  image.src = src;
}

type BrowserWindowShellProps = {
  children: React.ReactNode;
  activeSlide: WebsiteShowcaseSlide;
  slideCount: number;
  activeSlideIndex: number;
};

function BrowserWindowShell({
  children,
  activeSlide,
  slideCount,
  activeSlideIndex,
}: BrowserWindowShellProps) {
  return (
    <div className="rounded-[2rem]">
      <div className="overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.04]">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-slate-950 px-4 py-3 text-white/75 md:px-5">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex min-w-0 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium">
            <Monitor size={14} />
            <span className="truncate">{activeSlide.title}</span>
          </div>
          <span className="text-xs font-medium text-white/50">
            {String(activeSlideIndex + 1).padStart(2, "0")} / {String(slideCount).padStart(2, "0")}
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}

type PosterImageProps = {
  eager?: boolean;
  slide: WebsiteShowcaseSlide;
};

function PosterImage({ eager = false, slide }: PosterImageProps) {
  return (
    <img
      src={slide.posterSrc}
      alt={`${slide.title} poster preview`}
      className="h-full w-full object-cover object-top"
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={eager ? "high" : "low"}
      width={getViewportWidth(slide)}
      height={getViewportHeight(slide)}
      draggable={false}
    />
  );
}

type PosterFrameProps = {
  eagerPoster?: boolean;
  slide: WebsiteShowcaseSlide;
};

function PosterFrame({ eagerPoster = false, slide }: PosterFrameProps) {
  return (
    <div>
      <div
        className="relative overflow-hidden bg-slate-950/90"
        style={{ aspectRatio: `${getViewportWidth(slide)} / ${getViewportHeight(slide)}` }}
      >
        <PosterImage eager={eagerPoster} slide={slide} />
      </div>
    </div>
  );
}

type ActivePreviewFrameProps = {
  iframeStatus: ActiveIframeStatus;
  onIframeError: () => void;
  onIframeLoad: () => void;
  shouldMountIframe: boolean;
  slide: WebsiteShowcaseSlide;
};

function ActivePreviewFrame({
  iframeStatus,
  onIframeError,
  onIframeLoad,
  shouldMountIframe,
  slide,
}: ActivePreviewFrameProps) {
  const { elementRef, width } = useElementWidth<HTMLDivElement>();
  const previewHtml = React.useMemo(() => withPreviewViewportReset(slide.html), [slide.html]);
  const viewportWidth = getViewportWidth(slide);
  const viewportHeight = getViewportHeight(slide);
  const scale = width > 0 ? Math.min(1, width / viewportWidth) : 1;
  const isReady = iframeStatus === "ready";
  const isErrored = iframeStatus === "error";

  return (
    <div ref={elementRef}>
      <div
        className="relative overflow-hidden bg-slate-950/90"
        style={{ aspectRatio: `${viewportWidth} / ${viewportHeight}` }}
      >
        <div className={`absolute inset-0 transition-opacity duration-200 ${isReady ? "opacity-0" : "opacity-100"}`}>
          <PosterImage eager slide={slide} />
        </div>

        {shouldMountIframe ? (
          <div
            className={`absolute inset-0 transition-opacity duration-200 ${isReady ? "opacity-100" : "opacity-0"}`}
            style={{
              width: viewportWidth,
              height: viewportHeight,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
            }}
          >
            <iframe
              title={`${slide.title} website preview`}
              srcDoc={previewHtml}
              sandbox="allow-scripts"
              loading="eager"
              onLoad={onIframeLoad}
              onError={onIframeError}
              className="block h-full w-full border-0 bg-transparent"
            />
          </div>
        ) : null}

        {isErrored ? (
          <div className="pointer-events-none absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-amber-300/25 bg-slate-950/80 px-3 py-1.5 text-xs font-medium text-amber-100 backdrop-blur-md">
            <AlertTriangle size={14} />
            <span>Live preview laadt niet</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function InactiveSlideFrame({
  shouldWarmPoster,
  slide,
}: {
  shouldWarmPoster: boolean;
  slide: WebsiteShowcaseSlide;
}) {
  if (!shouldWarmPoster) {
    return (
      <div>
        <div
          className="flex items-center justify-center bg-slate-950/92"
          style={{ aspectRatio: `${getViewportWidth(slide)} / ${getViewportHeight(slide)}` }}
        >
          <span className="text-sm font-medium text-white/40">{slide.title}</span>
        </div>
      </div>
    );
  }

  return <PosterFrame eagerPoster={false} slide={slide} />;
}

export default function WebsiteShowcaseCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [activeIframeStatus, setActiveIframeStatus] = React.useState<ActiveIframeStatus>("idle");
  const [liveSlideId, setLiveSlideId] = React.useState<string | null>(null);
  const liveMountTimeoutRef = React.useRef<number | null>(null);

  const activeSlide = websiteShowcaseSlides[activeIndex];
  const activeSlideId = activeSlide?.id ?? null;
  const activeArrowClasses = activeSlide ? getShowcaseArrowClasses(activeSlide.id) : "";
  const posterWarmupIds = React.useMemo(
    () => getPosterWarmupIds(websiteShowcaseSlides, activeIndex),
    [activeIndex],
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const syncSelection = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    syncSelection();
    api.on("select", syncSelection);
    api.on("reInit", syncSelection);

    return () => {
      api.off("select", syncSelection);
      api.off("reInit", syncSelection);
    };
  }, [api]);

  React.useEffect(() => {
    const warmupSlides = websiteShowcaseSlides.filter((slide) => posterWarmupIds.includes(slide.id));

    warmupSlides.forEach((slide) => {
      warmPosterImage(slide.posterSrc);
    });
  }, [posterWarmupIds]);

  React.useEffect(() => {
    if (!activeSlideId) {
      return;
    }

    if (liveMountTimeoutRef.current !== null) {
      window.clearTimeout(liveMountTimeoutRef.current);
      liveMountTimeoutRef.current = null;
    }

    setLiveSlideId(null);
    setActiveIframeStatus("idle");

    liveMountTimeoutRef.current = window.setTimeout(() => {
      setLiveSlideId(activeSlideId);
      setActiveIframeStatus("mounting");
      liveMountTimeoutRef.current = null;
    }, LIVE_IFRAME_MOUNT_DELAY_MS);

    return () => {
      if (liveMountTimeoutRef.current !== null) {
        window.clearTimeout(liveMountTimeoutRef.current);
        liveMountTimeoutRef.current = null;
      }
    };
  }, [activeSlideId]);

  React.useEffect(() => {
    return () => {
      if (liveMountTimeoutRef.current !== null) {
        window.clearTimeout(liveMountTimeoutRef.current);
        liveMountTimeoutRef.current = null;
      }
    };
  }, []);

  if (websiteShowcaseSlides.length === 0) {
    return (
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Website showcase</p>
          <h2 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">Wat kunnen wij maken?</h2>
        </div>
        <div className="rounded-[2rem] border border-dashed border-border/80 bg-surface/80 px-8 py-16 text-center shadow-[0_25px_70px_-55px_rgba(15,23,42,0.2)]">
          <h3 className="text-2xl font-bold text-foreground md:text-3xl">Nog geen website-previews toegevoegd</h3>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            Voeg een nieuw showcase-bestand toe in `src/content/website-showcases/` en registreer die in `index.ts`.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Website showcase</p>
        <h2 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">Wat kunnen wij maken?</h2>
      </div>
      <BrowserWindowShell
        activeSlide={activeSlide}
        activeSlideIndex={activeIndex}
        slideCount={websiteShowcaseSlides.length}
      >
        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: true, watchDrag: false }}
          className="relative"
        >
          <CarouselContent>
            {websiteShowcaseSlides.map((slide, index) => {
              const isActive = index === activeIndex;
              const shouldWarmPoster = posterWarmupIds.includes(slide.id);
              const canRenderLiveIframe =
                isActive && liveSlideId === slide.id && isRenderableHtmlDocument(slide.html);

              return (
                <CarouselItem key={slide.id}>
                  <div>
                    {isActive ? (
                      <ActivePreviewFrame
                        slide={slide}
                        iframeStatus={activeIframeStatus}
                        shouldMountIframe={canRenderLiveIframe}
                        onIframeLoad={() => setActiveIframeStatus("ready")}
                        onIframeError={() => setActiveIframeStatus("error")}
                      />
                    ) : (
                      <InactiveSlideFrame slide={slide} shouldWarmPoster={shouldWarmPoster} />
                    )}
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          <CarouselPrevious
            className={`left-4 top-1/2 z-20 h-11 w-11 md:left-5 md:h-12 md:w-12 ${activeArrowClasses}`}
          />
          <CarouselNext
            className={`right-4 top-1/2 z-20 h-11 w-11 md:right-5 md:h-12 md:w-12 ${activeArrowClasses}`}
          />
        </Carousel>
      </BrowserWindowShell>
    </div>
  );
}
