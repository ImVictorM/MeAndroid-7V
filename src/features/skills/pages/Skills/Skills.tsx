import { SectionContent } from "@/common/components/ui/SectionContent";
import { SkillCategory, skillData, SkillRecord } from "../../data/skills";
import { SkillMatrix } from "../../components/cards/SkillMatrix";
import { SkillMatrixChart } from "../../components/charts/SkillMatrixChart";
import { useState } from "react";
import { Modal } from "@/common/components/ui/Modal";

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

  return (
    <SectionContent title="Skills" subtitle="Tech Knowledge & Proficiency">
      <div className="relative flex flex-col card grow xl:max-h-[900px]">
        <div
          className="grid grid-cols-1 p-5 xl:absolute xl:inset-0
            xl:grid-cols-[minmax(0,var(--max-skill-width))_minmax(20rem,1fr)]
            [--max-skill-width:25rem]"
        >
          <div
            className="max-w-(--max-skill-width) flex flex-col overflow-y-auto scrollbar-hidden gap-4
              focus:outline-focus"
          >
            {skillCategories.map(({ category, skills, title }) => (
              <SkillMatrix
                key={category}
                categoryTitle={title}
                skills={skills}
                levels={4}
              />
            ))}
          </div>

          <aside
            className="hidden ml-(--vr-spacing) pl-(--vr-spacing) border-l border-primary-subtle grow
              xl:flex [--vr-spacing:--spacing(10)]"
          >
            <SkillMatrixChart skillCategories={skillCategories} />
          </aside>

          <Modal
            show={showSkillMatrixChartModal}
            onHide={() => setShowSkillMatrixChartModal(false)}
            title="Skill Matrix - Proficiency"
          >
            <div
              className="relative h-[80vh] max-h-[700px] overflow-y-auto focus:outline-focus
                focus:-outline-offset-4"
            >
              <div className="absolute h-[700px] inset-0 flex flex-col p-4">
                <SkillMatrixChart
                  showTitle={false}
                  skillCategories={skillCategories}
                />
              </div>
            </div>
          </Modal>

          <div
            className="flex items-center sticky bottom-2 ml-auto mt-4 sm:-mt-10 self-end w-fit
              shadow-lg xl:hidden"
          >
            <button
              type="button"
              onClick={() => setShowSkillMatrixChartModal(true)}
              className="transition-all bg-primary px-2 py-1 opacity-25 size-full cursor-pointer border
                rounded border-primary-subtle hover:opacity-100 focus-visible:opacity-100
                active:opacity-100"
              aria-label="show skill matrix chart modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.0"
                width="24.000000pt"
                height="24.000000pt"
                viewBox="0 0 24.000000 24.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"
                  fill="currentColor"
                  stroke="none"
                  className="fill-foreground"
                >
                  <path d="M55 172 c-16 -11 -36 -26 -44 -36 -12 -14 -11 -19 5 -37 58 -64 150 -64 208 0 19 21 19 21 0 42 -45 50 -116 63 -169 31z m99 -18 c31 -30 9 -84 -34 -84 -10 0 -26 7 -34 16 -31 30 -9 84 34 84 10 0 26 -7 34 -16z" />
                  <path d="M100 134 c-11 -12 -10 -18 3 -32 16 -15 18 -15 34 0 13 14 14 20 3 32 -16 20 -24 20 -40 0z" />
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </SectionContent>
  );
};

export default Skills;
