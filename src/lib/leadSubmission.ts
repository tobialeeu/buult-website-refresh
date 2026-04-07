type LeadSubmissionResult =
  | { ok: true }
  | { ok: false; message: string };

const DEFAULT_FORMSPREE_ENDPOINT = "https://formspree.io/f/mjgplpap";
const DEFAULT_TURNSTILE_SITE_KEY = "0x4AAAAAAC1xU-9xX3TbGYvC";
const DEFAULT_SUBMISSION_ERROR =
  "Versturen lukt nu niet. Probeer het later opnieuw of neem direct contact op.";

function parseErrorMessage(payload: unknown): string | null {
  if (!payload || typeof payload !== "object" || !("errors" in payload)) {
    return null;
  }

  const { errors } = payload as { errors?: Array<{ message?: string }> };

  if (!Array.isArray(errors) || errors.length === 0) {
    return null;
  }

  return errors
    .map((error) => error.message?.trim())
    .filter((message): message is string => Boolean(message))
    .join(" ");
}

async function parseJsonSafely(response: Response): Promise<unknown> {
  const contentType = response.headers.get("content-type") ?? "";

  if (!contentType.includes("application/json")) {
    return null;
  }

  try {
    return await response.json();
  } catch {
    return null;
  }
}

export function getLeadFormConfig() {
  const configuredEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim();
  const configuredTurnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY?.trim();

  return {
    formspreeEndpoint: configuredEndpoint || DEFAULT_FORMSPREE_ENDPOINT,
    turnstileSiteKey:
      configuredTurnstileSiteKey || (import.meta.env.DEV ? "" : DEFAULT_TURNSTILE_SITE_KEY),
  };
}

export async function submitLead({
  form,
  turnstileToken,
  extraFields,
}: {
  form: HTMLFormElement;
  turnstileToken?: string;
  extraFields?: Record<string, string>;
}): Promise<LeadSubmissionResult> {
  const { formspreeEndpoint } = getLeadFormConfig();

  if (!formspreeEndpoint) {
    return {
      ok: false,
      message:
        "Het formulier is nog niet gekoppeld. Voeg VITE_FORMSPREE_ENDPOINT toe om berichten te ontvangen.",
    };
  }

  const formData = new FormData(form);

  if (turnstileToken) {
    formData.set("cf-turnstile-response", turnstileToken);
  }

  if (extraFields) {
    Object.entries(extraFields).forEach(([key, value]) => {
      formData.set(key, value);
    });
  }

  try {
    const response = await fetch(formspreeEndpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    if (response.ok) {
      return { ok: true };
    }

    const payload = await parseJsonSafely(response);
    const apiMessage = parseErrorMessage(payload);

    if (response.status === 429) {
      return {
        ok: false,
        message: "Er zijn net te veel aanvragen verstuurd. Probeer het over een paar minuten opnieuw.",
      };
    }

    if (apiMessage) {
      return { ok: false, message: apiMessage };
    }

    return { ok: false, message: DEFAULT_SUBMISSION_ERROR };
  } catch {
    return { ok: false, message: DEFAULT_SUBMISSION_ERROR };
  }
}
