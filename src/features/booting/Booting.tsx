import { useTypewriter } from "@/hooks/useTypewriter";
import React from "react";
import { useLogo } from "@/hooks/useLogo";

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
  const { displayLines } = useTypewriter(bootSequence);
  const logo = useLogo();

  return (
    <div className="relative container mx-auto min-h-screen max-w-7xl px-7 py-5">
      {logo && (
        <>
          <div className="absolute inset-0 -z-10 flex items-center justify-center">
            <img
              src={logo}
              alt="unit 7V logo"
              className="size-64 opacity-5 md:size-86"
            />
          </div>

          <div className="w-full">
            <div className="my-10 flex items-center justify-between">
              <h1 className="text-4xl">
                LOADING{" "}
                <span className="loading-ellipsis text-xl whitespace-nowrap">
                  - BOOTING SYSTEM
                </span>
              </h1>

              <div className="ml-3">
                <span className="loading-spinner hidden sm:block" />
              </div>
            </div>

            <ul className="pl-2 text-base/relaxed whitespace-pre-wrap sm:pl-5">
              {displayLines.map((line: string, index: number) => (
                <li className="text-cursor-relaxed" key={index}>
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Booting;
