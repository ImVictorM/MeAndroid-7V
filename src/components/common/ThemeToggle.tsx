import React from 'react';
import { useTheme } from "@/contexts/ThemeContext";

// Simple toggle button for demonstration
// Styling needs refinement based on final design
export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 p-2 border rounded bg-nier-light-hover-bg dark:bg-nier-dark-hover-bg border-nier-light-border dark:border-nier-dark-border text-nier-light-text dark:text-nier-dark-text"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
};

