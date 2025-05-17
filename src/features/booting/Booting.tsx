import { useTypewriter } from "@/hooks/useTypewriter";
import React from "react";
import logo from "@/assets/logo.png";

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

interface LoadingScreenProps {
  onFinished: () => void;
}

const Booting: React.FC<LoadingScreenProps> = () => {
  const { displayLines } = useTypewriter(bootSequence);

  return (
    <div className="relative container mx-auto min-h-screen max-w-(--max-width) px-(--padding-x) py-5 [--max-width:var(--container-7xl)] [--padding-x:--spacing(7)]">
      <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-10">
        <img src={logo} alt="Unit 7V Logo" className="h-64 w-64 opacity-50" />
      </div>

      <div className="w-full">
        <div className="my-10 flex items-center justify-between">
          <h1 className="col-span-5 text-4xl">
            LOADING{" "}
            <span className="loading-ellipsis text-xl whitespace-nowrap">
              - BOOTING SYSTEM
            </span>
          </h1>

          <div className="ml-3">
            <span className="loading-spinner hidden sm:block" />
          </div>
        </div>

        <pre className="pl-2 text-sm/relaxed whitespace-pre-wrap sm:pl-5">
          <ul>
            {displayLines.map((line: string, index: number) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
        </pre>
      </div>
    </div>
  );
};

export default Booting;
