import { useLayoutEffect, useState } from "react";
import { NavLink } from "react-router";
import { Modal } from "@/common/components/ui/Modal";
import { useLogo } from "@/common/hooks/useLogo";
import { toTitleCase } from "@/common/utils/text";
import usePrefersReducedMotion from "@/common/hooks/usePrefersReducedMotion";

export type EducationFile = {
  id: string;
  type: string;
  title: string;
  provider: { type: string; name: string };
  date: {
    title: string;
    value: string;
  };
  status: string;
  skills: string[];
  fieldOfStudy?: string;
  credentialCode?: string;
  credentialURL?: string;
  description?: string;
  note?: string;
};

type EducationFileProps = EducationFile & {
  onClose: () => void;
  show: boolean | null;
};

type EducationFolderProps = {
  file: EducationFile;
};

const EducationFile: React.FC<EducationFileProps> = ({
  onClose,
  title,
  provider,
  fieldOfStudy,
  status,
  skills,
  date,
  credentialCode,
  credentialURL,
  description,
  id,
  type,
  note,
  show,
}) => {
  const logo = useLogo();

  return (
    <Modal
      show={show}
      onHide={onClose}
      title={title}
      subtitle={`${id.toUpperCase()} - ${toTitleCase(type)}`}
      animationType="slide"
      animationBackdropType="fade"
    >
      <div
        tabIndex={0}
        className="relative px-(--padding-x) py-(--padding-y) overflow-y-auto grow-1 h-[80vh]
          focus:outline-focus focus:-outline-offset-4 [--padding-x:--spacing(5)]
          [--padding-y:--spacing(4)]"
      >
        <dl className="flex flex-col gap-4">
          <div className="flex flex-col gap-1 flex-wrap pb-2 border-dotted border-b border-primary-subtle">
            <dt className="text-foreground-muted text-sm font-bold">Title</dt>
            <dd>{title}</dd>
          </div>

          <div className="flex flex-col gap-1 flex-wrap pb-2 border-dotted border-b border-primary-subtle">
            <dt className="text-foreground-muted text-sm font-bold">
              {toTitleCase(provider.type)}
            </dt>
            <dd>{provider.name}</dd>
          </div>

          {fieldOfStudy && (
            <div className="flex flex-col gap-1 flex-wrap pb-2 border-dotted border-b border-primary-subtle">
              <dt className="text-foreground-muted text-sm font-bold">
                Field of Study
              </dt>
              <dd>{fieldOfStudy}</dd>
            </div>
          )}

          <div className="flex flex-col gap-1 flex-wrap pb-2 border-dotted border-b border-primary-subtle">
            <dt className="text-foreground-muted text-sm font-bold">
              {toTitleCase(date.title)}
            </dt>
            <dd>{date.value}</dd>
          </div>

          <div className="flex flex-col gap-1 flex-wrap pb-2 border-dotted border-b border-primary-subtle">
            <dt className="text-foreground-muted text-sm font-bold">Status</dt>
            <dd>{toTitleCase(status)}</dd>
          </div>

          {description && (
            <div className="flex flex-col gap-1 flex-wrap pb-2 border-dotted border-b border-primary-subtle">
              <dt className="text-foreground-muted text-sm font-bold">
                Description
              </dt>
              <dd>{description}</dd>
            </div>
          )}

          {note && (
            <div className="flex flex-col gap-1 flex-wrap pb-2 border-dotted border-b border-primary-subtle">
              <dt className="text-foreground-muted text-sm font-bold">Note</dt>
              <dd>{note}</dd>
            </div>
          )}

          {credentialCode && (
            <div className="flex flex-col gap-1 flex-wrap pb-2 border-dotted border-b border-primary-subtle">
              <dt className="text-foreground-muted text-sm font-bold">
                Credential Code
              </dt>
              <dd>{credentialCode}</dd>
            </div>
          )}

          {credentialURL && (
            <div className="flex flex-col gap-1 flex-wrap pb-2 border-dotted border-b border-primary-subtle">
              <dt className="text-foreground-muted text-sm font-bold">
                Credential URL
              </dt>
              <dd className="link">
                <NavLink
                  rel="noopener noreferrer"
                  target="_blank"
                  to={credentialURL}
                  aria-label={`open diploma validation page for ${title}`}
                >
                  {credentialURL}
                </NavLink>
              </dd>
            </div>
          )}

          <div className="flex flex-col gap-1 flex-wrap pb-2">
            <dt className="text-foreground-muted text-sm font-bold">
              Skills Acquired
            </dt>
            <dd className="flex flex-row flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="badge">
                  {skill}
                </span>
              ))}
            </dd>
          </div>
        </dl>

        <img
          className="absolute right-(--padding-x) top-(--padding-y) size-40 opacity-10"
          src={logo}
          alt="unit 7V military organization brand"
        />
      </div>
    </Modal>
  );
};

export const EducationFolder: React.FC<EducationFolderProps> = ({ file }) => {
  const [isFolderOpen, setIsFolderOpen] = useState<boolean | null>(null);
  const [innerFileAnimation, setInnerFileAnimation] = useState<string>("");
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleOpen = () => {
    setIsFolderOpen(true);
  };

  const handleClose = () => {
    setIsFolderOpen(false);
  };

  useLayoutEffect(() => {
    if (prefersReducedMotion || isFolderOpen === null) return;

    if (isFolderOpen) {
      setInnerFileAnimation("animate-[fade-out-up_300ms_ease-in_forwards]");
    } else {
      setInnerFileAnimation("animate-[fade-in-down_300ms_ease-out_forwards]");
    }
  }, [prefersReducedMotion, isFolderOpen]);

  return (
    <>
      <div
        className="flex perspective-midrange size-full motion-safe:has-focus-visible:outline-focus
          [--tab-height:calc(--spacing(8)+var(--folder-border))] [--folder-border:2px]
          [--open-duration:200ms] [--close-delay:calc(var(--open-duration)*2)]"
      >
        <button
          type="button"
          onClick={handleOpen}
          className="relative mx-3 mt-(--tab-height) w-full grow-1 flex flex-col bg-primary-subtle
            cursor-pointer group transform-3d motion-safe:focus-visible:outline-0
            focus:not:has(:focus-visible):outline-focus"
          aria-label={`${file.type} in ${file.title} - ${file.provider.name}, ${file.date.value}`}
        >
          {/* Folder tab */}
          <div
            className={`absolute flex flex-row transform-3d origin-top h-(--tab-height)
              border-(length:--folder-border) border-primary-subtle w-[40%]
              motion-safe:transition-all motion-safe:duration-(--open-duration)
              motion-safe:group-hover:rotate-x-180 motion-safe:group-hover:z-0
              motion-safe:group-hover:delay-0 motion-safe:group-focus-visible:rotate-x-180
              motion-safe:group-focus-visible:z-0 motion-safe:group-focus-visible:delay-0
              ${isFolderOpen ? "motion-safe:rotate-x-180 motion-safe:z-0 motion-safe:delay-0" : "z-20 motion-safe:delay-(--close-delay)"}
              [--tab-color:var(--color-primary)]
              [--tab-color-hover:var(--color-primary-subtle)]`}
          >
            <div
              className={`relative size-full transform-3d motion-safe:transition-all
                motion-safe:group-hover:delay-0 motion-safe:group-hover:bg-(--tab-color-hover)
                motion-safe:group-focus-visible:delay-0
                motion-safe:group-focus-visible:bg-(--tab-color-hover)
                ${isFolderOpen ? "motion-safe:delay-0 motion-safe:bg-(--tab-color-hover)" : "motion-safe:delay-(--close-delay) bg-(--tab-color)"}`}
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
              className={`absolute p-2 bg-card self-center w-[90%] h-full border border-primary-subtle
                motion-safe:transition-transform motion-safe:duration-(--open-duration)
                motion-safe:group-hover:delay-(--open-duration)
                motion-safe:group-hover:-translate-y-5
                motion-safe:group-focus-visible:delay-(--open-duration)
                motion-safe:group-focus-visible:-translate-y-5 ${innerFileAnimation}`}
            ></div>

            <div
              className={`flex flex-col grow-1 transform-3d origin-bottom border-(length:--folder-border)
                border-primary-subtle shadow-md motion-safe:transition-transform
                motion-safe:delay-(--open-duration) motion-safe:duration-(--open-duration)
                motion-safe:group-hover:-rotate-x-15
                motion-safe:group-focus-visible:-rotate-x-15
                ${isFolderOpen ? "motion-safe:-rotate-x-15" : ""}`}
            >
              <div
                className="uppercase flex flex-row justify-end text-xs font-bold px-4 py-2 bg-primary
                  transform-3d"
              >
                <span>{file.type}</span>
              </div>

              <div className="flex flex-col gap-5 p-5 bg-card grow-1 justify-center text-center transform-3d">
                <div className="flex flex-col transform-3d">
                  <span className="font-bold text-lg">{file.title}</span>
                  <span className="text-sm mb-2">{file.provider.name}</span>
                  <span className="text-xs text-foreground-muted italic">
                    {file.date.value}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </button>
      </div>

      <EducationFile {...file} onClose={handleClose} show={isFolderOpen} />
    </>
  );
};

export default EducationFolder;
