type SectionHeaderProps = {
  title: string;
  subtitle: string;
};

export const SectionHeader: React.FC<SectionHeaderProps> = ({
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

export default SectionHeader;
