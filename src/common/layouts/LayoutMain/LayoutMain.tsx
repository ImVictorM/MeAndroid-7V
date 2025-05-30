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
      className="flex relative min-h-screen [--header-items-size:35px]
        [--header-padding-y:--spacing(3)] [--layout-padding-x:--spacing(5)]
        [--header-height:calc(var(--header-items-size)+(var(--header-padding-y)*2))]
        [--back-brightness:90%]"
    >
      <header
        className={`fixed flex justify-end top-0 inset-x-0 py-(--header-padding-y)
          px-(--layout-padding-x) bg-background border-b-primary border-b-[1px] z-200
          shadow-xs h-(--header-height)
          ${menuOpen ? "brightness-(--back-brightness)" : "brightness-100"} sm:hidden
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
        className="size-(--header-items-size) fixed z-300 left-(--layout-padding-x)
          top-(--header-padding-y) sm:hidden"
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

      <aside
        className={`py-10 px-(--layout-padding-x) border-r-1 border-primary h-screen bg-background
          fixed min-w-[min(80vw,250px)] top-0 left-0 transition-transform overflow-hidden
          shadow-2xl z-250 ${menuOpen ? "translate-x-0" : "-translate-x-full"} sm:sticky
          sm:shadow-none sm:translate-x-0 sm:p-5`}
      >
        <div className="flex flex-col p-4 mb-4 text-end sm:text-start">
          <span className="text-lg">Unit: 7V</span>
          <span className="text-xs text-foreground-muted">
            Victor Figueiredo Mendes
          </span>
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

      <main
        className={`mt-(--header-height) p-5 transition-all w-full
          ${menuOpen ? "blur-content backdrop-brightness-(--back-brightness)" : "backdrop-brightness-100"}
          sm:p-10 sm:mt-0 sm:blur-none sm:backdrop-brightness-100`}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutMain;
