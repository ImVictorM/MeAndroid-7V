import { NavLink } from "react-router";
import resume from "@/common/assets/files/resume.pdf";
import { SectionContent } from "@/common/components/ui/SectionContent";

export const SystemOverview: React.FC = () => {
  return (
    <SectionContent title="System Overview" subtitle="About">
      <div className="grid grid-cols-[_1fr] gap-5 2xl:grid-cols-[4fr_minmax(300px,_1fr)]">
        <section className="card order-1">
          <h2 className="card-heading">Unit Identification</h2>
          <div className="card-content flex flex-col gap-10">
            <div className="flex flex-col sm:flex-row flex-wrap gap-5">
              <div
                className="profile self-center sm:self-start"
                role="img"
                aria-label="unit 7V profile picture"
              />

              <dl className="flex flex-col gap-3 mr-auto">
                <div className="flex flex-col">
                  <dt className="text-foreground-muted text-xs">Codename</dt>
                  <dd className="leading-4">7V</dd>
                </div>

                <div className="flex flex-col">
                  <dt className="text-foreground-muted text-xs">Designation</dt>
                  <dd className="leading-4">Victor Figueiredo Mendes</dd>
                </div>

                <div className="flex flex-col">
                  <dt className="text-foreground-muted text-xs">
                    Operational Since
                  </dt>
                  <dd className="leading-4">2001</dd>
                </div>

                <div className="flex flex-col">
                  <dt className="text-foreground-muted text-xs">
                    Primary Function
                  </dt>
                  <dd className="leading-4">Software Development</dd>
                </div>

                <div className="flex flex-col">
                  <dt className="text-foreground-muted text-xs">Location</dt>
                  <dd className="leading-4">Limeira/SP - Brazil</dd>
                </div>

                <div className="flex flex-col">
                  <dt className="text-foreground-muted text-xs">
                    Current Status
                  </dt>
                  <dd className="leading-4">Active</dd>
                </div>
              </dl>
            </div>

            <NavLink
              to={resume}
              target="_blank"
              className="button button-action mt-auto ml-auto"
              rel="noopener noreferrer enclosure"
            >
              Download Resume Data File (PDF)
            </NavLink>
          </div>
        </section>

        <section className="card order-2 2xl:order-3 2xl:col-span-2">
          <h2 className="card-heading">File</h2>
          <p className="card-content">
            <strong>
              Unit 7V: <em>Software Development model</em>
            </strong>
            , operational since 2001. Optimized for collaborative environments
            and the creation of effective technological solutions. Core
            competencies include full-stack development utilizing technologies
            like{" "}
            <strong>
              JavaScript/TypeScript, React, Node.js, C#, ASP.NET Core, and{" "}
              <abbr className="no-underline" title="Entity Framework Core">
                EF Core
              </abbr>
            </strong>
            , alongside proficiency in database management using{" "}
            <strong>PostgreSQL and Microsoft SQL Server</strong>, and adherence
            to modern design paradigms like{" "}
            <strong>
              Clean Architecture, Domain-Driven Design, and{" "}
              <abbr
                className="no-underline"
                title="Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion"
              >
                SOLID
              </abbr>
            </strong>
            . Knowledge acquisition modules completed via{" "}
            <strong>
              Anhanguera Bachelor's in Systems Analysis & Development and Trybe
              Full Stack Development course
            </strong>
            . The unit demonstrates a high level of motivation for continuous
            capability enhancement and collaborative problem-solving,
            effectively converting strategic objectives into functional and
            innovative system outputs.
          </p>
        </section>

        <section className="card order-3 2xl:order-2">
          <h2 className="card-heading">External Network Links</h2>
          <nav className="card-content">
            <ul className="flex flex-col gap-2">
              <li>
                <NavLink
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  to="https://www.linkedin.com/in/victor-figueiredo-mendes/"
                >
                  LinkedIn Profile
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  to="https://github.com/ImVictorM"
                >
                  GitHub Repository Access
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  to="mailto:victor.fmendes7@gmail.com"
                >
                  Email
                </NavLink>
              </li>
            </ul>
          </nav>
        </section>
      </div>
    </SectionContent>
  );
};

export default SystemOverview;
