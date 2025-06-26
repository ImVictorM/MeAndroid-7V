import { useMemo } from "react";

type SkillMatrixSkill = {
  name: string;
  proficiencyLevel: number;
};

type SkillMatrixProps = {
  categoryTitle: string;
  levels: number;
  skills: SkillMatrixSkill[];
};

export const SkillMatrix: React.FC<SkillMatrixProps> = ({
  categoryTitle,
  levels,
  skills,
}) => {
  const levelsIterable = useMemo(() => {
    return Array.from({ length: levels }, (_, index) => index + 1);
  }, [levels]);

  return (
    <div className="flex flex-col gap-1 w-full">
      <h2 className="text-lg font-bold">{categoryTitle}</h2>
      <div>
        <ul className="flex flex-col pl-2 list-connected">
          {skills.map(({ name, proficiencyLevel }) => (
            <li
              className="flex flex-row items-center justify-between gap-2 w-full"
              key={name}
            >
              <span
                title={name}
                className="text-nowrap overflow-x-hidden text-ellipsis"
              >
                {name}
              </span>

              <div className="flex flex-row gap-1">
                {levelsIterable.map((level) => (
                  <span
                    key={level}
                    className={`inline-block size-4 border
                    ${proficiencyLevel >= level ? "bg-foreground" : "bg-transparent"}`}
                  ></span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillMatrix;
