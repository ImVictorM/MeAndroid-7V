import { useEffect, useState } from "react";
import { IS_TOUCH_DEVICE } from "../utils/device";

export const useSkip = (defaultKey = "Space", touchSkip = true) => {
  const [shouldSkip, setShouldSkip] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === defaultKey) {
        setShouldSkip(true);
      }
    };

    const handleTouch = () => {
      if (IS_TOUCH_DEVICE && touchSkip) {
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
