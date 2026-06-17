export const cookieConsentCookieName = "quintus_cookie_consent";
export const cookieSettingsEventName = "quintus-open-cookie-settings";

export type CookieConsentPreferences = {
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
  version: 1;
};

export const defaultCookieConsentPreferences: CookieConsentPreferences = {
  analytics: false,
  marketing: false,
  updatedAt: "",
  version: 1,
};

function canUseSecureCookie() {
  return typeof window !== "undefined" && window.location.protocol === "https:";
}

export function parseCookieConsent(value: string | undefined | null) {
  if (!value) {
    return null;
  }

  try {
    const parsed = JSON.parse(decodeURIComponent(value)) as Partial<CookieConsentPreferences>;

    if (parsed.version !== 1) {
      return null;
    }

    return {
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
      updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : "",
      version: 1 as const,
    };
  } catch {
    return null;
  }
}

export function readCookieConsentFromDocument() {
  if (typeof document === "undefined") {
    return null;
  }

  const entry = document.cookie
    .split("; ")
    .find((part) => part.startsWith(`${cookieConsentCookieName}=`));

  const rawValue = entry?.slice(cookieConsentCookieName.length + 1) ?? null;
  return parseCookieConsent(rawValue);
}

export function writeCookieConsentToDocument(
  preferences: Omit<CookieConsentPreferences, "updatedAt" | "version">,
) {
  if (typeof document === "undefined") {
    return;
  }

  const consent: CookieConsentPreferences = {
    ...preferences,
    updatedAt: new Date().toISOString(),
    version: 1,
  };

  const cookieValue = encodeURIComponent(JSON.stringify(consent));
  const secure = canUseSecureCookie() ? "; Secure" : "";

  document.cookie = [
    `${cookieConsentCookieName}=${cookieValue}`,
    "Path=/",
    "Max-Age=31536000",
    "SameSite=Lax",
    secure,
  ]
    .filter(Boolean)
    .join("; ");

  return consent;
}

export function consentSummaryLabel(preferences: CookieConsentPreferences | null) {
  if (!preferences) {
    return "Essential only";
  }

  if (preferences.analytics && preferences.marketing) {
    return "All optional cookies";
  }

  if (preferences.analytics || preferences.marketing) {
    return "Some optional cookies";
  }

  return "Essential only";
}
