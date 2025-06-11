import React from "react";
import { SectionHeader } from "@/common/components/ui/SectionHeader";
import { educationData } from "../../data/education";
import { File } from "../../components/cards/File";

export const Training: React.FC = () => {
  return (
    <section className="flex flex-col gap-10 min-h-full">
      <SectionHeader title="Training" subtitle="Education" />

      <div className="flex flex-col border grow-1 card p-5 gap-4">
        <header className="flex flex-row justify-between pb-6 border-b gap-4">
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
              -rotate-5 opacity-50"
          >
            <span className="text-2xl uppercase text-foreground-muted font-bold">
              Approved
            </span>
          </div>
        </header>

        <section>
          {educationData.degrees.map((degree, index) => {
            const id = `EDU-${(index + 1).toString().padStart(3, "0")}`;

            return (
              <File
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
        </section>
      </div>
    </section>
  );
};

export default Training;
