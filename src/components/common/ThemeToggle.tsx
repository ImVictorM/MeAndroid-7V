import React from "react";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="bg-nier-light-hover-bg dark:bg-nier-dark-hover-bg border-nier-light-border dark:border-nier-dark-border text-nier-light-text dark:text-nier-dark-text fixed right-4 bottom-4 rounded border p-2"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
};
