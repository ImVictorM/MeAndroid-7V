import { useState } from "react";
import { ThemeProvider } from "@/contexts/ThemeContext";

import LoadingScreen from "@/components/sections/LoadingScreen"; // Changed to default import
import { SectionContainer } from "@/components/common/SectionContainer";
import { BorderBox } from "@/components/common/BorderBox";
// import SidebarNav from "@/components/layout/SidebarNav"; // SidebarNav is used within Layout
import Layout from "@/components/layout/Layout"; // Changed to default import
import { profile } from "@/data/profile";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { MissionLogSection } from "@/components/sections/MissionLogSection";
import { SystemSettingsSection } from "@/components/sections/SystemSettingsSection";

// Define navigation structure
const navItems = [
  { id: "dashboard", label: "Dashboard", tooltip: "System Overview" },
  { id: "mission-log", label: "Mission Log", tooltip: "Work Experience & Projects" },
  { id: "skills", label: "Skills Matrix", tooltip: "Technical Capabilities" },
  { id: "system-settings", label: "System Settings", tooltip: "Unit Information & Links" },
];

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState<string>(navItems[0].id);

  const handleLoadingFinished = () => {
    setIsLoading(false);
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  const renderSectionContent = () => {
    switch (activeSection) {
      case "dashboard":
        return (
          <SectionContainer title="System Dashboard">
            <BorderBox>
              <p className="mb-2">
                Unit: {profile.unitId}. Designation: {profile.designation}.
              </p>
              <p className="mb-2">Operational Since: {profile.operationalSince}.</p>
              <p>Primary Function: {profile.primaryFunction}.</p>
            </BorderBox>
          </SectionContainer>
        );
      case "mission-log":
        return <MissionLogSection />;
      case "skills":
        return <SkillsSection />;
      case "system-settings":
        return <SystemSettingsSection />;
      default:
        return null;
    }
  };

  return (
    <ThemeProvider>
      {isLoading && <LoadingScreen onFinished={handleLoadingFinished} />}
      {!isLoading && (
        <Layout currentSection={activeSection} onNavigate={handleNavigate}>
          {renderSectionContent()}
        </Layout>
      )}
    </ThemeProvider>
  );
}

export default App;

