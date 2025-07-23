import usePrefersReducedMotion from "@/common/hooks/usePrefersReducedMotion";
import { useScrollLock } from "@/common/hooks/useScrollLock";
import {
  PropsWithChildren,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

export type ModalAnimation = "fade" | "slide";

export type ModalProps = PropsWithChildren & {
  show: boolean | null;
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
  className = "",
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const hideTimeoutRef = useRef<NodeJS.Timeout>(null);
  const [animation, setAnimation] = useState({
    backdrop: "",
    dialog: "",
  });
  const durationOut = useRef<number>(0);
  const prefersReducedMotion = usePrefersReducedMotion();
  useScrollLock(show || false);

  useLayoutEffect(() => {
    if (prefersReducedMotion || show === null) return;

    const dialogAnimation = animationMap[animationType];
    const backdropAnimation = animationMap[animationBackdropType];

    if (show) {
      setAnimation({
        dialog: dialogAnimation.in,
        backdrop: backdropAnimation.backdropIn,
      });
    } else {
      durationOut.current = Math.max(
        dialogAnimation.durationOut,
        backdropAnimation.durationOut,
      );

      setAnimation({
        dialog: dialogAnimation.out,
        backdrop: backdropAnimation.backdropOut,
      });
    }
  }, [animationBackdropType, animationType, prefersReducedMotion, show]);

  useEffect(() => {
    const { current } = dialogRef;

    if (!current || show === null) return;

    if (show) {
      current.showModal();
    } else {
      hideTimeoutRef.current = setTimeout(() => {
        if (!current.open) return;

        current.close();
      }, durationOut.current);
    }

    return () => {
      if (!hideTimeoutRef.current) return;

      clearTimeout(hideTimeoutRef.current);
    };
  }, [show, animationType, animationBackdropType]);

  useEffect(() => {
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

  const handleHide = () => {
    onHide();
  };

  return (
    <dialog
      ref={dialogRef}
      onClick={handleHide}
      className={`fixed-center w-[95%] max-w-[700px] border border-card-subtle shadow-2xl bg-card
        overflow-y-hidden backdrop:bg-black/70 ${animation.dialog} ${animation.backdrop}
        ${className}`}
    >
      <section
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col size-full"
      >
        <header
          className="sticky top-0 bg-primary w-full flex flex-row items-center justify-between p-4
            gap-5 shadow-xs z-10"
        >
          {title && (
            <div className="flex flex-col overflow-hidden">
              <h1
                title={title}
                className="text-lg text-foreground font-bold overflow-hidden text-nowrap text-ellipsis"
              >
                {title}
              </h1>

              {subtitle && <h2 className="text-foreground">{subtitle}</h2>}
            </div>
          )}

          <button
            type="button"
            onClick={handleHide}
            className="ml-auto text-xl shrink-0 cursor-pointer px-2 self-baseline text-foreground"
            aria-label="close modal"
          >
            x
          </button>
        </header>
        <div className="flex flex-col grow">{children}</div>
      </section>
    </dialog>
  );
};

export default Modal;
