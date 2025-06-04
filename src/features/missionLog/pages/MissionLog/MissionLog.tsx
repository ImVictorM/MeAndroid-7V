import { Accordion } from "@/common/components/ui/Accordion";

export const MissionLog: React.FC = () => {
  return (
    <section className="flex flex-col gap-10 min-h-full">
      <h1 className="text-3xl text-shadow-heading">
        Mission Log{" "}
        <span className="text-lg whitespace-nowrap text-shadow-none">
          - Projects & Working XP
        </span>
      </h1>

      <Accordion
        className="card grow-1"
        defaultActiveId={2}
        items={[
          {
            id: 1,
            title: "not open by default",
            content: (
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            ),
          },
          {
            id: 2,
            title: "default open",
            content: (
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            ),
          },
        ]}
      />
    </section>
  );
};

export default MissionLog;
