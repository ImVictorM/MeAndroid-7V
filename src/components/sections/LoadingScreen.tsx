// src/components/sections/LoadingScreen.tsx
import React from 'react';
import { useTypingEffect } from '../../hooks/useTypingEffect';

const bootSequence = [
  "COMMENCING SYSTEM CHECK...",
  "MEMORY UNIT: GREEN",
  "INITIALIZING TACTICS LOG...",
  "LOADING GEOGRAPHIC DATA...",
  "VITALS: GREEN",
  "REMAINING MP: 100%",
  "BLACK BOX TEMPERATURE: NORMAL",
  "BLACK BOX INTERNAL PRESSURE: NORMAL",
  "ACTIVATING IFF...",
  "ACTIVATING FCS...",
  "INITIALIZING POD CONNECTION...",
  "LAUNCHING DBU SETUP...",
  "ACTIVATING INERTIA CONTROL SYSTEM...",
  "ACTIVATING ENVIRONMENTAL SENSORS...",
  "EQUIPMENT AUTHENTICATION: COMPLETE",
  "EQUIPMENT STATUS: GREEN",
  "ALL SYSTEMS GREEN",
  "COMBAT PREPARATIONS COMPLETE",
  "LOADING UNIT 7V PROFILE...",
  "BOOT SEQUENCE COMPLETE."
];

interface LoadingScreenProps {
  onFinished: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinished }) => {
  const typedText = useTypingEffect(bootSequence, 100, 50);
  const [isTypingComplete, setIsTypingComplete] = React.useState(false);

  React.useEffect(() => {
    // Check if typing is complete
    const fullBootSequenceText = bootSequence.join('\n');
    if (typedText.replace(/\s/g, '') === fullBootSequenceText.replace(/\s/g, '')) { // Compare without whitespace to be more robust
      setIsTypingComplete(true);
    }
  }, [typedText, bootSequence]);

  React.useEffect(() => {
    if (isTypingComplete) {
      const timer = setTimeout(() => {
        onFinished();
      }, 1000); // 1 second delay
      return () => clearTimeout(timer);
    }
  }, [isTypingComplete, onFinished]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-nier-bg text-nier-light-text font-nier p-8 screen-glitch">
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        {/* Logo will be integrated here */}
        <img src="/home/ubuntu/nier_portfolio/src/assets/logo.png" alt="Unit 7V Logo" className="w-64 h-64 opacity-50" />
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        <div className="flex items-center mb-4">
          <h1 className="text-2xl mr-4">LOADING - BOOTING SYSTEM...</h1>
          <div className="w-6 h-6 border-2 border-nier-light-text border-t-transparent rounded-full animate-spin"></div>
        </div>
        <pre className="whitespace-pre-wrap text-sm leading-relaxed">
          {typedText.split('\n').map((line: string, index: number) => (
            <div key={index}>{line}</div>
          ))}
        </pre>
      </div>

      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </div>
  );
};

export default LoadingScreen;

