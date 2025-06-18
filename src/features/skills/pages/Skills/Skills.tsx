import { SectionContent } from "@/common/components/ui/SectionContent";
import { SkillCategory, skillData } from "../../data/skills";

const categoryTitleMap: Record<SkillCategory, string> = {
  backEnd: "BackEnd Development",
  database: "Databases",
  frontEnd: "FrontEnd Development",
  programmingLanguage: "Programming Languages",
  other: "Software Architecture & Design",
  tool: "Tools & Platforms",
};

export const Skills: React.FC = () => {
  return (
    <SectionContent title="Skills" subtitle="Tech Knowledge & Proficiency">
      <div className="flex flex-col border border-primary-subtle grow-1 card p-5 gap-4">
        {Object.entries(skillData).map(([category, skills]) => {
          return (
            <div>
              <h2>{categoryTitleMap[category as SkillCategory]}</h2>
              <ul>
                {skills.map(({ name, proficiencyLevel }) => (
                  <li>
                    <span>{name}</span> <span>{proficiencyLevel}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </SectionContent>
  );
};

export default Skills;
