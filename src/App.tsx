import { Route, Routes } from "react-router";

import useThemeSynchronization from "@/common/hooks/useThemeSynchronization";
import { Booting } from "@/features/booting/pages/Booting";
import { Introduction } from "@/features/introduction/pages/Introduction";
import { LayoutMain } from "@/common/layouts/LayoutMain";
import { SystemOverview } from "./features/SystemOverview/pages/SystemOverview";

function App() {
  useThemeSynchronization();

  return (
    <Routes>
      <Route path="/" element={<Booting />} />
      <Route path="/intro" element={<Introduction />} />
      <Route element={<LayoutMain />}>
        <Route path="/system-overview" element={<SystemOverview />} />
      </Route>
    </Routes>
  );
}

export default App;
