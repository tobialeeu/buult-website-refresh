import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

interface Props {
  imageSrc: string;
  imageAlt: string;
  revealContent: ReactNode;
  children?: ReactNode;
}

export default function ShowcaseCrack({ imageSrc, imageAlt, revealContent, children }: Props) {
  const shouldReduceMotion = useReducedMotion();
  const scrollRef = useRef<HTMLDivElement>(null);

  // With height 280vh, sticky stays in view while scrollYProgress < (280-100)/280 ≈ 0.643.
  // All animations are timed to finish by 0.60 so everything is revealed before the sticky exits.
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });

  const topHalfY = useTransform(scrollYProgress, [0.05, 0.55], ["0%", "-52%"]);
  const bottomHalfY = useTransform(scrollYProgress, [0.05, 0.55], ["0%", "52%"]);
  const revealOpacity = useTransform(scrollYProgress, [0.08, 0.38], [0, 1]);
  const revealY = useTransform(scrollYProgress, [0.08, 0.38], [30, 0]);
  const cardsOpacity = useTransform(scrollYProgress, [0.28, 0.58], [0, 1]);
  const cardsY = useTransform(scrollYProgress, [0.28, 0.58], [50, 0]);

  const imageMarkup = (
    <div className="flex h-full items-center justify-center bg-card py-6 md:py-8">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-border/70 bg-slate-950 shadow-[0_8px_30px_-8px_rgba(15,23,42,0.15)]">
            <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_35%),linear-gradient(to_bottom,rgba(15,23,42,0.02),rgba(15,23,42,0.18))]" />
            <img
              className="aspect-[16/9] w-full object-cover"
              src={imageSrc}
              alt={imageAlt}
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              width={1536}
              height={1024}
            />
          </div>
        </div>
      </div>
    </div>
  );

  if (shouldReduceMotion) {
    return (
      <section className="bg-card py-6 md:py-8">
        <div className="container space-y-10">
          <div className="mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-border/70 bg-slate-950 shadow-[0_8px_30px_-8px_rgba(15,23,42,0.15)]">
              <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_35%),linear-gradient(to_bottom,rgba(15,23,42,0.02),rgba(15,23,42,0.18))]" />
              <img
                className="aspect-[16/9] w-full object-cover"
                src={imageSrc}
                alt={imageAlt}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                width={1536}
                height={1024}
              />
            </div>
          </div>

          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4">
            {revealContent}
            {children && <div className="w-full">{children}</div>}
          </div>
        </div>
      </section>
    );
  }

  return (
    <div ref={scrollRef} style={{ height: "280vh" }}>
      <div
        className="sticky top-0 overflow-hidden bg-card"
        style={{ height: "100vh" }}
      >
        {/* Revealed content — sits behind the image halves, scrolls into view as image cracks */}
        <div className="absolute inset-0 flex flex-col items-center overflow-hidden px-4 pt-20 pb-6 md:pt-24">
          <div className="my-auto flex w-full max-w-3xl flex-col items-center gap-4">
            <motion.div className="shrink-0" style={{ opacity: revealOpacity, y: revealY }}>
              {revealContent}
            </motion.div>

            {children && (
              <motion.div
                className="w-full"
                style={{ opacity: cardsOpacity, y: cardsY }}
              >
                {children}
              </motion.div>
            )}
          </div>
        </div>

        {/* Top half of image */}
        <motion.div
          className="absolute inset-0"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
            y: topHalfY,
          }}
        >
          {imageMarkup}
        </motion.div>

        {/* Bottom half of image */}
        <motion.div
          className="absolute inset-0"
          style={{
            clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
            y: bottomHalfY,
          }}
        >
          {imageMarkup}
        </motion.div>
      </div>
    </div>
  );
}
