import { useWindowDimensions } from "@/common/hooks/useWindowDimensions";
import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router";

export const LayoutMain: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { width } = useWindowDimensions();
  const docStyles = getComputedStyle(document.documentElement);
  const remSize = parseInt(docStyles.fontSize);
  const remSmallWindowSize = parseInt(
    docStyles.getPropertyValue("--breakpoint-sm"),
  );

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const remWindowSize = width / remSize;

    // Close menu when resizing small windows
    if (remWindowSize <= remSmallWindowSize) {
      setMenuOpen(false);
    }
  }, [remSize, remSmallWindowSize, width]);

  return (
    <div
      className="flex relative [--menu-size:30px] [--header-padding:--spacing(5)]
        [--header-height:calc(var(--menu-size)+(var(--header-padding)*2))]"
    >
      <div
        className="fixed top-0 inset-x-0 p-(--header-padding) bg-background border-b-primary
          border-b-[1px] z-[200] shadow-xs h-(--header-height) sm:hidden"
      ></div>

      <div
        className="bg-red-600 size-(--menu-size) fixed z-[300] left-(--header-padding)
          top-(--header-padding) sm:hidden"
      >
        <button className="size-full cursor-pointer" onClick={toggleMenu}>
          X
        </button>
      </div>

      <aside
        className={`py-10 px-5 sm:p-5 border-r-1 border-primary min-h-screen bg-background absolute
          min-w-[min(80vw,250px)] top-0 left-0 transition-transform overflow-hidden
          z-[250] ${menuOpen ? "translate-x-0" : "-translate-x-full"} sm:sticky
          sm:translate-x-0 `}
      >
        <div className="flex flex-col p-4 mb-4 text-end sm:text-start">
          <span className="text-lg">Unit: 7V</span>
          <span className="text-xs">Victor Figueiredo Mendes</span>
        </div>

        <nav className="flex flex-col gap-2 border-l-double-15 border-l-double-color-primary pl-3">
          <NavLink className="button button-action" to="/overview">
            System Overview
          </NavLink>
          <NavLink className="button button-action" to="">
            Mission Log
          </NavLink>
          <NavLink className="button button-action" to="">
            Skills
          </NavLink>
          <NavLink className="button button-action" to="">
            Settings
          </NavLink>
        </nav>
      </aside>

      <main className="mt-(--header-height) p-5 sm:p-10 sm:mt-0">
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutMain;
