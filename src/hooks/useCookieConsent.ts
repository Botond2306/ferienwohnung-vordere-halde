import { useEffect, useState } from "react";

export type Consent = {
  analytics: boolean;
  fonts: boolean;
};

const STORAGE_KEY = "cookie-consent-v1";
const FONT_LINK_ID = "cookie-google-fonts";
const PRECONNECT_ID = "cookie-google-preconnect";

export function getStoredConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Consent;
  } catch (e) {
    return null;
  }
}

export function saveConsent(consent: Consent) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    window.dispatchEvent(new CustomEvent("cookie-consent-changed", { detail: consent }));
  } catch (e) {
    // ignore
  }
}

export function applyFonts(consent: Consent | null) {
  const head = document.head;
  const existingLink = document.getElementById(FONT_LINK_ID) as HTMLLinkElement | null;
  const existingPreconnect = document.getElementById(PRECONNECT_ID) as HTMLLinkElement | null;

  if (consent?.fonts) {
    if (!existingPreconnect) {
      const pre = document.createElement("link");
      pre.id = PRECONNECT_ID;
      pre.rel = "preconnect";
      pre.href = "https://fonts.googleapis.com";
      head.appendChild(pre);
    }
    if (!existingLink) {
      const link = document.createElement("link");
      link.id = FONT_LINK_ID;
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap";
      head.appendChild(link);
    }
  } else {
    if (existingLink) existingLink.remove();
    if (existingPreconnect) existingPreconnect.remove();
  }
}

export function useCookieConsent() {
  const [consent, setConsentState] = useState<Consent | null>(() => getStoredConsent());

  useEffect(() => {
    // apply fonts on mount according to stored consent
    applyFonts(consent);

    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as Consent | undefined;
      const newConsent = detail ?? getStoredConsent();
      setConsentState(newConsent ?? null);
      applyFonts(newConsent ?? null);
    };

    window.addEventListener("cookie-consent-changed", handler as EventListener);
    return () => window.removeEventListener("cookie-consent-changed", handler as EventListener);
  }, []);

  function save(consentToSave: Consent) {
    saveConsent(consentToSave);
    setConsentState(consentToSave);
    // applyFonts called through event listener
  }

  return { consent, save } as const;
}
