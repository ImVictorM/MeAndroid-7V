import { useScrollLock } from "@/common/hooks/useScrollLock";
import { PropsWithChildren, useLayoutEffect, useRef, useState } from "react";

export type ModalAnimation = "fade" | "slide";

export type ModalProps = PropsWithChildren & {
  show: boolean;
  onHide: () => void;
  title?: string;
  subtitle?: string;
  animationType?: ModalAnimation;
  animationBackdropType?: ModalAnimation;
  className?: string;
};

const animationMap = {
  fade: {
    in: "open:animate-[fade-in_250ms_ease-out_forwards]",
    out: "animate-[fade-out_250ms_ease-in_forwards]",
    backdropIn: "open:backdrop:animate-[fade-in_250ms_ease-out_forwards]",
    backdropOut: "backdrop:animate-[fade-out_250ms_ease-in_forwards]",
    durationOut: 250,
  },
  slide: {
    in: "open:animate-[fade-in-down_250ms_ease-out_forwards]",
    out: "animate-[fade-out-up_250ms_ease-in_forwards]",
    backdropIn: "open:backdrop:animate-[fade-in-down_250ms_ease-out_forwards]",
    backdropOut: "backdrop:animate-[fade-out-up_250ms_ease-in_forwards]",
    durationOut: 250,
  },
};

export const Modal: React.FC<ModalProps> = ({
  show,
  onHide,
  children,
  animationType = "fade",
  animationBackdropType = "fade",
  title,
  subtitle,
  className,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const hideTimeoutRef = useRef<NodeJS.Timeout>(null);
  const [backdropAnimation, setBackdropAnimation] = useState<string>("");
  const [dialogAnimation, setDialogAnimation] = useState<string>("");
  useScrollLock(show);

  useLayoutEffect(() => {
    const { current } = dialogRef;
    if (!current) return;

    const handleCancel = (e: Event) => {
      e.preventDefault();
      onHide();
    };

    current.addEventListener("cancel", handleCancel);

    return () => {
      current.removeEventListener("cancel", handleCancel);
    };
  }, [onHide]);

  useLayoutEffect(() => {
    const { current } = dialogRef;
    if (!current) return;

    const dialogAnimation = animationMap[animationType];
    const backdropAnimation = animationMap[animationBackdropType];

    if (show) {
      setDialogAnimation(dialogAnimation.in);
      setBackdropAnimation(backdropAnimation.backdropIn);

      current.showModal();
    } else {
      setDialogAnimation(dialogAnimation.out);
      setBackdropAnimation(backdropAnimation.backdropOut);

      const duration = Math.max(
        dialogAnimation.durationOut,
        backdropAnimation.durationOut,
      );

      hideTimeoutRef.current = setTimeout(() => {
        if (!current.open) return;

        current.close();
      }, duration);
    }

    return () => {
      if (!hideTimeoutRef.current) return;

      clearTimeout(hideTimeoutRef.current);
    };
  }, [show, animationType, animationBackdropType]);

  const handleHide = () => {
    onHide();
  };

  return (
    <dialog
      ref={dialogRef}
      onClick={handleHide}
      className={`fixed-center w-[95%] max-w-[700px] border border-primary-subtle shadow-2xl
        bg-card backdrop:bg-black/70 overflow-hidden ${dialogAnimation}
        ${backdropAnimation} ${className}`}
    >
      <div onClick={(e) => e.stopPropagation()} className="flex flex-col">
        <header
          className="sticky top-0 bg-primary w-full flex flex-row items-center justify-between p-4
            gap-5 shadow-xs z-10"
        >
          {title && (
            <div className="flex flex-col overflow-hidden">
              <h1
                title={title}
                className="text-lg font-bold overflow-hidden text-nowrap text-ellipsis"
              >
                {title}
              </h1>

              {subtitle && <h2>{subtitle}</h2>}
            </div>
          )}

          <button
            type="button"
            onClick={handleHide}
            className="ml-auto text-xl shrink-0 cursor-pointer px-2 self-baseline"
          >
            x
          </button>
        </header>
        <div>{children}</div>
      </div>
    </dialog>
  );
};

export default Modal;
