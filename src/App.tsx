import { Route, Routes } from "react-router";

import useThemeSynchronization from "@/common/hooks/useThemeSynchronization";

import { LayoutMain } from "@/common/layouts/LayoutMain";
import { Booting } from "@/features/booting/pages/Booting";
import { Introduction } from "@/features/introduction/pages/Introduction";
import { SystemOverview } from "@/features/systemOverview/pages/SystemOverview";
import { MissionLog } from "@/features/missionLog/pages/MissionLog";
import { Training } from "@/features/training/pages/Training";
import { Skills } from "@/features/skills/pages/Skills";

function App() {
  useThemeSynchronization();

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
