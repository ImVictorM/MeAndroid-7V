import { SectionContent } from "@/common/components/ui/SectionContent";
import { SkillCategory, skillData } from "../../data/skills";
import { SkillMatrix } from "../../components/cards/SkillMatrix";

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
      <div className="relative flex flex-col border border-primary-subtle card grow">
        <div className="absolute inset-0 grid grid-cols-[max(20rem)_1fr] p-5">
          <div className="flex flex-col overflow-y-auto scrollbar-hidden gap-6 h-full min-h-0">
            {Object.entries(skillData).map(([category, skills]) => (
              <SkillMatrix
                key={category}
                categoryTitle={categoryTitleMap[category as SkillCategory]}
                skills={skills}
                levels={4}
              />
            ))}
          </div>
          <aside className="flex justify-center ml-5 pl-5 border-l border-primary-subtle">
            <div className="bg-red-300 max-w-[20rem] w-full border"></div>
          </aside>
        </div>
      </div>
    </SectionContent>
  );
};

export default Skills;
