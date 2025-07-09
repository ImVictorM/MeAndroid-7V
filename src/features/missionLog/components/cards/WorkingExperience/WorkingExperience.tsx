import { toShortDate } from "@/common/utils/date";

type WorkingExperienceProps = {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  activities: string[];
  status: "completed" | "in-progress" | "ongoing";
  techs?: string[];
};

export const WorkingExperience: React.FC<WorkingExperienceProps> = ({
  company,
  position,
  startDate,
  endDate,
  activities,
  status,
  techs,
}) => {
  return (
    <article className="flex flex-col gap-2 border p-3">
      <div className="flex flex-row justify-between gap-4">
        <h3 className="text-lg font-bold">{position}</h3>

        <div className="text-sm text-foreground-muted self-baseline">
          <time dateTime={startDate}>{toShortDate(new Date(startDate))}</time> -{" "}
          {endDate ? (
            <time>{toShortDate(new Date(endDate))}</time>
          ) : (
            <time dateTime={new Date().toISOString().split("T")[0]}>
              Present
            </time>
          )}
        </div>
      </div>

      <div className="flex flex-col">
        <h4 className="font-medium mb-2">{company}</h4>
        <ul className="list-[square] sm:list-inside px-4">
          {activities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-row flex-wrap justify-between gap-4">
        {techs && (
          <ul className="flex flex-row flex-wrap gap-2">
            {techs.map((tech, index) => {
              return (
                <li className="badge" key={index}>
                  {tech}
                </li>
              );
            })}
          </ul>
        )}

        <dl className="flex flex-row gap-2 text-sm self-end ml-auto text-foreground-muted uppercase">
          <dt>Status:</dt>
          <dd>{status.charAt(0).toUpperCase() + status.slice(1)}</dd>
        </dl>
      </div>
    </article>
  );
};

export default WorkingExperience;
