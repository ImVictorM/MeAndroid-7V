import { useState, useEffect, useRef } from "react";

export type TypewriterOptions = {
  typingDelay?: number;
  changeLineDelay?: number;
  delayToComplete?: number;
  forceComplete?: boolean;
};

const defaultOptions: TypewriterOptions = {
  typingDelay: 10,
  changeLineDelay: 5,
  delayToComplete: 0,
  forceComplete: false,
};

export const useTypewriter = (
  lines: string[],
  {
    changeLineDelay = defaultOptions.changeLineDelay,
    delayToComplete = defaultOptions.delayToComplete,
    typingDelay = defaultOptions.typingDelay,
    forceComplete = defaultOptions.forceComplete,
  }: TypewriterOptions = defaultOptions,
) => {
  const [displayLines, setDisplayLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState<number>(0);
  const [currentCharIndex, setCurrentCharIndex] = useState<number>(0);
  const [isTypingComplete, setIsTypingComplete] = useState<boolean>(false);
  const nextLineTimeoutRef = useRef<NodeJS.Timeout>(null);
  const nextCharIntervalRef = useRef<NodeJS.Timeout>(null);
  const onCompleteTimeoutRef = useRef<NodeJS.Timeout>(null);
  const completeHandledRef = useRef<boolean>(false);

  useEffect(() => {
    // Handle force complete
    if (forceComplete && !completeHandledRef.current) {
      completeHandledRef.current = true;
      setDisplayLines(lines);

      onCompleteTimeoutRef.current = setTimeout(() => {
        setIsTypingComplete(true);
      }, delayToComplete);

      return () => {
        if (nextLineTimeoutRef.current)
          clearTimeout(nextLineTimeoutRef.current);

        if (nextCharIntervalRef.current)
          clearInterval(nextCharIntervalRef.current);

        if (onCompleteTimeoutRef.current)
          clearTimeout(onCompleteTimeoutRef.current);
      };
    }

    // Handle typing complete
    if (currentLineIndex >= lines.length) {
      onCompleteTimeoutRef.current = setTimeout(() => {
        setIsTypingComplete(true);
      }, delayToComplete);

      return () => {
        if (onCompleteTimeoutRef.current) {
          clearTimeout(onCompleteTimeoutRef.current);
        }
      };
    }

    const currentLine = lines[currentLineIndex];

    // Handle current character change
    if (currentCharIndex < currentLine.length) {
      nextCharIntervalRef.current = setInterval(() => {
        setDisplayLines((prev) => {
          const updatedDisplayLines = [...prev];

          const currentLineContent = lines[currentLineIndex].substring(
            0,
            currentCharIndex + 1,
          );

          updatedDisplayLines[currentLineIndex] = currentLineContent;

          return updatedDisplayLines;
        });

        setCurrentCharIndex((prev) => prev + 1);
      }, typingDelay);

      return () => {
        if (nextCharIntervalRef.current) {
          clearInterval(nextCharIntervalRef.current);
        }
      };
    }

    // Handle next line change
    nextLineTimeoutRef.current = setTimeout(() => {
      setCurrentLineIndex((prev) => prev + 1);
      setCurrentCharIndex(0);
    }, changeLineDelay);

    return () => {
      if (nextLineTimeoutRef.current) {
        clearTimeout(nextLineTimeoutRef.current);
      }
    };
  }, [
    changeLineDelay,
    delayToComplete,
    lines,
    forceComplete,
    typingDelay,
    currentCharIndex,
    currentLineIndex,
  ]);

  return { displayLines, isTypingComplete };
};
