"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import {
  cookieSettingsEventName,
  defaultCookieConsentPreferences,
  type CookieConsentPreferences,
  readCookieConsentFromDocument,
  writeCookieConsentToDocument,
} from "@/lib/cookie-consent";

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      focusable="false"
      className="cookie-banner-close-icon"
    >
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

type PreferenceToggleProps = {
  id: string;
  label: string;
  description: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

function PreferenceToggle({
  id,
  label,
  description,
  checked,
  onChange,
}: PreferenceToggleProps) {
  return (
    <label className="cookie-preference-row" htmlFor={id}>
      <span className="cookie-preference-copy">
        <strong>{label}</strong>
        <span>{description}</span>
      </span>
      <span className="cookie-toggle">
        <input
          id={id}
          className="cookie-toggle-input"
          type="checkbox"
          checked={checked}
          onChange={(event) => onChange(event.target.checked)}
        />
        <span aria-hidden="true" className="cookie-toggle-track">
          <span className="cookie-toggle-thumb" />
        </span>
      </span>
    </label>
  );
}

export function CookieConsentBanner() {
  const [isReady, setIsReady] = useState(false);
  const [consent, setConsent] = useState<CookieConsentPreferences | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [draft, setDraft] = useState(defaultCookieConsentPreferences);

  const syncConsent = useCallback(() => {
    const current = readCookieConsentFromDocument();
    setConsent(current);
    setDraft(current ?? defaultCookieConsentPreferences);
    setIsReady(true);
  }, []);

  const openSettings = useCallback(() => {
    const current = readCookieConsentFromDocument();
    setConsent(current);
    setDraft(current ?? defaultCookieConsentPreferences);
    setIsExpanded(true);
    setIsReady(true);
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(syncConsent);
    window.addEventListener(cookieSettingsEventName, openSettings);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener(cookieSettingsEventName, openSettings);
    };
  }, [openSettings, syncConsent]);

  const savePreferences = useCallback(
    (preferences: Omit<CookieConsentPreferences, "updatedAt" | "version">) => {
      const updated = writeCookieConsentToDocument(preferences);

      setConsent(updated ?? null);
      setDraft(updated ?? defaultCookieConsentPreferences);
      setIsExpanded(false);
      setIsReady(true);
    },
    [],
  );

  const handleAcceptAll = useCallback(() => {
    savePreferences({ analytics: true, marketing: true });
  }, [savePreferences]);

  const handleRejectAll = useCallback(() => {
    savePreferences({ analytics: false, marketing: false });
  }, [savePreferences]);

  const handleSaveDraft = useCallback(() => {
    savePreferences({
      analytics: draft.analytics,
      marketing: draft.marketing,
    });
  }, [draft.analytics, draft.marketing, savePreferences]);

  const handleToggleExpand = useCallback(() => {
    setIsExpanded((current) => !current);
  }, []);

  const isVisible = isReady && (!consent || isExpanded);

  if (!isVisible) {
    return null;
  }

  return (
    <section
      className="cookie-banner"
      aria-label="Cookie preferences notice"
      aria-live="polite"
    >
      <div className="cookie-banner-panel">
        <div className="cookie-banner-grid">
          <div className="cookie-banner-copy">
            <span className="cookie-banner-kicker">Cookie notice</span>
            <h2>
              {isExpanded
                ? "Choose your cookie preferences"
                : "Cookies help Quintus run smoothly and stay secure."}
            </h2>
            <p>
              Essential cookies keep the website working and remember your
              choice. Optional analytics or marketing cookies are only set if
              you actively allow them.
            </p>
            <div className="cookie-banner-links">
              <Link href="/cookie-policy">Cookie Policy</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </div>
          </div>
          <div className="cookie-banner-actions">
            {!isExpanded ? (
              <>
                <button
                  type="button"
                  className="cookie-banner-button"
                  onClick={handleAcceptAll}
                >
                  Accept all
                </button>
                <button
                  type="button"
                  className="cookie-banner-button cookie-banner-button-secondary"
                  onClick={handleRejectAll}
                >
                  Reject non-essential
                </button>
                <button
                  type="button"
                  className="cookie-banner-button cookie-banner-button-secondary"
                  onClick={handleToggleExpand}
                >
                  Manage preferences
                </button>
              </>
            ) : (
              <button
                type="button"
                className="cookie-banner-button cookie-banner-button-secondary"
                onClick={handleToggleExpand}
              >
                <CloseIcon />
                <span>Back to notice</span>
              </button>
            )}
          </div>
        </div>

        {isExpanded ? (
          <div className="cookie-banner-manage">
            <p className="cookie-banner-manage-copy">
              Essential cookies are always on. You can switch optional cookies
              on or off, then save your choice or turn them off entirely.
            </p>
            <div className="cookie-preference-list">
              <div className="cookie-preference-row cookie-preference-row-locked">
                <span className="cookie-preference-copy">
                  <strong>Essential cookies</strong>
                  <span>
                    Required for navigation, security, and remembering your
                    preferences.
                  </span>
                </span>
                <span className="cookie-preference-status">Always on</span>
              </div>
              <PreferenceToggle
                id="cookie-analytics"
                label="Analytics cookies"
                description="Help us understand how the site is used so we can improve it."
                checked={draft.analytics}
                onChange={(checked) =>
                  setDraft((current) => ({ ...current, analytics: checked }))
                }
              />
              <PreferenceToggle
                id="cookie-marketing"
                label="Marketing cookies"
                description="Support future campaign measurement and broker journeys."
                checked={draft.marketing}
                onChange={(checked) =>
                  setDraft((current) => ({ ...current, marketing: checked }))
                }
              />
            </div>
            <div className="cookie-banner-manage-actions">
              <button
                type="button"
                className="cookie-banner-button cookie-banner-button-secondary"
                onClick={handleRejectAll}
              >
                Reject non-essential
              </button>
              <button
                type="button"
                className="cookie-banner-button"
                onClick={handleSaveDraft}
              >
                Save preferences
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
