import React from "react";
import { SectionHeader } from "@/common/components/ui/SectionHeader";
import { educationData } from "../../data/education";
import { Folder } from "../../components/cards/Folder";
import { toShortDate } from "@/common/utils/date";
import { useLogo } from "@/common/hooks/useLogo";

export const Training: React.FC = () => {
  const logo = useLogo();

  return (
    <section className="flex flex-col gap-10 min-h-full">
      <SectionHeader title="Training" subtitle="Education" />

      <div className="flex flex-col border border-primary-subtle grow-1 card p-5 gap-4">
        <header className="flex flex-row justify-between pb-6 border-b border-primary-subtle gap-4">
          <div>
            <h2 className="text-lg font-bold mb-2">
              [Classified] Unit 7V Training Records
            </h2>
            <span className="text-foreground-muted">
              Access Level: Authorized
            </span>
          </div>

          <div
            className="flex items-center justify-center border-2 border-foreground-muted py-3 px-4
              -rotate-5 opacity-50 relative"
          >
            <span className="text-2xl uppercase text-foreground-muted font-bold">
              Approved
            </span>

            <img
              className="absolute-center size-20 opacity-15 -rotate-5"
              alt="unit 7V logo"
              src={logo}
            />
          </div>
        </header>

        <section className="grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] auto-rows-fr gap-y-5 gap-x-2">
          {educationData.degrees.map((degree, index) => {
            const id = `EDU-${(index + 1).toString().padStart(3, "0")}`;

            return (
              <Folder
                key={id}
                id={id}
                type="degree"
                status={degree.status}
                date={`${degree.startDate.getFullYear()} - ${degree.endDate.getFullYear()}`}
                issuer={degree.institution}
                title={degree.degree}
                subject={degree.fieldOfStudy}
              />
            );
          })}
          {educationData.courses.map((course, index) => {
            const id = `CRS-${(index + 1).toString().padStart(3, "0")}`;

            return (
              <Folder
                key={id}
                id={id}
                type="course"
                status={course.status}
                date={`${course.startDate.getFullYear()} - ${course.endDate.getFullYear()}`}
                issuer={course.institution}
                title={course.course}
                subject={course.fieldOfStudy}
              />
            );
          })}

          {educationData.certifications.map((certification, index) => {
            const id = `CRT-${(index + 1).toString().padStart(3, "0")}`;

            return (
              <Folder
                key={id}
                id={id}
                type="certification"
                status={certification.status}
                date={toShortDate(certification.issueDate)}
                issuer={certification.issuer}
                title={certification.certification}
              />
            );
          })}
        </section>
      </div>
    </section>
  );
};

export default Training;
