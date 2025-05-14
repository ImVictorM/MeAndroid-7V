// src/components/layout/SidebarNav.tsx
import React from 'react';
import { profile } from '../../data/profile';
import { ThemeToggle } from '../common/ThemeToggle'; // Import ThemeToggle

interface SidebarNavProps {
  currentSection: string;
  onNavigate: (sectionId: string) => void;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ currentSection, onNavigate }) => {
  const sections = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'mission-log', label: 'Mission Log' }, // Experience
    { id: 'skills', label: 'Skills' },
    { id: 'system-settings', label: 'System Settings' },
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-nier-light-text/20">
        <h1 className="text-lg font-semibold">Unit {profile.unitId}</h1>
        <p className="text-xs text-nier-light-text-secondary dark:text-nier-dark-text-secondary">{profile.designation}</p>
      </div>
      <nav className="flex-1 mt-4">
        <ul>
          {sections.map((section) => (
            <li key={section.id} className="mb-2">
              <button
                onClick={() => onNavigate(section.id)}
                className={`w-full text-left px-4 py-2 rounded transition-colors text-sm ${currentSection === section.id ? 'bg-nier-light-text/10 text-nier-accent font-semibold' : 'hover:bg-nier-light-text/5'}`}
                title={section.label} // Tooltip for clarity
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      {/* Add Theme Toggle at the bottom of the sidebar */}
      <div className="mt-auto p-4 border-t border-nier-light-text/20 flex justify-center">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default SidebarNav;

