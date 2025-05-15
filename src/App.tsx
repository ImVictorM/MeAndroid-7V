import { useState } from "react";

import LoadingScreen from "@/components/sections/LoadingScreen"; // Changed to default import
import { SectionContainer } from "@/components/common/SectionContainer";
import { BorderBox } from "@/components/common/BorderBox";
import Layout from "@/components/layout/Layout"; // Changed to default import
import { profile } from "@/data/profile";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { MissionLogSection } from "@/components/sections/MissionLogSection";
import { SystemSettingsSection } from "@/components/sections/SystemSettingsSection";
import useThemeSynchronization from "./hooks/useThemeSynchronization";

const navItems = [
  { id: "dashboard", label: "Dashboard", tooltip: "System Overview" },
  {
    id: "mission-log",
    label: "Mission Log",
    tooltip: "Work Experience & Projects",
  },
  { id: "skills", label: "Skills Matrix", tooltip: "Technical Capabilities" },
  {
    id: "system-settings",
    label: "System Settings",
    tooltip: "Unit Information & Links",
  },
];

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState<string>(navItems[0].id);
  useThemeSynchronization();

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
              <p className="mb-2">
                Operational Since: {profile.operationalSince}.
              </p>
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
    <>
      {isLoading && <LoadingScreen onFinished={handleLoadingFinished} />}
      {!isLoading && (
        <Layout currentSection={activeSection} onNavigate={handleNavigate}>
          {renderSectionContent()}
        </Layout>
      )}
    </>
  );
}

export default App;
