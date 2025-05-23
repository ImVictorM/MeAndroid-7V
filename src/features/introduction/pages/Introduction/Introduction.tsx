import { Typewriter } from "@/common/components/effects/Typewriter";
import { ButtonSquare } from "@/common/components/ui/ButtonSquare";
import { useState } from "react";

const Introduction: React.FC = () => {
  const [showDialogOption, setShowDialogOptions] = useState<boolean>(false);

  return (
    <main
      className="max-w-content relative mx-auto flex h-full min-h-screen flex-col justify-end
        sm:px-7"
    >
      <div className="flex flex-col gap-3">
        <div className="flex flex-col justify-between gap-10 sm:flex-row">
          <h2
            className="bg-card border-double-accent-8 order-2 w-fit py-3 ps-15 pe-10 text-xl font-bold
              animate-fade-in text-nowrap sm:order-1 sm:self-end"
          >
            Unit: 7V
          </h2>

          {showDialogOption && (
            <div className="order-1 flex flex-col gap-2 self-end animate-fade-in">
              <ButtonSquare aria-placeholder="about">
                System Overview
              </ButtonSquare>
              <ButtonSquare aria-placeholder="">Skills</ButtonSquare>
              <ButtonSquare>Mission Log</ButtonSquare>
              <ButtonSquare>System Settings</ButtonSquare>
            </div>
          )}
        </div>

        <div className="bg-card px-10 pt-5 min-h-[30vh] pb-10 lg:px-40 lg:pt-10 lg:pb-15 animate-fade-in">
          <Typewriter
            content="Hello, it is a pleasure to have you here. 
            I'm Victor Figueiredo Mendes and you are seeing my android version which codename is 7V.
            I designed this portfolio as a way of introduce myself as an android, so you may see and different vocabulary
            you may be used to. You can start the navigation clicking one of the options showed in your screen. If you 
            are not sure what something mean, try hovering the mouse or pressing the option."
            showCursor={false}
            onComplete={() => setShowDialogOptions(true)}
          />
        </div>
      </div>
    </main>
  );
};

export default Introduction;
