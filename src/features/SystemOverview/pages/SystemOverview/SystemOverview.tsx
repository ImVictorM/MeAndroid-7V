import { NavLink } from "react-router";
import resume from "@/common/assets/files/resume.pdf";
import { SectionHeader } from "@/common/components/ui/SectionHeader";

export const SystemOverview: React.FC = () => {
  return (
    <section className="flex flex-col gap-10">
      <SectionHeader title="System Overview" subtitle="About" />

      <section className="grid grid-cols-[_1fr] gap-5 2xl:grid-cols-[4fr_minmax(300px,_1fr)]">
        <section className="card order-1">
          <h3 className="card-heading">Unit Identification</h3>
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
            >
              Download Resume Data File (PDF)
            </NavLink>
          </div>
        </section>

        <section className="card order-3 2xl:order-2">
          <h3 className="card-heading">External Network Links</h3>
          <nav className="card-content flex flex-col gap-2">
            <NavLink
              className="link"
              target="_blank"
              to="https://www.linkedin.com/in/victor-figueiredo-mendes/"
            >
              LinkedIn Profile
            </NavLink>
            <NavLink
              className="link"
              target="_blank"
              to="https://github.com/ImVictorM"
            >
              GitHub Repository Access
            </NavLink>
            <NavLink
              className="link"
              target="_blank"
              to="mailto:victor.fmendes7@gmail.com"
            >
              Email
            </NavLink>
          </nav>
        </section>

        <section className="card order-2 2xl:order-3 2xl:col-span-2">
          <h3 className="card-heading">File</h3>
          <p className="card-content">
            Unit 7V: Software Development model, operational since 2001.
            Optimized for collaborative environments and the creation of
            effective technological solutions. Core competencies include
            full-stack development utilizing JavaScript/TypeScript (React,
            Node.js) and C# (ASP.NET Core, EF Core), alongside database
            proficiency (Postgres, MSSQL) and adherence to modern design
            paradigms (Clean Architecture, DDD, SOLID). Knowledge acquisition
            modules completed via Anhanguera (bachelor in Systems Analysis &
            Development) and Trybe (1500+ hr Full Stack Development course).
            Unit exhibits high motivation for continuous capability enhancement
            and collaborative problem-solving to convert strategic objectives
            into functional, innovative system outputs.
          </p>
        </section>
      </section>
    </section>
  );
};

export default SystemOverview;
