type FileProps = {
  id: string;
  type: string;
  title: string;
  issuer: string;
  subject?: string;
  date: string;
  status: string;
  className?: string;
};

export const File: React.FC<FileProps> = ({
  id,
  type,
  title,
  issuer,
  date,
  status,
  subject,
}) => {
  return (
    <div className="flex flex-col border border-primary-subtle">
      <header className="uppercase flex flex-row justify-between text-xs font-bold px-4 py-2 bg-primary">
        <span>File: {id}</span>
        <span>Type: {type}</span>
      </header>

      <div className="flex flex-col gap-4 px-4 py-2 bg-primary/30 grow-1 justify-between">
        <div className="flex flex-col gap-2">
          <h4 className="font-bold text-lg border-b border-dotted">{title}</h4>
          <span className="font-medium border-b border-dotted">{issuer}</span>
          {subject && (
            <span className="border-b border-dotted italic">{subject}</span>
          )}
          <span className="border-b border-dotted">{date}</span>
        </div>

        <div className="uppercase self-end font-bold text-foreground-muted">
          <span>{status}</span>
        </div>
      </div>
    </div>
  );
};

export default File;
