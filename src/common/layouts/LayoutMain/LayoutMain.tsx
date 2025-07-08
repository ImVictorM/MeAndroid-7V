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

  const handleSidebarOverlayClick = () => {
    setMenuOpen(false);
  };

  const handleSidebarNavigationClick = () => {
    if (isMd) return;

    setMenuOpen(false);
  };

  const handleEscape = (e: KeyboardEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    sidebarControllerRef.current?.focus();
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
      setIsMd(getWindowSize() >= remMediumWindowSize);
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
          alt="unit 7V logo"
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
          className={`py-10 px-(--layout-padding-x) border-r border-primary h-screen bg-background
            fixed min-w-[min(80vw,250px)] max-w-fit top-0 left-0 overflow-hidden shadow-2xl
            z-250 ${menuOpen ? "translate-x-0" : "-translate-x-full"} md:sticky
            md:shadow-none md:translate-x-0 md:p-5 motion-safe:transition-transform`}
        >
          <div className={"flex flex-col p-4 mb-4 text-end md:text-start"}>
            <span className="text-lg">Unit: 7V</span>
            <span className="text-xs text-foreground-muted">
              Victor Figueiredo Mendes
            </span>
          </div>

          <nav className="flex border-l-double-15 border-l-double-color-primary pl-3">
            <ul className="flex flex-col gap-2">
              {mainNavigation.map(({ label, name, path }) => (
                <li className="flex" key={path}>
                  <NavLink
                    onClick={handleSidebarNavigationClick}
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
        </aside>
      </div>

      {/* Sidebar open content overlay */}
      <div
        onClick={handleSidebarOverlayClick}
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
