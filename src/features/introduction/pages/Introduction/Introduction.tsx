import { Typewriter } from "@/common/components/effects/Typewriter";
import { ButtonSquare } from "@/common/components/ui/ButtonSquare";
import { useState } from "react";
import { useNavigate } from "react-router";

const Introduction: React.FC = () => {
  const [showDialogOption, setShowDialogOptions] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <main
      className="max-w-content relative mx-auto flex h-full min-h-screen flex-col justify-end
        sm:px-7"
    >
      <div className="flex flex-col gap-3">
        <div className="flex flex-col justify-between gap-10 sm:flex-row">
          <h2
            className="bg-card border-l-double-20 order-2 w-fit py-3 ps-12 pe-10 text-xl font-bold
              animate-fade-in text-nowrap sm:order-1 sm:self-end"
          >
            Victor Mendes
          </h2>

          {showDialogOption && (
            <div className="order-1 flex flex-col gap-2 self-end animate-fade-in">
              <ButtonSquare
                aria-placeholder="About"
                onClick={() => navigate("/overview")}
              >
                System Overview
              </ButtonSquare>
              <ButtonSquare aria-placeholder="Skill & Projects">
                Technical Profile
              </ButtonSquare>
              <ButtonSquare aria-placeholder="Experiences">
                Mission Log
              </ButtonSquare>
              <ButtonSquare aria-placeholder="Settings & More Information">
                System Settings
              </ButtonSquare>
            </div>
          )}
        </div>

        <div className="bg-card px-10 pt-5 min-h-[30vh] pb-10 lg:px-40 lg:pt-10 lg:pb-15 animate-fade-in">
          <Typewriter
            content={[
              "Hello, and welcome! I'm Victor Figueiredo Mendes, and this is my portfolio.",
              "I designed this portfolio as a way of introducing myself as an android whose codename is 7V.",
              `You might face a different android-like vocabulary you might not be familiar with.
              But don't worry.  If you feel lost, try hovering over things to receive more context.`,
              "Please select an option to begin exploring.",
            ]}
            showCursor={false}
            onComplete={() => setShowDialogOptions(true)}
          />
        </div>
      </div>
    </main>
  );
};

export default Introduction;
