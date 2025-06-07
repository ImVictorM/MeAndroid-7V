import { Accordion, AccordionRef } from "@/common/components/ui/Accordion";
import { workingExperiences } from "../../data/workingExperience";
import { toShortDate } from "@/common/utils/date";
import { useLogo } from "@/common/hooks/useLogo";
import { useEffect, useRef, useState } from "react";
import { useWindowDimensions } from "@/common/hooks/useWindowDimensions";

export const MissionLog: React.FC = () => {
  const logo = useLogo();
  const accordionContainerRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<AccordionRef>(null);
  const [openItemHeight, setOpenItemHeight] = useState<number>(0);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (!accordionRef.current || !accordionContainerRef.current) {
      return;
    }
    const openHeight = accordionRef.current.getOpenItemHeight();

    const containerHeight =
      accordionContainerRef.current.getBoundingClientRect().height;
    const accordionHeight = accordionRef.current.getBoundingClientRect().height;

    if (openHeight === 0) {
      setOpenItemHeight(containerHeight - accordionHeight);
    } else {
      setOpenItemHeight(containerHeight - openHeight);
    }
  }, [width]);

  return (
    <section className="flex flex-col gap-10 min-h-full">
      <h1 className="text-3xl text-shadow-heading">
        Mission Log{" "}
        <span className="text-lg whitespace-nowrap text-shadow-none">
          - Projects & Working XP
        </span>
      </h1>

      <div
        ref={accordionContainerRef}
        className="flex flex-col grow-1 bg-card relative"
      >
        <Accordion
          ref={accordionRef}
          className="[&_*]:z-10"
          openHeight={openItemHeight}
          defaultOpenId={2}
          items={[
            {
              id: 1,
              title: "Projects",
              content: (
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              ),
            },
            {
              id: 2,
              title: "Working Experience",
              content: (
                <section className="flex flex-col gap-4">
                  {workingExperiences.map(
                    ({
                      company,
                      position,
                      activities,
                      id,
                      techs,
                      endDate,
                      startDate,
                      status,
                    }) => (
                      <div key={id} className="flex flex-col gap-2 border p-3">
                        <div className="flex flex-row justify-between gap-4">
                          <h3 className="text-lg font-bold">{position}</h3>

                          <span className="text-sm text-foreground-muted self-baseline">
                            {toShortDate(new Date(startDate))} -{" "}
                            {endDate
                              ? toShortDate(new Date(endDate))
                              : "Present"}
                          </span>
                        </div>

                        <div className="flex flex-col">
                          <h4 className="text-lg">{company}</h4>
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

                          <span className="text-sm self-end ml-auto text-foreground-muted">
                            Status:{" "}
                            {status.charAt(0).toUpperCase() + status.slice(1)}
                          </span>
                        </div>
                      </div>
                    ),
                  )}
                </section>
              ),
            },
          ]}
        />

        <img
          alt="unit 7V logo"
          src={logo}
          className="size-60 opacity-10 absolute-center z-1"
        />
      </div>
    </section>
  );
};

export default MissionLog;
