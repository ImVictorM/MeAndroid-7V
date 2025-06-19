import { PropsWithChildren } from "react";

type SectionContentTitleProps = {
  title: string;
  subtitle: string;
};

type SectionContentProps = PropsWithChildren & SectionContentTitleProps & {};

const SectionContentTitle: React.FC<SectionContentTitleProps> = ({
  subtitle,
  title,
}) => {
  return (
    <h1 className="text-3xl text-shadow-heading">
      {title}{" "}
      <span className="text-lg whitespace-nowrap text-shadow-none">
        - {subtitle}
      </span>
    </h1>
  );
};

export const SectionContent: React.FC<SectionContentProps> = ({
  children,
  ...rest
}) => {
  return (
    <section className="flex flex-col gap-10 grow">
      <SectionContentTitle {...rest} />
      {children}
    </section>
  );
};

export default SectionContent;
