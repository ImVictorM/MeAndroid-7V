import { useEffect, useState } from "react";
import { selectTheme } from "@/store/theme/themeSlice";
import useAppSelector from "./useAppSelector";

export const useLogo = () => {
  const [logo, setLogo] = useState<string | undefined>();
  const theme = useAppSelector(selectTheme);

  useEffect(() => {
    if (theme === "dark") {
      import("@/assets/logo_light_lg.png").then((module) => {
        setLogo(module.default);
      });

      return;
    }

    import("@/assets/logo_dark_lg.png").then((module) => {
      setLogo(module.default);
    });
  }, [theme]);

  return logo;
};
