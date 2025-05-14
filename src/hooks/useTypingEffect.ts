import { useState, useEffect } from 'react';

/**
 * Custom hook for creating a typing effect for a single string or an array of strings.
 * @param text The string or array of strings to type out.
 * @param speed The typing speed in milliseconds per character (default: 50).
 * @param lineDelay The delay in milliseconds before starting the next line (default: 300).
 * @returns The currently displayed text.
 */
export const useTypingEffect = (
  text: string | string[],
  speed: number = 50,
  lineDelay: number = 300
): string => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentLineIndex, setCurrentLineIndex] = useState<number>(0);

  const lines = Array.isArray(text) ? text : [text];

  useEffect(() => {
    if (currentLineIndex >= lines.length) {
      return; // All lines finished
    }

    const currentLine = lines[currentLineIndex];

    // Handle delay before starting a new line (except the first line)
    if (currentIndex === 0 && currentLineIndex > 0) {
      const delayTimeout = setTimeout(() => {
        const typingInterval = setInterval(() => {
          setDisplayedText((prev) => prev + currentLine[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, speed);

        // Store interval ID to clear it later
        // This part needs refinement to properly clear interval when component unmounts or text changes
        // For now, relying on the dependency array to reset effect
        return () => clearInterval(typingInterval);
      }, lineDelay);
      return () => clearTimeout(delayTimeout);
    }

    // Typing effect for the current line
    if (currentIndex < currentLine.length) {
      const typingInterval = setInterval(() => {
        setDisplayedText((prev) => prev + currentLine[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearInterval(typingInterval);
    } else {
      // Move to the next line after a delay
      const nextLineTimeout = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentIndex(0);
        // Add newline character if not the last line
        if (currentLineIndex < lines.length - 1) {
          setDisplayedText((prev) => prev + '\n');
        }
      }, lineDelay);
      return () => clearTimeout(nextLineTimeout);
    }

  // Reset effect if text, speed, or lineDelay changes
  // Reset displayed text and indices when text changes
  }, [currentIndex, currentLineIndex, lines, speed, lineDelay, text]);

  // Reset when text changes
  useEffect(() => {
    setDisplayedText('');
    setCurrentIndex(0);
    setCurrentLineIndex(0);
  }, [text]);

  // Use white-space: pre-wrap in CSS to render newlines
  return displayedText;
};

