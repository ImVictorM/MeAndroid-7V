// src/components/sections/MissionLogSection.tsx
import React from 'react';
import { SectionContainer } from '../common/SectionContainer';
import { BorderBox } from '../common/BorderBox';
import { missionLogData, Mission } from '../../data/experience';
import { Button } from '../common/Button'; // Assuming Button component exists

export const MissionLogSection: React.FC = () => {
  return (
    <SectionContainer title="Mission Log">
      {missionLogData.map((mission: Mission) => (
        <BorderBox key={mission.id} className="mb-6">
          <div className="flex justify-between items-start mb-2 flex-wrap">
            <h3 className="text-base uppercase font-medium">{mission.title}</h3>
            <span className="text-sm text-nier-light-text-secondary dark:text-nier-dark-text-secondary">
              {mission.duration} | Status: {mission.status}
            </span>
          </div>
          <p className="text-sm mb-3 text-nier-light-text-secondary dark:text-nier-dark-text-secondary">
            {mission.organization}
          </p>
          <ul className="list-disc pl-5 mb-3 text-sm space-y-1">
            {mission.description.map((desc: string, index: number) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 items-center">
            {mission.tags && mission.tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="bg-nier-light-hover-bg dark:bg-nier-dark-hover-bg px-2 py-0.5 text-xs border border-nier-light-border dark:border-nier-dark-border"
              >
                {tag}
              </span>
            ))}
            {mission.githubLink && (
              <a
                href={mission.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto"
              >
                <Button variant="outline" size="sm"> {/* Assuming size prop exists or adjust styling */}
                  View on GitHub
                </Button>
              </a>
            )}
          </div>
        </BorderBox>
      ))}
    </SectionContainer>
  );
};

