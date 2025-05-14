// src/components/sections/SystemSettingsSection.tsx
import React from 'react';
import { SectionContainer } from '../common/SectionContainer';
import { BorderBox } from '../common/BorderBox';
import { profile } from '../../data/profile';
import { Button } from '../common/Button'; // Import Button

export const SystemSettingsSection: React.FC = () => {
  const resumeUrl = '/Victor_Figueiredo_Mendes_Resume.pdf'; // Path relative to public folder

  return (
    <SectionContainer title="System Settings">
      <BorderBox>
        <h3 className="text-base uppercase mb-3 text-nier-light-text-secondary dark:text-nier-dark-text-secondary">
          Unit Identification
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 text-sm mb-4">
          <p><span className="text-nier-light-text-secondary dark:text-nier-dark-text-secondary">ID:</span> {profile.unitId}</p>
          <p><span className="text-nier-light-text-secondary dark:text-nier-dark-text-secondary">Designation:</span> {profile.designation}</p>
          <p><span className="text-nier-light-text-secondary dark:text-nier-dark-text-secondary">Operational Since:</span> {profile.operationalSince}</p>
          <p><span className="text-nier-light-text-secondary dark:text-nier-dark-text-secondary">Primary Function:</span> {profile.primaryFunction}</p>
          <p><span className="text-nier-light-text-secondary dark:text-nier-dark-text-secondary">Current Status:</span> {profile.status}</p>
          <p><span className="text-nier-light-text-secondary dark:text-nier-dark-text-secondary">Location:</span> {profile.location}</p>
        </div>

        <h3 className="text-base uppercase mb-3 mt-6 text-nier-light-text-secondary dark:text-nier-dark-text-secondary">
          External Network Links & Data Files
        </h3>
        <div className="flex flex-col sm:flex-row gap-4 text-sm items-start">
          <a href={profile.linkedIn} target="_blank" rel="noopener noreferrer" className="hover:text-nier-light-text-secondary dark:hover:text-nier-dark-highlight-text underline">
            LinkedIn Profile
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-nier-light-text-secondary dark:hover:text-nier-dark-highlight-text underline">
            GitHub Repository Access
          </a>
          {/* Add Download Button */}
          <a href={resumeUrl} download="Victor_Figueiredo_Mendes_Resume.pdf" className="mt-4 sm:mt-0 sm:ml-auto">
            <Button variant="outline">
              Download Resume Data File (PDF)
            </Button>
          </a>
        </div>
      </BorderBox>
    </SectionContainer>
  );
};

