import React, { ReactNode } from 'react';
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

// Container for main content sections like Mission Log, Skills, etc.
export const SectionContainer: React.FC<SectionContainerProps> = ({ title, children, className }) => {
  return (
    <section className={cn("mb-8", className)}>
      {title && (
        <h2 className="text-lg uppercase mb-4 border-b border-nier-light-border dark:border-nier-dark-border pb-1">
          {title}
        </h2>
      )}
      <div>{children}</div>
    </section>
  );
};

