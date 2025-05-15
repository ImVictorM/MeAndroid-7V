import React, { ReactNode } from "react";

interface SectionContainerProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

// Container for main content sections like Mission Log, Skills, etc.
export const SectionContainer: React.FC<SectionContainerProps> = ({
  title,
  children,
}) => {
  return (
    <section className="mb-8">
      {title && (
        <h2 className="border-nier-light-border dark:border-nier-dark-border mb-4 border-b pb-1 text-lg uppercase">
          {title}
        </h2>
      )}
      <div>{children}</div>
    </section>
  );
};
