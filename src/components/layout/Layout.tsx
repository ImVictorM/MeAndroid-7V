// src/components/layout/Layout.tsx
import React, { ReactNode, useState } from 'react';
import SidebarNav from './SidebarNav';
import MobileMenuTrigger from './MobileMenuTrigger';
import MobileMenuPanel from './MobileMenuPanel';

interface LayoutProps {
  children: ReactNode;
  currentSection: string;
  onNavigate: (sectionId: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentSection, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileNavigate = (sectionId: string) => {
    onNavigate(sectionId);
    setIsMobileMenuOpen(false); // Close menu after navigation
  };

  return (
    <div className="flex min-h-screen bg-nier-bg text-nier-light-text font-nier">
      {/* Sidebar for Desktop */}
      <div className="hidden md:block w-64 border-r border-nier-light-text/20 p-4">
        <SidebarNav currentSection={currentSection} onNavigate={onNavigate} />
      </div>

      {/* Mobile Menu Trigger - Fixed position */}
      <MobileMenuTrigger isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />

      {/* Mobile Menu Panel - Slides in */}
      <MobileMenuPanel
        isOpen={isMobileMenuOpen}
        onClose={toggleMobileMenu} // Trigger can also close it
        onNavigate={handleMobileNavigate}
        currentSection={currentSection}
      />

      {/* Main Content Area */}
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;

