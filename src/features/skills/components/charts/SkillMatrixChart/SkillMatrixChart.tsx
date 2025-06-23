import { useMemo } from "react";

type SkillEntry = {
  name: string;
  proficiencyLevel: number;
};

type SkillByCategory = {
  category: string;
  color: string;
  title: string;
  skills: SkillEntry[];
};

type SkillMatrixChartProps = {
  skillCategories: SkillByCategory[];
};

export const SkillMatrixChart: React.FC<SkillMatrixChartProps> = ({
  skillCategories,
}) => {
  const proficiencyTotal: number = useMemo(() => {
    return skillCategories.reduce(
      (acc, curr) =>
        acc +
        curr.skills.reduce(
          (acc, { proficiencyLevel }) => acc + proficiencyLevel,
          0,
        ),

      0,
    );
  }, [skillCategories]);

  return (
    <div className="flex flex-row gap-2 w-full">
      <div className="flex flex-col w-full min-w-[16rem] max-w-[25rem] border-2 p-1">
        <div className="flex flex-col grow justify-between border">
          {skillCategories.map(({ category, color, skills }) => {
            const categoryProficiencyTotal = skills.reduce(
              (acc, { proficiencyLevel }) => acc + proficiencyLevel,
              0,
            );

            return (
              <div
                className="flex flex-col grow border-b last:border-b-0"
                key={category}
                style={{
                  height: `${(categoryProficiencyTotal * 100) / proficiencyTotal}%`,
                }}
              >
                {skills.map(({ proficiencyLevel, name }, index) => {
                  return (
                    <span
                      style={{
                        backgroundColor: color,
                        height: `${(proficiencyLevel * 100) / categoryProficiencyTotal}%`,
                      }}
                      key={index}
                      className="border-b grow last:border-b-0"
                      title={name}
                    ></span>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      <div className="self-end text-sm">
        <dl className="flex flex-col gap-1">
          {skillCategories.map(({ title, color }) => (
            <div key={title} className="flex flex-row gap-2">
              <div className="flex items-center h-[1lh]">
                <dt
                  className="size-4 shrink-0 border border-primary-subtle"
                  style={{ backgroundColor: color }}
                ></dt>
              </div>

              <dd>{title}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default SkillMatrixChart;
