// src/components/layout/MobileMenuTrigger.tsx
import React from 'react';

interface MobileMenuTriggerProps {
  isOpen: boolean;
  onClick: () => void;
}

const MobileMenuTrigger: React.FC<MobileMenuTriggerProps> = ({ isOpen, onClick }) => {
  // User suggestion: square icon transforming into a partially filled square
  // Implementing a simpler version for now, can refine visuals later

  return (
    <button
      onClick={onClick}
      className="fixed top-4 right-4 z-50 p-2 bg-nier-bg-dark/80 border border-nier-light-text/30 rounded text-nier-light-text md:hidden"
      aria-label="Toggle menu"
    >
      {isOpen ? (
        // Simple 'X' or similar close icon representation
        <div className="w-6 h-6 relative">
          <span className="absolute h-0.5 w-full bg-nier-light-text rotate-45 top-1/2 left-0 transform -translate-y-1/2"></span>
          <span className="absolute h-0.5 w-full bg-nier-light-text -rotate-45 top-1/2 left-0 transform -translate-y-1/2"></span>
        </div>
      ) : (
        // Simple hamburger icon representation
        <div className="w-6 h-6 flex flex-col justify-between">
          <span className="block h-0.5 w-full bg-nier-light-text"></span>
          <span className="block h-0.5 w-full bg-nier-light-text"></span>
          <span className="block h-0.5 w-full bg-nier-light-text"></span>
        </div>
        // Alternative: Square icon as suggested
        // <div className="w-6 h-6 border border-nier-light-text"></div>
      )}
    </button>
  );
};

export default MobileMenuTrigger;

