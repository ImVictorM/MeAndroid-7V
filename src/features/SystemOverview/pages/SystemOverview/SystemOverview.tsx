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

              <div className="flex flex-col gap-3 mr-auto">
                <dl className="flex flex-col">
                  <dt className="text-foreground-muted text-xs">Codename</dt>
                  <dd className="leading-4">7V</dd>
                </dl>

                <dl className="flex flex-col">
                  <dt className="text-foreground-muted text-xs">Designation</dt>
                  <dd className="leading-4">Victor Figueiredo Mendes</dd>
                </dl>

                <dl className="flex flex-col">
                  <dt className="text-foreground-muted text-xs">
                    Operational Since
                  </dt>
                  <dd className="leading-4">2001</dd>
                </dl>

                <dl className="flex flex-col">
                  <dt className="text-foreground-muted text-xs">
                    Primary Function
                  </dt>
                  <dd className="leading-4">Software Development</dd>
                </dl>

                <dl className="flex flex-col">
                  <dt className="text-foreground-muted text-xs">Location</dt>
                  <dd className="leading-4">Limeira/SP - Brazil</dd>
                </dl>

                <dl className="flex flex-col">
                  <dt className="text-foreground-muted text-xs">
                    Current Status
                  </dt>
                  <dd className="leading-4">Operational</dd>
                </dl>
              </div>
            </div>

            <button className="button button-action mt-auto ml-auto">
              Download Resume Data File (PDF)
            </button>
          </div>
        </section>

        <section className="card order-3 2xl:order-2">
          <h3 className="card-heading">External Network Links</h3>
          <nav className="card-content flex flex-col gap-2">
            <NavLink className="link" to="">
              LinkedIn Profile
            </NavLink>
            <NavLink className="link" to="">
              GitHub Repository Access
            </NavLink>
            <NavLink className="link" to="">
              Email
            </NavLink>
          </nav>
        </section>

        <section className="card order-2 2xl:order-3 2xl:col-span-2">
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
      </section>
    </section>
  );
};

export default SystemOverview;
