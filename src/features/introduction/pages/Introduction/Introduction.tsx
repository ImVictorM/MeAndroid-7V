import { Typewriter } from "@/common/components/effects/Typewriter";
import { useSkip } from "@/common/hooks/useSkip";
import { mainNavigation } from "@/common/routes/navigation";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";

const Introduction: React.FC = () => {
  const [showDialogueOptions, setShowDialogueOptions] =
    useState<boolean>(false);
  const shouldCompleteDialogue = useSkip();
  const dialogueOptionRefs = useRef<HTMLAnchorElement[]>(
    Array(mainNavigation.length).fill(null),
  );

  const handleTypingComplete = () => {
    setShowDialogueOptions(true);
  };

  const handleDialogueOptionMouseEnter = () => {
    const focused = dialogueOptionRefs.current.find(
      (el) => el === document.activeElement,
    );

    if (focused) {
      focused.blur();
    }
  };

  useEffect(() => {
    if (!showDialogueOptions) return;

    const firstDialogueOption = dialogueOptionRefs.current[0];

    firstDialogueOption.focus();
  }, [showDialogueOptions]);

  useEffect(() => {
    if (!showDialogueOptions) return;

    const verticalMovementKeys = {
      up: ["ArrowUp", "w"],
      down: ["ArrowDown", "s"],
    };

    const eventKeys = Object.values(verticalMovementKeys).flat();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!eventKeys.includes(e.key)) return;

      const activeIndex = dialogueOptionRefs.current.findIndex(
        (el) => el === document.activeElement,
      );

      if (verticalMovementKeys.down.includes(e.key)) {
        const next = Math.min(
          activeIndex + 1,
          dialogueOptionRefs.current.length - 1,
        );
        dialogueOptionRefs.current[next]?.focus();
      }

      if (verticalMovementKeys.up.includes(e.key)) {
        const previous = Math.max(activeIndex - 1, 0);
        dialogueOptionRefs.current[previous]?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showDialogueOptions]);

  return (
    <div className="flex justify-center w-full min-h-screen bg-background">
      <main className="min-h-screen w-full max-w-content relative flex flex-col justify-end">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col justify-between gap-10 sm:gap-0 sm:flex-row">
            <h1
              className="bg-card border-l-double-20 order-2 w-fit py-3 ps-12 pe-10 text-xl font-bold
                text-nowrap sm:order-1 sm:self-end motion-safe:animate-fade-in"
            >
              Victor Mendes
            </h1>

            {showDialogueOptions && (
              <nav
                className="order-1 self-end min-w-[15rem] mr-4 xl:min-w-[20rem] xl:mr-0
                  motion-safe:animate-fade-in"
              >
                <ul className="flex flex-col gap-2 w-full">
                  {mainNavigation.map(({ name, label, path }, index) => (
                    <li key={path}>
                      <NavLink
                        ref={(link) => {
                          if (link) {
                            dialogueOptionRefs.current[index] = link;
                          }
                        }}
                        to={path}
                        title={label}
                        className="flex group button button-option"
                        aria-label={label}
                        onMouseEnter={handleDialogueOptionMouseEnter}
                      >
                        <span
                          className="min-w-[1lh] size-[1lh] flex flex-col justify-center mr-1 before:content-['']
                            before:min-w-[1em] before:inline-block before:bg-primary-foreground
                            before:size-[1em] group-hover:before:bg-card group-focus:before:bg-card"
                        />
                        {name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>

          <div
            className="bg-card p-4 min-h-[25vh] max-h-[48vh] overflow-y-auto sm:px-10 sm:pt-5 sm:pb-10
              lg:px-40 lg:pt-10 lg:pb-15 motion-safe:animate-fade-in"
          >
            <Typewriter
              content={[
                "Hello, and welcome! I'm Victor Figueiredo Mendes, and this is my portfolio.",
                "I designed this portfolio as a way to introduce myself as an Android whose codename is 7V.",
                `You may encounter unfamiliar Android-like terminology. But don't worry. 
                If you feel lost, try hovering over things to receive more context. Please select an option to begin exploring.`,
              ]}
              showCursor={false}
              onComplete={handleTypingComplete}
              options={{ forceComplete: shouldCompleteDialogue }}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Introduction;
