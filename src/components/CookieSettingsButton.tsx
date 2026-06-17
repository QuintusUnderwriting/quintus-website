"use client";

import { cookieSettingsEventName } from "@/lib/cookie-consent";

type CookieSettingsButtonProps = {
  className?: string;
  children?: string;
};

function CookieSettingsIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      focusable="false"
      className="cookie-settings-button-icon"
    >
      <path d="M4 7h6m4 0h6M4 12h10m4 0h2M4 17h4m4 0h8" />
      <circle cx="13" cy="7" r="1.6" />
      <circle cx="17" cy="12" r="1.6" />
      <circle cx="9" cy="17" r="1.6" />
    </svg>
  );
}

export function CookieSettingsButton({
  className = "",
  children = "Cookie settings",
}: CookieSettingsButtonProps) {
  return (
    <button
      type="button"
      className={`cookie-settings-button ${className}`.trim()}
      onClick={() => {
        window.dispatchEvent(new Event(cookieSettingsEventName));
      }}
    >
      <CookieSettingsIcon />
      <span>{children}</span>
    </button>
  );
}
