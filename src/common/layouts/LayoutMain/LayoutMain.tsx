import { NavLink, Outlet } from "react-router";

export const LayoutMain: React.FC = () => {
  return (
    <div className="flex">
      <div className="p-5 border-r-1 border-primary min-h-screen sticky top-0">
        <div className="flex flex-col p-4 mb-4">
          <span className="text-lg">Unit: 7V</span>
          <span className="text-xs">Victor Figueiredo Mendes</span>
        </div>

        <nav className="flex flex-col gap-2 border-l-double-15 border-l-double-color-primary pl-3">
          <NavLink className="button button-action" to="">
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
      </div>

      <main className="p-10">
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutMain;
