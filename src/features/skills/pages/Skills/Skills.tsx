import { SectionContent } from "@/common/components/ui/SectionContent";
import { SkillCategory, skillData, SkillRecord } from "../../data/skills";
import { SkillMatrix } from "../../components/cards/SkillMatrix";

type CategoryTitleColor = { title: string; color: string };

type SkillByCategory = Record<
  SkillCategory,
  CategoryTitleColor & {
    proficiencyTotal: number;
    skills: SkillRecord[];
  }
>;

const categoryTitleColorMap: Record<SkillCategory, CategoryTitleColor> = {
  backEnd: { color: "#c9a68a", title: "BackEnd Development" },
  database: { color: "#8d8568", title: "Databases" },
  frontEnd: { color: "#fff4b8", title: "FrontEnd Development" },
  programmingLanguage: { color: "#fcf7d7", title: "Programming Languages" },
  other: { color: "#93bf85", title: "Software Architecture & Design" },
  tool: { color: "#c6b98f", title: "Tools & Platforms" },
};

const skillByCategory: SkillByCategory = Object.entries(skillData).reduce(
  (acc, [category, skills]) => {
    const currCategory = category as SkillCategory;

    acc[currCategory] = {
      ...categoryTitleColorMap[currCategory],
      skills,
      proficiencyTotal: skills.reduce(
        (acc, skill) => skill.proficiencyLevel + acc,
        0,
      ),
    };

    return acc;
  },
  {} as SkillByCategory,
);

export const Skills: React.FC = () => {
  return (
    <SectionContent title="Skills" subtitle="Tech Knowledge & Proficiency">
      <div className="relative flex flex-col border border-primary-subtle card grow">
        <div className="absolute inset-0 grid grid-cols-[minmax(0,20rem)_1fr] p-5">
          <div className="flex flex-col overflow-y-auto scrollbar-hidden gap-4 h-full min-h-0">
            {Object.entries(skillByCategory).map(
              ([category, { skills, title }]) => (
                <SkillMatrix
                  key={category}
                  categoryTitle={title}
                  skills={skills}
                  levels={4}
                />
              ),
            )}
          </div>

          <aside className="flex justify-center ml-5 pl-5 border-l border-primary-subtle">
            <div className="flex flex-col max-w-[20rem] w-full border-2 p-1">
              <div className="flex flex-col grow justify-between border">
                {Object.entries(skillByCategory).map(
                  ([title, { color, skills, proficiencyTotal }]) => {
                    return (
                      <div
                        className="flex flex-col grow border-b last:border-b-0"
                        title={title}
                        key={title}
                      >
                        {skills.map(({ proficiencyLevel, name }, index) => (
                          <span
                            style={{
                              backgroundColor: color,
                              height: `${(proficiencyLevel * 100) / proficiencyTotal}%`,
                            }}
                            key={index}
                            className="border-b last:border-b-0"
                            title={name}
                          ></span>
                        ))}
                      </div>
                    );
                  },
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </SectionContent>
  );
};

export default Skills;
