type FolderProps = {
  id: string;
  type: string;
  title: string;
  issuer: string;
  subject?: string;
  date: string;
  status: string;
  className?: string;
};

export const Folder: React.FC<FolderProps> = ({
  id,
  type,
  title,
  issuer,
  date,
}) => {
  return (
    <div className="flex flex-col">
      <div
        className="flex flex-row h-(--tab-height) [--tab-height:--spacing(4)]
          [--tab-color:var(--color-primary-subtle)]"
      >
        <div className="bg-(--tab-color) w-[30%]"></div>
        <div
          className="border-r-(length:--tab-height) border-b-(length:--tab-height)
            border-r-transparent border-b-(--tab-color)"
        ></div>
      </div>

      <div className="flex flex-col grow-1 border border-primary-subtle">
        <header className="uppercase flex flex-row justify-between text-xs font-bold px-4 py-2 bg-primary">
          <span>File: {id}</span>
          <span>Type: {type}</span>
        </header>

        <div className="flex flex-col gap-5 p-5 bg-primary/30 grow-1 justify-center text-center">
          <div className="flex flex-col">
            <h4 className="font-bold text-lg">{title}</h4>
            <span className="text-sm mb-2">{issuer}</span>
            <span className="text-xs text-foreground-muted italic">{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Folder;
