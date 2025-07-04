import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";

import { useLogo } from "@/common/hooks/useLogo";
import { Typewriter } from "@/common/components/effects/Typewriter";
import { LoadingSpinner } from "@/common/components/feedback/LoadingSpinner";
import { useSkip } from "@/common/hooks/useSkip";
import useAppSelector from "@/common/hooks/useAppSelector";
import { dateDifferenceDays } from "@/common/utils/date";
import { IS_TOUCH_DEVICE } from "@/common/utils/device";

const bootSequence = [
  "Commencing System Check",
  "Memory Unit: GREEN",
  "Initializing Tactics Log",
  "Loading Geographic Data",
  "Vitals: GREEN",
  "Remaining MP: 100%",
  "Black Box Temperature: NORMAL",
  "Black Box Internal Pressure: NORMAL",
  "Activating IFF",
  "Activating FCS",
  "Initializing POD Connection",
  "Launching DBU Setup",
  "Activating Inertia Control System",
  "Activating Environmental Sensors",
  "Equipment Authentication: COMPLETE",
  "Equipment Status: GREEN",
  "All Systems Green",
  "Combat Preparations Complete",
  "Loading Unit 7V Profile",
  "Boot Sequence Complete.",
];

const Booting: React.FC = () => {
  const { lastVisit, visitCount } = useAppSelector((s) => s.userActivity);
  const [showSkipTip, setShowSkipTip] = useState<boolean>(false);
  const navigate = useNavigate();
  const logo = useLogo();
  const shouldSkipBooting = useSkip();

  const delayToCompleteBooting = useMemo(() => {
    return shouldSkipBooting ? 1000 : 2000;
  }, [shouldSkipBooting]);

  const handleTypingComplete = () => {
    navigate("/intro");
  };

  useEffect(() => {
    const now = new Date();
    const lastVisitDate = lastVisit ? new Date(lastVisit) : null;

    const isMoreThanOneDay = lastVisitDate
      ? dateDifferenceDays(lastVisitDate, now) > 0
      : false;

    const shouldShowSkip = visitCount > 1 || isMoreThanOneDay;

    setShowSkipTip(shouldShowSkip);
  }, [lastVisit, visitCount]);

  return (
    <div className="flex max-w-content relative container mx-auto min-h-screen p-4 sm:px-7 sm:py-5">
      {logo && (
        <>
          <div className="absolute inset-0 -z-10 flex items-center justify-center">
            <img
              src={logo}
              alt="unit 7V logo"
              className="size-64 opacity-5 md:size-86"
            />
          </div>

          <main className="flex flex-col w-full grow">
            <section className="flex flex-col w-full grow">
              <div className="my-5 flex items-center justify-between sm:my-10">
                <h1 className="text-3xl sm:text-4xl">
                  LOADING{" "}
                  <span className="text-loading-ellipsis text-lg sm:text-xl">
                    - BOOTING SYSTEM
                  </span>
                </h1>

                <div className="ml-3 self-baseline">
                  <LoadingSpinner className="hidden sm:block" />
                </div>
              </div>

              <div className="flex flex-row justify-between flex-wrap grow">
                <ul className="pl-2 whitespace-pre-wrap text-base/normal sm:text-base/relaxed sm:pl-5">
                  <Typewriter
                    content={bootSequence}
                    onComplete={handleTypingComplete}
                    options={{
                      delayToComplete: delayToCompleteBooting,
                      forceComplete: shouldSkipBooting,
                    }}
                    as="li"
                  />
                </ul>

                {showSkipTip && (
                  <div
                    role="note"
                    aria-live="polite"
                    className="self-end ml-auto mt-2 uppercase opacity-100 motion-safe:opacity-0
                      motion-safe:animate-fade-in-subtle"
                  >
                    <span>
                      {IS_TOUCH_DEVICE
                        ? "Touch to skip"
                        : 'Press "Space" to skip'}
                    </span>
                  </div>
                )}
              </div>
            </section>
          </main>
        </>
      )}
    </div>
  );
};

export default Booting;
