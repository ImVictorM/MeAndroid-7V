import React, { useLayoutEffect, useRef, useState } from "react";
import { Accordion, AccordionRef } from "@/common/components/ui/Accordion";
import { workingExperienceData } from "../../data/workingExperience";
import { useLogo } from "@/common/hooks/useLogo";
import { WorkingExperience } from "../../components/cards/WorkingExperience";
import { projects } from "../../data/projects";
import { Project } from "../../components/cards/Project";
import { SectionContent } from "@/common/components/ui/SectionContent";

export const MissionLog: React.FC = () => {
  const logo = useLogo();
  const cardRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<AccordionRef>(null);
  const [minOpenHeight, setMinOpenHeight] = useState(0);
  const [logoTop, setLogoTop] = useState<number>(0);

  useLayoutEffect(() => {
    if (!cardRef.current || !accordionRef.current) return;

    const headerTotalHeight = accordionRef.current.getHeaderTotalHeight();
    const availableSpace = cardRef.current.offsetHeight - headerTotalHeight;

    setLogoTop(availableSpace / 2 + headerTotalHeight);
    setMinOpenHeight(availableSpace);
  }, []);

  return (
    <SectionContent title="Mission Log" subtitle="Projects & Working XP">
      <div ref={cardRef} className="flex flex-col grow-1 card relative">
        <Accordion
          ref={accordionRef}
          minOpenHeight={minOpenHeight}
          defaultOpenId={2}
          items={[
            {
              id: 1,
              title: "Projects",
              content: (
                <ul className="flex flex-col gap-4">
                  {projects.map((project) => (
                    <li key={project.id}>
                      <Project {...project} />
                    </li>
                  ))}
                </ul>
              ),
            },
            {
              id: 2,
              title: "Working Experience",
              content: (
                <ul className="flex flex-col gap-4">
                  {workingExperienceData.map((xp) => (
                    <li key={xp.id}>
                      <WorkingExperience {...xp} />
                    </li>
                  ))}
                </ul>
              ),
            },
          ]}
        />

        <img
          alt="unit 7V military organization brand"
          style={{ top: `${logoTop}px` }}
          src={logo}
          className="size-60 2xl:size-70 absolute left-1/2 -translate-x-1/2 -translate-y-1/2
            opacity-10 z-1"
        />
      </div>
    </SectionContent>
  );
};

export default MissionLog;
