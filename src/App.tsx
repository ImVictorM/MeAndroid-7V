import { useEffect, useLayoutEffect, useRef } from "react";
import { Route, Routes } from "react-router";

import { LayoutMain } from "@/common/layouts/LayoutMain";
import useAppDispatch from "@/common/hooks/useAppDispatch";
import useAppSelector from "@/common/hooks/useAppSelector";
import { getThemeSavedOrPreferred } from "@/common/store/theme/themeUtils";
import { selectTheme, setTheme } from "@/common/store/theme/themeSlice";
import {
  incrementVisitCount,
  setLastVisit,
} from "@/common/store/userActivity/userActivitySlice";

import { Booting } from "@/features/booting/pages/Booting";
import { Introduction } from "@/features/introduction/pages/Introduction";
import { SystemOverview } from "@/features/systemOverview/pages/SystemOverview";
import { MissionLog } from "@/features/missionLog/pages/MissionLog";
import { Training } from "@/features/training/pages/Training";
import { Skills } from "@/features/skills/pages/Skills";

function App() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);
  const didRunOnce = useRef<boolean>(false);

  useLayoutEffect(() => {
    const initialTheme = getThemeSavedOrPreferred();

    dispatch(setTheme(initialTheme));
  }, [dispatch]);

  useLayoutEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    if (didRunOnce.current) return;
    didRunOnce.current = true;

    const now = new Date();
    dispatch(incrementVisitCount());
    dispatch(setLastVisit(now.toISOString()));
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Booting />} />
      <Route path="/intro" element={<Introduction />} />
      <Route element={<LayoutMain />}>
        <Route path="/system-overview" element={<SystemOverview />} />
        <Route path="/mission-log" element={<MissionLog />} />
        <Route path="/training" element={<Training />} />
        <Route path="/skills" element={<Skills />} />
      </Route>
    </Routes>
  );
}

export default App;
