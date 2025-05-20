import { useEffect, useState } from "react";
import { selectTheme } from "@/common/store/theme/themeSlice";
import useAppSelector from "./useAppSelector";

export const useLogo = () => {
  const [logo, setLogo] = useState<string | undefined>();
  const theme = useAppSelector(selectTheme);

  useEffect(() => {
    if (theme === "dark") {
      import("@/common/assets/images/logo_light_lg.png").then((module) => {
        setLogo(module.default);
      });

      return;
    }

    import("@/common/assets/images/logo_dark_lg.png").then((module) => {
      setLogo(module.default);
    });
  }, [theme]);

  return logo;
};
