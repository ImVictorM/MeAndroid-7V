import { SectionContent } from "@/common/components/ui/SectionContent";
import { SkillCategory, skillData, SkillRecord } from "../../data/skills";
import { SkillMatrix } from "../../components/cards/SkillMatrix";
import { SkillMatrixChart } from "../../components/charts/SkillMatrixChart";

type CategoryMetadata = { title: string; color: string };

type SkillByCategory = CategoryMetadata & {
  category: SkillCategory;
  skills: SkillRecord[];
};

const categoryTitleColorMap: Record<SkillCategory, CategoryMetadata> = {
  backEnd: { color: "#c9a68a", title: "BackEnd Development" },
  database: { color: "#8d8568", title: "Databases" },
  frontEnd: { color: "#fff4b8", title: "FrontEnd Development" },
  programmingLanguage: { color: "#fcf7d7", title: "Programming Languages" },
  other: { color: "#93bf85", title: "Software Architecture & Design" },
  tool: { color: "#c6b98f", title: "Tools & Platforms" },
};

const skillCategories: SkillByCategory[] = Object.entries(skillData).reduce(
  (acc, [category, skills]): SkillByCategory[] => {
    const currCategory = category as SkillCategory;

    return [
      ...acc,
      {
        ...categoryTitleColorMap[currCategory],
        category: currCategory,
        skills,
      },
    ];
  },
  [] as SkillByCategory[],
);

export const Skills: React.FC = () => {
  return (
    <SectionContent title="Skills" subtitle="Tech Knowledge & Proficiency">
      <div className="relative flex flex-col border border-primary-subtle card grow">
        <div className="absolute inset-0 grid grid-cols-[max(20rem)_minmax(20rem,1fr)] p-5">
          <div className="flex flex-col overflow-y-auto scrollbar-hidden gap-4 h-full min-h-0">
            {skillCategories.map(({ category, skills, title }) => (
              <SkillMatrix
                key={category}
                categoryTitle={title}
                skills={skills}
                levels={4}
              />
            ))}
          </div>

          <aside className="flex justify-center ml-5 pl-5 border-l border-primary-subtle">
            <SkillMatrixChart skillCategories={skillCategories} />
          </aside>
        </div>
      </div>
    </SectionContent>
  );
};

export default Skills;
