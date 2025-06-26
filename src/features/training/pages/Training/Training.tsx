import React from "react";
import {
  AcademicProgram,
  educationData,
  Certificate,
} from "../../data/education";
import {
  EducationFile,
  EducationFolder,
} from "../../components/cards/EducationFolder";
import { toShortDate } from "@/common/utils/date";
import { useLogo } from "@/common/hooks/useLogo";
import { SectionContent } from "@/common/components/ui/SectionContent";

export const Training: React.FC = () => {
  const logo = useLogo();

  const toEducationFile = (
    education: AcademicProgram | Certificate,
  ): EducationFile => {
    switch (education.type) {
      case "certificate":
        return {
          ...education,
          provider: {
            type: "issuer",
            name: education.issuer,
          },
          date: {
            title: "issue date",
            value: toShortDate(education.issueDate),
          },
        };
      default:
        return {
          ...education,
          provider: {
            type: "institution",
            name: education.institution,
          },
          date: {
            title: "period",
            value: `${education.startDate.getFullYear()} - ${education.endDate.getFullYear()}`,
          },
          fieldOfStudy: education.fieldOfStudy,
        };
    }
  };

  return (
    <SectionContent title="Training" subtitle="Education">
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
            className="items-center justify-center border-2 border-foreground-muted py-3 px-4 -rotate-5
              opacity-50 relative size-fit hidden md:flex"
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

        <section
          className="grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))]
            grid-rows-[repeat(auto-fit,minmax(16rem,1fr))] auto-rows-fr gap-2"
        >
          {Object.values(educationData)
            .flat()
            .map((ed) => (
              <EducationFolder key={ed.id} file={toEducationFile(ed)} />
            ))}
        </section>
      </div>
    </SectionContent>
  );
};

export default Training;
