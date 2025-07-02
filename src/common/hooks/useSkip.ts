import { useEffect, useState } from "react";

export const useSkip = (defaultKey = "Space", touchSkip = true) => {
  const [shouldSkip, setShouldSkip] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === defaultKey) {
        setShouldSkip(true);
      }
    };

    const handleTouch = () => {
      const isTouchDevice = navigator.maxTouchPoints > 0;

      if (isTouchDevice && touchSkip) {
        setShouldSkip(true);
      }
    };

    window.addEventListener("touchstart", handleTouch);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("touchstart", handleTouch);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [defaultKey, touchSkip]);

  return shouldSkip;
};
