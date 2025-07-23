import { TypewriterOptions, useTypewriter } from "@/common/hooks/useTypewriter";
import { normalizeWhitespaces } from "@/common/utils/normalization";
import { useEffect, useMemo, type JSX } from "react";

type TypewriterProps = {
  as?: keyof JSX.IntrinsicElements;
  content: string[] | string;
  options?: TypewriterOptions;
  onComplete?: () => void;
  showCursor?: boolean;
};

const Typewriter: React.FC<TypewriterProps> = ({
  as: Tag = "p",
  content,
  options,
  onComplete,
  showCursor = true,
}) => {
  const normalizedLines = useMemo(() => {
    return Array.isArray(content)
      ? content.map(normalizeWhitespaces)
      : [normalizeWhitespaces(content)];
  }, [content]);

  const { displayLines, isTypingComplete } = useTypewriter(
    normalizedLines,
    options,
  );

  useEffect(() => {
    if (isTypingComplete && onComplete) {
      onComplete();
    }
  }, [isTypingComplete, onComplete]);

  return displayLines.map((line, index) => (
    <Tag
      key={index}
      className={
        showCursor
          ? `last:after:content-[''] last:after:bg-foreground last:after:w-[0.1em]
            last:after:h-[1lh] last:after:inline-block last:after:align-bottom
            motion-safe:last:after:animate-cursor-blink`
          : ""
      }
    >
      {line}
    </Tag>
  ));
};

export default Typewriter;
