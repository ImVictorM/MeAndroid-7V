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
    <div
      className="relative flex flex-col bg-primary-subtle cursor-pointer group
        perspective-midrange mx-3 mt-(--tab-height)
        [--tab-height:calc(--spacing(8)+var(--folder-border))] [--folder-border:2px]
        [--open-duration:200ms] [--close-delay:calc(var(--open-duration)*2)]
        [--transition]"
    >
      {/* Folder tab */}
      <div
        className="absolute flex flex-row transform-3d origin-top z-20 h-(--tab-height)
          border-(length:--folder-border) border-primary-subtle w-[40%] transition-all
          delay-(--close-delay) duration-(--open-duration) group-hover:rotate-x-180
          group-hover:z-0 group-hover:delay-0 [--tab-color:var(--color-primary)]
          [--tab-color-hover:var(--color-primary-subtle)]"
      >
        <div
          className="relative transition-all size-full delay-(--close-delay) transform-3d
            group-hover:delay-0 bg-(--tab-color) group-hover:bg-(--tab-color-hover)"
        >
          <span
            className="absolute inset-0 flex items-center justify-center text-xs font-bold
              backface-hidden"
          >
            {id}
          </span>
        </div>
      </div>

      <div className="flex flex-col grow-1 transform-3d">
        {/* File inside the folder */}
        <div
          className="absolute p-2 bg-amber-50 self-center w-[90%] h-full border border-primary-subtle
            delay-(--open-duration) transition-transform group-hover:-translate-y-5"
        >
          {title}
        </div>

        <div
          className="flex flex-col grow-1 transform-3d origin-bottom duration-(--open-duration)
            delay-(--open-duration) border-(length:--folder-border) border-primary-subtle
            shadow-md transition-transform group-hover:-rotate-x-15"
        >
          <header
            className="uppercase flex flex-row justify-end text-xs font-bold px-4 py-2 bg-primary
              transform-3d"
          >
            <span>{type}</span>
          </header>

          <div className="flex flex-col gap-5 p-5 bg-card grow-1 justify-center text-center transform-3d">
            <div className="flex flex-col transform-3d">
              <h4 className="font-bold text-lg">{title}</h4>
              <span className="text-sm mb-2">{issuer}</span>
              <span className="text-xs text-foreground-muted italic">
                {date}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Folder;
