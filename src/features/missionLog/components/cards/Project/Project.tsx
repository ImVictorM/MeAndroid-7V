import { NavLink } from "react-router";

type ProjectProps = {
  title: string;
  category: string;
  description: string;
  repositoryUrl: string;
  deploymentUrl?: string;
  techs: string[];
};

export const Project: React.FC<ProjectProps> = ({
  category,
  description,
  repositoryUrl,
  techs,
  title,
  deploymentUrl,
}) => {
  return (
    <article className="flex flex-col gap-2 border p-3">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <h3
            className="w-fit text-lg font-bold relative cursor-pointer before:transition-transform
              before:origin-left before:content-[''] before:absolute before:inset-x-0
              before:h-full before:border-b before:scale-x-0 before:pointer-events-none
              hover:before:scale-x-100"
          >
            <NavLink
              rel="noopener noreferrer"
              target="_blank"
              to={repositoryUrl}
            >
              {title}
            </NavLink>
          </h3>
          <span className="text-foreground-muted text-sm">{category}</span>
        </div>

        <div className="flex flex-row gap-4 self-baseline">
          <NavLink
            rel="noopener noreferrer"
            target="_blank"
            className="link"
            to={repositoryUrl}
          >
            Source
          </NavLink>
          {deploymentUrl && (
            <NavLink target="_blank" className="link" to={deploymentUrl}>
              Live
            </NavLink>
          )}
        </div>
      </div>

      <p>{description}</p>

      <ul className="flex flex-row gap-2 flex-wrap">
        {techs.map((tech) => (
          <li key={tech} className="badge">
            {tech}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Project;
