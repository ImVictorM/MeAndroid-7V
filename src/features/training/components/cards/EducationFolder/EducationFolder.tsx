import { useLogo } from "@/common/hooks/useLogo";
import { useState } from "react";

export type EducationFile = {
  id: string;
  type: string;
  title: string;
  provider: { type: string; name: string };
  date: string;
  status: string;
  skills: string[];
  subject?: string;
  credentialCode?: string;
  credentialURL?: string;
  description?: string;
  note?: string;
};

type EducationFileProps = EducationFile & {
  onClose: () => void;
};

type EducationFolderProps = {
  file: EducationFile;
};

const EducationFile: React.FC<EducationFileProps> = ({
  onClose,
  title,
  provider,
  subject,
  status,
  skills,
  date,
  credentialCode,
  credentialURL,
  description,
}) => {
  const logo = useLogo();

  return (
    <div
      onClick={onClose}
      className="flex items-center justify-center fixed z-500 bg-black/20 inset-0"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col w-[95%] min-h-[70vh] max-w-[700px] bg-card shadow-2xl border
          border-primary-subtle"
      >
        <header
          className="sticky top-0 bg-primary w-full flex flex-row items-center justify-between p-4
            gap-5 shadow-xs"
        >
          <h1
            title={title}
            className="text-lg font-bold text-nowrap overflow-hidden text-ellipsis"
          >
            {title}
          </h1>

          <button
            type="button"
            onClick={onClose}
            className="text-xl cursor-pointer px-2 self-baseline"
          >
            x
          </button>
        </header>

        <div className="relative px-5 py-4 overflow-y-auto grow-1">
          <div className="flex flex-col">
            <span>{title}</span>
            <span>{provider.name}</span>
            <span>{provider.type}</span>
            <span>{subject}</span>
            <span>{status}</span>
            <span>{date}</span>

            <span>{credentialCode}</span>
            <span>{credentialURL}</span>

            <span>{description}</span>

            <ul className="flex flex-row flex-wrap">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          <img className="absolute-center size-50 opacity-10" src={logo} />
        </div>
      </div>
    </div>
  );
};

export const EducationFolder: React.FC<EducationFolderProps> = ({ file }) => {
  const [isFolderOpen, setIsFolderOpen] = useState<boolean>(false);

  const toggleFolderOpen = () => {
    setIsFolderOpen((prev) => !prev);
  };

  return (
    <>
      <button
        type="button"
        onClick={toggleFolderOpen}
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
              {file.id}
            </span>
          </div>
        </div>

        <div className="flex flex-col grow-1 transform-3d">
          {/* File inside the folder */}
          <div
            className="absolute p-2 bg-card self-center w-[90%] h-full border border-primary-subtle
              delay-(--open-duration) transition-transform group-hover:-translate-y-5"
          ></div>

          <div
            className="flex flex-col grow-1 transform-3d origin-bottom duration-(--open-duration)
              delay-(--open-duration) border-(length:--folder-border) border-primary-subtle
              shadow-md transition-transform group-hover:-rotate-x-15"
          >
            <header
              className="uppercase flex flex-row justify-end text-xs font-bold px-4 py-2 bg-primary
                transform-3d"
            >
              <span>{file.type}</span>
            </header>

            <div className="flex flex-col gap-5 p-5 bg-card grow-1 justify-center text-center transform-3d">
              <div className="flex flex-col transform-3d">
                <h4 className="font-bold text-lg">{file.title}</h4>
                <span className="text-sm mb-2">{file.provider.name}</span>
                <span className="text-xs text-foreground-muted italic">
                  {file.date}
                </span>
              </div>
            </div>
          </div>
        </div>
      </button>

      {isFolderOpen && <EducationFile onClose={toggleFolderOpen} {...file} />}
    </>
  );
};

export default EducationFolder;
