import { SectionContent } from "@/common/components/ui/SectionContent";
import { SkillCategory, skillData, SkillRecord } from "../../data/skills";
import { SkillMatrix } from "../../components/cards/SkillMatrix";
import { SkillMatrixChart } from "../../components/charts/SkillMatrixChart";
import eyeIcon from "@/common/assets/icons/eye.png";
import { useState } from "react";

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
  const [showSkillMatrixChartModal, setShowSkillMatrixChartModal] =
    useState<boolean>(false);

  const toggleShowSkillMatrixChartModal = () => {
    setShowSkillMatrixChartModal((prev) => !prev);
  };

  return (
    <SectionContent title="Skills" subtitle="Tech Knowledge & Proficiency">
      <div className="relative flex flex-col border border-primary-subtle card grow">
        <div
          className="inset-0 p-5 grid grid-cols-1 xl:absolute
            xl:grid-cols-[minmax(0,20rem)_minmax(20rem,1fr)]"
        >
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

          <aside className="hidden ml-10 pl-10 border-l border-primary-subtle grow xl:flex">
            <SkillMatrixChart skillCategories={skillCategories} />
          </aside>

          {showSkillMatrixChartModal && (
            <div
              className="flex items-center justify-center fixed z-500 bg-black/70 inset-0"
              onClick={() => setShowSkillMatrixChartModal(false)}
            >
              <div
                className="flex w-[95%] max-w-fit bg-card shadow-2xl border border-primary-subtle p-4
                  h-[70vh] justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <SkillMatrixChart skillCategories={skillCategories} />
              </div>
            </div>
          )}

          <div
            className="flex items-center sticky bottom-2 opacity-20 border ml-auto p-1 transition-all
              mt-4 sm:-mt-10 r self-end w-fit border-primary-subtle shadow-md cursor-pointer
              hover:opacity-100"
          >
            <button
              type="button"
              onClick={toggleShowSkillMatrixChartModal}
              className="size-full cursor-pointer"
            >
              <img alt="eye" src={eyeIcon} />
            </button>
          </div>
        </div>
      </div>
    </SectionContent>
  );
};

export default Skills;
