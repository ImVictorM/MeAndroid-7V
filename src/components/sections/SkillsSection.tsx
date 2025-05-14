// src/components/sections/SkillsSection.tsx
import React from 'react';
import { SectionContainer } from '../common/SectionContainer';
import { BorderBox } from '../common/BorderBox';
import { skillsData, SkillCategory } from '../../data/skills';

export const SkillsSection: React.FC = () => {
  return (
    <SectionContainer title="Skills Matrix">
      {skillsData.map((category: SkillCategory, index: number) => (
        <BorderBox key={index} className="mb-4">
          <h3 className="text-base uppercase mb-2 text-nier-light-text-secondary dark:text-nier-dark-text-secondary">
            {category.category}
          </h3>
          <ul className="list-none pl-0 flex flex-wrap gap-2">
            {category.items.map((skill: string, skillIndex: number) => (
              <li
                key={skillIndex}
                className="bg-nier-light-hover-bg dark:bg-nier-dark-hover-bg px-2 py-1 text-sm border border-nier-light-border dark:border-nier-dark-border"
              >
                {skill}
              </li>
            ))}
          </ul>
        </BorderBox>
      ))}
    </SectionContainer>
  );
};

