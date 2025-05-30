import { NavLink } from "react-router";

export const SystemOverview: React.FC = () => {
  return (
    <section className="flex flex-col gap-10">
      <h1 className="text-3xl text-shadow-heading">
        System Overview{" "}
        <span className="text-lg whitespace-nowrap text-shadow-none">
          - About
        </span>
      </h1>

      <section className="flex flex-col gap-5">
        <section className="card">
          <h3 className="card-heading">Unit Identification</h3>
          <div className="card-content flex justify-between gap-5">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col">
                  <span className="text-foreground-muted text-xs">
                    Codename
                  </span>
                  <span className="leading-4">7V</span>
                </div>

                <div className="flex flex-col">
                  <span className="text-foreground-muted text-xs">
                    Designation
                  </span>
                  <span className="leading-4">Victor Figueiredo Mendes</span>
                </div>

                <div className="flex flex-col">
                  <span className="text-foreground-muted text-xs">
                    Operational Since
                  </span>
                  <span className="leading-4">2001</span>
                </div>

                <div className="flex flex-col">
                  <span className="text-foreground-muted text-xs">
                    Primary Function
                  </span>
                  <span className="leading-4">Software Development</span>
                </div>

                <div className="flex flex-col">
                  <span className="text-foreground-muted text-xs">
                    Location
                  </span>
                  <span className="leading-4">Limeira/SP - Brazil</span>
                </div>

                <div className="flex flex-col">
                  <span className="text-foreground-muted text-xs">
                    Current Status
                  </span>
                  <span className="leading-4">Operational</span>
                </div>
              </div>

              <button className="button button-action mt-auto">
                Download Resume Data File (PDF)
              </button>
            </div>
            <div
              className="profile"
              role="img"
              aria-label="unit 7V profile picture"
            />
          </div>
        </section>

        <section className="card">
          <h3 className="card-heading">File</h3>
          <p className="card-content">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </section>

        <section className="card">
          <h3 className="card-heading">External Network Links & Data Files</h3>
          <nav className="card-content flex flex-col gap-2">
            <NavLink to="">LinkedIn Profile</NavLink>
            <NavLink to="">GitHub Repository Access</NavLink>
            <NavLink to="">Email</NavLink>
          </nav>
        </section>
      </section>
    </section>
  );
};

export default SystemOverview;
