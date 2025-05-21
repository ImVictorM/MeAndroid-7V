import { Route, Routes } from "react-router";

import Booting from "@/features/booting/pages/Booting";
import useThemeSynchronization from "@/common/hooks/useThemeSynchronization";
import Introduction from "./features/introduction/pages/Introduction";

function App() {
  useThemeSynchronization();

  return (
    <Routes>
      <Route path="/" element={<Booting />} />
      <Route path="intro" element={<Introduction />} />
    </Routes>
  );
}

export default App;
