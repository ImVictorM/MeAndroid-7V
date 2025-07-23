import { RefObject, useEffect } from "react";

type UseFocusTrapParams = {
  containerRef: RefObject<HTMLElement | null>;
  active: boolean;
  onEscape: (e: KeyboardEvent) => void;
};

const focusableSelectors = [
  "a[href]",
  "button:not([disabled])",
  "textarea",
  "input:not([disabled])",
  "select",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

export const useFocusTrap = ({
  containerRef,
  active,
  onEscape,
}: UseFocusTrapParams) => {
  useEffect(() => {
    if (!active || !containerRef.current) {
      return;
    }

    const container = containerRef.current;
    const containerFocusableElements: HTMLElement[] = Array.from(
      container.querySelectorAll(focusableSelectors),
    );
    const firstFocusable = containerFocusableElements[0];
    const lastFocusable =
      containerFocusableElements[containerFocusableElements.length - 1];

    const handleTab = (e: KeyboardEvent) => {
      if (e.shiftKey && document.activeElement === firstFocusable) {
        e.preventDefault();
        lastFocusable.focus();
      } else if (!e.shiftKey && document.activeElement === lastFocusable) {
        e.preventDefault();
        firstFocusable.focus();
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      onEscape(e);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Tab":
          handleTab(e);
          return;
        case "Escape":
          handleEscape(e);
          return;
        default:
          return;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [active, containerRef, onEscape]);
};
