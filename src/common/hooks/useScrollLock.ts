import { useLayoutEffect } from "react";

export function useScrollLock(shouldLock: boolean) {
  useLayoutEffect(() => {
    if (!shouldLock) return;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollBarWidth}px`;

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [shouldLock]);
}
