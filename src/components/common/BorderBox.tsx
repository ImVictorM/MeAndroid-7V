import React, { ReactNode } from 'react';
import { cn } from "@/lib/utils";

interface BorderBoxProps {
  children: ReactNode;
  className?: string;
}

// A simple container with the characteristic Nier border
export const BorderBox: React.FC<BorderBoxProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "border border-nier-light-border dark:border-nier-dark-border p-4",
        className
      )}
    >
      {children}
    </div>
  );
};

