import { useState, useEffect } from "react";

export type TypewriterOptions = {
  typingDelay?: number;
  changeLineDelay?: number;
  delayToComplete?: number;
};

const defaultOptions: TypewriterOptions = {
  typingDelay: 10,
  changeLineDelay: 5,
  delayToComplete: 0,
};

export const useTypewriter = (
  lines: string[],
  {
    changeLineDelay = defaultOptions.changeLineDelay,
    delayToComplete = defaultOptions.delayToComplete,
    typingDelay = defaultOptions.typingDelay,
  }: TypewriterOptions = defaultOptions,
) => {
  const [displayLines, setDisplayLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState<number>(0);
  const [currentCharIndex, setCurrentCharIndex] = useState<number>(0);
  const [isTypingComplete, setIsTypingComplete] = useState<boolean>(false);

  useEffect(() => {
    if (currentLineIndex >= lines.length) {
      return;
    }

    const currentLine = lines[currentLineIndex];

    if (currentCharIndex < currentLine.length) {
      const typingTimeout = setInterval(() => {
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

      return () => clearInterval(typingTimeout);
    }

    const nextLineTimeout = setTimeout(() => {
      setCurrentLineIndex((prev) => prev + 1);
      setCurrentCharIndex(0);
    }, changeLineDelay);

    return () => clearTimeout(nextLineTimeout);
  }, [currentCharIndex, currentLineIndex, lines, changeLineDelay, typingDelay]);

  useEffect(() => {
    if (!lines[currentLineIndex]) {
      const onCompleteTimeout = setTimeout(() => {
        setIsTypingComplete(true);
      }, delayToComplete);

      return () => clearTimeout(onCompleteTimeout);
    }
  }, [currentLineIndex, delayToComplete, lines]);

  return { displayLines, isTypingComplete };
};
