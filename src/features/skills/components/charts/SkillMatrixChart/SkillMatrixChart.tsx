import { RefObject } from "react";

type SkillEntry = {
  name: string;
  proficiencyLevel: number;
};

type SkillByCategory = {
  category: string;
  color: string;
  skills: SkillEntry[];
};

type SkillMatrixChartProps = {
  skillCategories: SkillByCategory[];
  ref?: RefObject<HTMLDivElement>;
};

export const SkillMatrixChart: React.FC<SkillMatrixChartProps> = ({
  skillCategories,
  ref,
}) => {
  return (
    <div className="flex flex-col max-w-[20rem] w-full border-2 p-1">
      <div className="flex flex-col grow justify-between border">
        {skillCategories.map(({ category, color, skills }) => {
          const categoryProficiencyTotal = skills.reduce(
            (acc, { proficiencyLevel }) => acc + proficiencyLevel,
            0,
          );

          return (
            <div
              ref={ref}
              className="flex flex-col grow border-b last:border-b-0"
              key={category}
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
  );
};

export default SkillMatrixChart;
