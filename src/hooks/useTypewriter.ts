import { useState, useEffect } from "react";

export const useTypewriter = (
  lines: string[],
  typingDelay: number = 10,
  changeLineDelay: number = 5,
  delayBeforeTypingIsComplete: number = 500,
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
      const typingInterval = setInterval(() => {
        setDisplayLines((prev) => {
          if (!prev[currentLineIndex]) {
            return [...prev, currentLine[currentCharIndex]];
          }

          return prev.map((line, index) =>
            index === currentLineIndex
              ? currentLine.substring(0, currentCharIndex + 1)
              : line,
          );
        });

        setCurrentCharIndex((prev) => prev + 1);
      }, typingDelay);

      return () => clearInterval(typingInterval);
    }

    const nextLineTimeout = setTimeout(() => {
      setCurrentLineIndex((prev) => prev + 1);
      setCurrentCharIndex(0);
    }, changeLineDelay);

    return () => clearTimeout(nextLineTimeout);
  }, [currentCharIndex, currentLineIndex, changeLineDelay, lines, typingDelay]);

  useEffect(() => {
    const isLastLine = currentLineIndex === lines.length - 1;
    const isLastCharacter =
      currentCharIndex === lines[currentLineIndex]?.length - 1;

    if (isLastLine && isLastCharacter) {
      const onCompleteTimeout = setTimeout(() => {
        setIsTypingComplete(true);
      }, delayBeforeTypingIsComplete);

      return () => clearTimeout(onCompleteTimeout);
    }
  }, [currentCharIndex, currentLineIndex, delayBeforeTypingIsComplete, lines]);

  return { displayLines, isTypingComplete };
};
