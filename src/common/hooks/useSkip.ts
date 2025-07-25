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

    window.addEventListener("click", handleTouch);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("click", handleTouch);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [defaultKey, touchSkip]);

  return shouldSkip;
};
