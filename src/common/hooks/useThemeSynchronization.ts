import { useEffect } from "react";

import useAppSelector from "./useAppSelector";
import { selectTheme } from "@/common/store/theme/themeSlice";

const useThemeSynchronization = () => {
  const theme = useAppSelector(selectTheme);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);
};

export default useThemeSynchronization;
