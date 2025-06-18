import { useLogo } from "@/common/hooks/useLogo";
import { useWindowDimensions } from "@/common/hooks/useWindowDimensions";
import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router";

export const LayoutMain: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const logo = useLogo();
  const { width } = useWindowDimensions();
  const docStyles = getComputedStyle(document.documentElement);
  const remSize = parseInt(docStyles.fontSize);
  const remSmallWindowSize = parseInt(
    docStyles.getPropertyValue("--breakpoint-md"),
  );

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const remWindowSize = width / remSize;

    // Close menu when resizing small windows
    if (remWindowSize <= remSmallWindowSize) {
      closeMenu();
    }
  }, [remSize, remSmallWindowSize, width]);

  return (
    <div
      className="flex flex-col relative min-h-screen md:flex-row [--header-items-size:35px]
        [--header-padding-y:--spacing(3)] [--layout-padding-x:--spacing(5)]
        [--header-height:calc(var(--header-items-size)+(var(--header-padding-y)*2))]
        [--back-brightness:90%]"
    >
      <header
        className={`sticky top-0 flex justify-end py-(--header-padding-y) px-(--layout-padding-x)
          bg-background border-b-primary border-b z-200 shadow-xs h-(--header-height)
          ${menuOpen ? "brightness-(--back-brightness)" : "brightness-100"} md:hidden
          transition-all`}
      >
        <img
          src={logo}
          className="size-(--header-items-size)"
          alt="unit 7V logo"
        />
      </header>

      {/* The button is positioned as if it were part of both the header and sidebar */}
      <div
        className={`size-(--header-items-size) fixed z-300 left-(--layout-padding-x)
          top-(--header-padding-y) md:hidden`}
      >
        <button
          className={`group size-full cursor-pointer border-[1px] flex justify-center items-center
            ${menuOpen ? "bg-primary border-primary-subtle" : "bg-foreground border-primary-foreground-subtle"}
            hover:bg-primary hover:border-primary-subtle`}
          onClick={toggleMenu}
        >
          <span
            className={`size-[80%] block border-[2px] transition-colors
              ${menuOpen ? "bg-foreground border-primary-foreground-subtle" : "bg-primary border-primary-subtle"}
              group-hover:bg-foreground group-hover:border-primary-foreground-subtle`}
          />
        </button>
      </div>

      {/* Sidebar open content overlay */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 bg-transparent z-225 ${menuOpen ? "block" : "hidden"} md:hidden`}
      ></div>

      <aside
        className={`py-10 px-(--layout-padding-x) border-r border-primary h-screen bg-background
          fixed min-w-[min(80vw,250px)] max-w-fit top-0 left-0 transition-transform
          overflow-hidden shadow-2xl z-250
          ${menuOpen ? "translate-x-0" : "-translate-x-full"} md:sticky md:shadow-none
          md:translate-x-0 md:p-5`}
      >
        <div className={"flex flex-col p-4 mb-4 text-end md:text-start"}>
          <span className="text-lg">Unit: 7V</span>
          <span className="text-xs text-foreground-muted">
            Victor Figueiredo Mendes
          </span>
        </div>

        <nav className="flex flex-col gap-2 border-l-double-15 border-l-double-color-primary pl-3">
          <NavLink
            onClick={closeMenu}
            className="button button-action"
            to="/system-overview"
          >
            System Overview
          </NavLink>
          <NavLink
            onClick={closeMenu}
            className="button button-action"
            to="/mission-log"
          >
            Mission Log
          </NavLink>
          <NavLink
            onClick={closeMenu}
            className="button button-action"
            to="/training"
          >
            Training
          </NavLink>
          <NavLink
            onClick={closeMenu}
            className="button button-action"
            to="/skills"
          >
            Skills
          </NavLink>
          <NavLink
            onClick={closeMenu}
            className="button button-action"
            to="/settings"
          >
            Settings
          </NavLink>
        </nav>
      </aside>

      <main
        className={`p-3 transition-all w-full min-h-full
          ${menuOpen ? "blur-content backdrop-brightness-(--back-brightness)" : ""}
          md:p-10`}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutMain;
