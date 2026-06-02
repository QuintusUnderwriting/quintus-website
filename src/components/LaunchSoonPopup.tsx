"use client";

import { useCallback, useEffect, useState } from "react";
import { brokerRegistrationUrl } from "@/data/site";
import { ButtonLink } from "./ButtonLink";

const DISMISS_KEY = "quintus-launch-soon-dismissed";

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      focusable="false"
      className="launch-popup-close-icon"
    >
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function LaunchSoonPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const closePopup = useCallback(() => {
    window.sessionStorage.setItem(DISMISS_KEY, "1");
    setIsOpen(false);
    document.body.classList.remove("launch-popup-open");
  }, []);

  useEffect(() => {
    if (window.sessionStorage.getItem(DISMISS_KEY) === "1") {
      return;
    }

    const timer = window.setTimeout(() => {
      setIsOpen(true);
    }, 350);

    return () => {
      window.clearTimeout(timer);
      document.body.classList.remove("launch-popup-open");
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      document.body.classList.remove("launch-popup-open");
      return;
    }

    document.body.classList.add("launch-popup-open");

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closePopup();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("launch-popup-open");
    };
  }, [isOpen, closePopup]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="launch-popup" role="presentation" onClick={closePopup}>
      <div
        className="launch-popup-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="launch-popup-title"
        aria-describedby="launch-popup-copy"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="launch-popup-close"
          aria-label="Close popup"
          onClick={closePopup}
        >
          <CloseIcon />
        </button>
        <span className="launch-popup-label">Launching Soon</span>
        <h2 id="launch-popup-title">Quintus Underwriting is almost here.</h2>
        <p id="launch-popup-copy">
          Explore the site now or register as a partner to stay close to our
          launch.
        </p>
        <div className="launch-popup-actions">
          <ButtonLink
            href={brokerRegistrationUrl}
            onClick={closePopup}
            className="launch-popup-button"
          >
            Become a Partner
          </ButtonLink>
          <button type="button" className="launch-popup-secondary" onClick={closePopup}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
