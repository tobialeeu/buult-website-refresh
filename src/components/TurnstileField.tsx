import { useEffect, useId, useRef, useState } from "react";

const TURNSTILE_SCRIPT_ID = "cloudflare-turnstile-script";
const TURNSTILE_SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

let turnstileLoader: Promise<void> | null = null;

function loadTurnstileScript() {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }

  if (window.turnstile) {
    return Promise.resolve();
  }

  if (turnstileLoader) {
    return turnstileLoader;
  }

  turnstileLoader = new Promise<void>((resolve, reject) => {
    const existingScript = document.getElementById(TURNSTILE_SCRIPT_ID) as HTMLScriptElement | null;

    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(), { once: true });
      existingScript.addEventListener("error", () => reject(new Error("Turnstile kon niet worden geladen.")), {
        once: true,
      });
      return;
    }

    const script = document.createElement("script");
    script.id = TURNSTILE_SCRIPT_ID;
    script.src = TURNSTILE_SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Turnstile kon niet worden geladen."));

    document.head.appendChild(script);
  });

  return turnstileLoader;
}

type TurnstileFieldProps = {
  siteKey: string;
  resetKey: number;
  onTokenChange: (token: string) => void;
};

export default function TurnstileField({
  siteKey,
  resetKey,
  onTokenChange,
}: TurnstileFieldProps) {
  const descriptionId = useId();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);
  const hasRenderedRef = useRef(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    onTokenChange("");

    if (!siteKey || !containerRef.current) {
      return;
    }

    let isCancelled = false;

    loadTurnstileScript()
      .then(() => {
        if (isCancelled || !containerRef.current || !window.turnstile) {
          return;
        }

        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          theme: "light",
          callback: (token) => {
            setHasError(false);
            onTokenChange(token);
          },
          "error-callback": () => {
            setHasError(true);
            onTokenChange("");
          },
          "expired-callback": () => {
            onTokenChange("");
          },
          "timeout-callback": () => {
            onTokenChange("");
          },
        });

        hasRenderedRef.current = true;
      })
      .catch(() => {
        if (!isCancelled) {
          setHasError(true);
          onTokenChange("");
        }
      });

    return () => {
      isCancelled = true;

      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }

      hasRenderedRef.current = false;
      onTokenChange("");
    };
  }, [onTokenChange, siteKey]);

  useEffect(() => {
    if (!hasRenderedRef.current || !widgetIdRef.current || !window.turnstile) {
      return;
    }

    window.turnstile.reset(widgetIdRef.current);
    onTokenChange("");
    setHasError(false);
  }, [onTokenChange, resetKey]);

  return (
    <div className="space-y-2">
      <div
        ref={containerRef}
        className="min-h-[65px]"
        role="group"
        aria-label="Spamcontrole"
        aria-describedby={descriptionId}
        data-testid="turnstile-widget"
      />
      <p id={descriptionId} className="text-sm text-muted-foreground">
        We gebruiken spamcontrole om misbruik van het formulier te beperken.
      </p>
      {hasError ? (
        <p className="text-sm text-destructive">
          De spamcontrole kon niet worden geladen. Ververs de pagina en probeer het opnieuw.
        </p>
      ) : null}
    </div>
  );
}
