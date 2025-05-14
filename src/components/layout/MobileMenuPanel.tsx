// src/components/layout/MobileMenuPanel.tsx
import React from 'react';

import { profile } from '../../data/profile';

interface MobileMenuPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
  currentSection: string;
}

const MobileMenuPanel: React.FC<MobileMenuPanelProps> = ({ isOpen, onClose, onNavigate, currentSection }) => {
  const sections = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'mission-log', label: 'Mission Log' }, // Experience
    { id: 'skills', label: 'Skills' },
    { id: 'system-settings', label: 'System Settings' },
  ];

  const handleNavigation = (sectionId: string) => {
    onNavigate(sectionId);
    onClose(); // Close menu after navigation
  };

  return (
    <div
      className={`fixed inset-0 z-40 bg-nier-bg-dark/95 backdrop-blur-sm text-nier-light-text font-nier p-8 transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl">Unit {profile.unitId} - Navigation</h2>
        {/* Close button is handled by the trigger now, but keeping a placeholder concept */}
        {/* <button onClick={onClose} className="p-2 text-nier-light-text">
          <X size={24} />
        </button> */}
      </div>
      <nav>
        <ul>
          {sections.map((section) => (
            <li key={section.id} className="mb-4">
              <button
                onClick={() => handleNavigation(section.id)}
                className={`w-full text-left p-2 rounded transition-colors ${currentSection === section.id ? 'bg-nier-light-text/10 text-nier-accent' : 'hover:bg-nier-light-text/5'}`}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenuPanel;

