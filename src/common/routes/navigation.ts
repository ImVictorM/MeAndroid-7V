export type NavigationItem = {
  path: string;
  name: string;
  label: string;
};

export const mainNavigation: NavigationItem[] = [
  {
    path: "/system-overview",
    name: "System Overview",
    label: "About",
  },
  {
    path: "/mission-log",
    name: "Mission Log",
    label: "Projects & Working Experience",
  },
  {
    path: "/training",
    name: "Training",
    label: "Education",
  },
  {
    path: "/skills",
    name: "Skills",
    label: "Tech Knowledge & Proficiency",
  },
];
