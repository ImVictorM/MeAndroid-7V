import { Route, Routes } from "react-router";

import Booting from "@/features/booting/pages/Booting";
import useThemeSynchronization from "@/common/hooks/useThemeSynchronization";

function App() {
  useThemeSynchronization();

  return (
    <Routes>
      <Route path="/" element={<Booting />} />

      <Route path="navigation" element={<></>} />
      <Route />
    </Routes>
  );
}

export default App;
