import { Ref, useMemo } from "react";

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
  showTitle?: boolean;
  ref?: Ref<HTMLDivElement>;
};

export const SkillMatrixChart: React.FC<SkillMatrixChartProps> = ({
  skillCategories,
  showTitle = true,
  ref,
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
    <section ref={ref} className="flex flex-col grow w-full gap-4 relative">
      <h3 className={`text-lg ${showTitle ? "" : "hidden"}`}>
        Skill Matrix - Proficiency
      </h3>

      <div className="flex flex-col sm:flex-row h-full grow gap-4 justify-center items-center">
        {/* Chart */}
        <div
          role="img"
          aria-label="representation of technology proficiency by skill category"
          className="flex flex-col grow self-center border-2 border-foreground p-1 max-w-[20rem]
            min-w-[16rem] w-full sm:self-stretch"
        >
          <div className="flex flex-col grow justify-between border border-stone-600">
            {skillCategories.map(({ category, color, skills }) => {
              const categoryProficiencyTotal = skills.reduce(
                (acc, { proficiencyLevel }) => acc + proficiencyLevel,
                0,
              );

              return (
                <div
                  className="flex flex-col grow border-b border-stone-600 last:border-b-0"
                  key={category}
                  style={{
                    height: `${(categoryProficiencyTotal * 100) / proficiencyTotal}%`,
                  }}
                >
                  {skills.map(({ proficiencyLevel, name }) => {
                    const skillWeight =
                      (proficiencyLevel * 100) / categoryProficiencyTotal;

                    return (
                      <div
                        style={{
                          backgroundColor: color,
                          height: `${skillWeight}%`,
                        }}
                        key={name}
                        className="w-full border-b border-stone-600 grow last:border-b-0"
                        title={name}
                      ></div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>

        {/* Legends */}
        <div
          className="text-sm text-foreground-muted self-start sm:self-end"
          aria-hidden="true"
        >
          <ul className="flex flex-col gap-1">
            {skillCategories.map(({ title, color }) => (
              <li key={title} className="flex flex-row gap-2">
                <div className="flex items-center h-[1lh]">
                  <span
                    className="size-4 shrink-0 border border-primary-subtle"
                    style={{ backgroundColor: color }}
                  ></span>
                </div>

                {title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillMatrixChart;
