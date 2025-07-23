import { RebootButton } from "@/common/components/ui/ResetButton";
import { ThemeSwitch } from "@/common/components/ui/ThemeSwitch";
import { useFocusTrap } from "@/common/hooks/useFocusTrap";
import { useLogo } from "@/common/hooks/useLogo";
import { mainNavigation } from "@/common/routes/navigation";
import { useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router";

export const LayoutMain: React.FC = () => {
  const containerSidebarRef = useRef<HTMLDivElement>(null);
  const sidebarControllerRef = useRef<HTMLButtonElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMd, setIsMd] = useState<boolean>(false);
  const logo = useLogo();
  const { pathname } = useLocation();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleClose = () => {
    if (isMd) return;

    setMenuOpen(false);
    sidebarControllerRef.current?.focus();
  };

  const handleEscape = (e: KeyboardEvent) => {
    e.preventDefault();

    handleClose();
  };

  useFocusTrap({
    containerRef: containerSidebarRef,
    active: menuOpen && !isMd,
    onEscape: handleEscape,
  });

  useEffect(() => {
    const docStyles = getComputedStyle(document.documentElement);
    const remSize = parseInt(docStyles.fontSize);
    const remMediumWindowSize = parseInt(
      docStyles.getPropertyValue("--breakpoint-md"),
    );

    const getWindowSize = () => {
      const { innerWidth: width } = window;
      return width / remSize;
    };

    const handleResize = () => {
      const isScreenMd = getWindowSize() >= remMediumWindowSize;

      // If the screen shrinks to mobile while focus is inside the sidebar,
      // move focus to the menu toggle button to avoid warnings.
      if (!isScreenMd && document.activeElement?.closest("#sidebar")) {
        sidebarControllerRef.current?.focus();
      }

      setIsMd(isScreenMd);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setMenuOpen(isMd);
  }, [isMd]);

  useEffect(() => {
    window.scroll({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div
      className="flex flex-col min-h-screen relative md:flex-row [--header-items-size:35px]
        [--header-padding-y:--spacing(3)] [--layout-padding-x:--spacing(5)]
        [--header-height:calc(var(--header-items-size)+(var(--header-padding-y)*2))]
        [--back-brightness:90%]"
    >
      <header
        className={`sticky top-0 flex justify-end py-(--header-padding-y) px-(--layout-padding-x)
          bg-background border-b-primary border-b z-200 shadow-xs h-(--header-height)
          ${menuOpen ? "brightness-(--back-brightness)" : "brightness-100"} md:hidden
          motion-safe:transition-all`}
      >
        <img
          src={logo}
          className="size-(--header-items-size)"
          alt="unit 7V military organization brand"
        />
      </header>

      <div ref={containerSidebarRef}>
        {/* The button is positioned as if it were part of both the header and sidebar */}
        <div
          className={`size-(--header-items-size) fixed z-300 left-(--layout-padding-x)
            top-(--header-padding-y) md:hidden`}
        >
          <button
            className={`relative group size-full cursor-pointer border-[1px] flex justify-center
              items-center
              ${menuOpen ? "bg-primary border-primary-subtle" : "bg-foreground border-primary-foreground-subtle"}
              hover:bg-primary hover:border-primary-subtle`}
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-controls="sidebar"
            ref={sidebarControllerRef}
          >
            <span className="sr-only">
              {menuOpen ? "Close menu" : "Open menu"}
            </span>

            <span
              className={`size-[80%] block border-[2px]
                ${menuOpen ? "bg-foreground border-primary-foreground-subtle" : "bg-primary border-primary-subtle"}
                group-hover:bg-foreground group-hover:border-primary-foreground-subtle
                motion-safe:transition-colors`}
            />
          </button>
        </div>

        <aside
          aria-hidden={isMd ? false : !menuOpen}
          inert={isMd ? false : !menuOpen}
          id="sidebar"
          className={`flex flex-col pt-10 pb-4 px-(--layout-padding-x) border-r border-primary
            h-screen bg-background fixed min-w-[min(80vw,250px)] max-w-fit top-0 left-0
            overflow-hidden shadow-2xl z-250
            ${menuOpen ? "translate-x-0" : "-translate-x-full"} md:sticky md:shadow-none
            md:translate-x-0 md:p-4 motion-safe:transition-transform`}
        >
          <div className={"flex flex-col p-4 mb-4 text-end md:text-start"}>
            <span className="text-lg">Unit: 7V</span>
            <span className="text-xs text-foreground-muted">
              Victor Figueiredo Mendes
            </span>
          </div>

          <nav className="flex border-l-double-15 border-l-double-color-primary pl-3">
            <ul className="flex w-full flex-col gap-2">
              {mainNavigation.map(({ label, name, path }) => (
                <li className="flex" key={path}>
                  <NavLink
                    onClick={handleClose}
                    className="w-full button button-action"
                    aria-label={label}
                    title={label}
                    to={path}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-row justify-between mt-auto gap-7">
            <div className="shrink-0 self-end">
              <RebootButton />
            </div>

            <div
              className="bg-primary/10 flex p-1 w-full border border-primary-subtle min-h-50 inset-ring-5
                inset-ring-primary/10"
            >
              <div className="flex flex-col py-2 items-center relative w-full">
                <div className="flex flex-row justify-between absolute top-0 inset-x-0">
                  <div className="size-1 rounded bg-foreground"></div>
                  <div className="size-1 rounded bg-foreground"></div>
                </div>

                <div className="flex flex-col grow justify-between gap-2">
                  {/* Plate */}
                  <div
                    className="relative flex p-1.5 w-full h-full bg-card/50 shadow-md overflow-hidden
                      [--corner-rotation:40deg] [--corner-size:2px]"
                  >
                    <div
                      className="absolute top-0 left-0 rotate-(--corner-rotation) h-(--corner-size) bg-card
                        w-full rounded-full origin-top-left z-5"
                    ></div>
                    <div
                      className="absolute bottom-0 left-0 rotate-[calc(var(--corner-rotation)*-1)]
                        h-(--corner-size) bg-card w-full rounded-full origin-bottom-left z-5"
                    ></div>
                    <div
                      className="absolute top-0 right-0 rotate-[calc(var(--corner-rotation)*-1)]
                        h-(--corner-size) bg-card w-full rounded-full origin-top-right z-5"
                    ></div>
                    <div
                      className="absolute bottom-0 right-0 rotate-(--corner-rotation) h-(--corner-size) bg-card
                        w-full rounded-full origin-bottom-right z-5"
                    ></div>

                    <div className="flex justify-center items-center w-full bg-card z-10">
                      <img src={logo} className="size-13 opacity-40" />
                    </div>
                  </div>
                  <ThemeSwitch />
                </div>

                <div className="flex flex-row justify-between absolute bottom-0 inset-x-0">
                  <div className="size-1 rounded bg-foreground"></div>
                  <div className="size-1 rounded bg-foreground"></div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Sidebar open content overlay */}
      <div
        onClick={handleClose}
        className={`fixed inset-0 bg-transparent z-225 ${menuOpen ? "block" : "hidden"} md:hidden`}
      ></div>

      <main
        className={`flex flex-col grow p-4 w-full ${
          menuOpen && !isMd
            ? "blur-content backdrop-brightness-(--back-brightness)"
            : ""
          } md:p-10 motion-safe:transition-all`}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutMain;
