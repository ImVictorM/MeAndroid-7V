import { useWindowDimensions } from "@/common/hooks/useWindowDimensions";
import { PropsWithChildren, useEffect, useRef, useState } from "react";

type AccordionItemProps = PropsWithChildren & {
  title: string;
  onToggle: () => void;
  isOpen: boolean;
  titleAs?: keyof JSX.IntrinsicElements;
};

type Item = {
  id: string | number;
  title: string;
  content: React.ReactNode | React.ReactNode[];
  titleAs?: keyof JSX.IntrinsicElements;
};

export type AccordionProps = {
  items: Item[];
  defaultActiveId?: Item["id"] | null;
  className?: string;
};

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  isOpen,
  onToggle,
  titleAs: TitleTag = "h2",
}) => {
  const [contentHeight, setContentHeight] = useState<number>(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen, width]);

  return (
    <div
      className={`flex flex-col overflow-y-hidden -mt-[1px] first:mt-0 [--padding-y:--spacing(4)]
        [--padding-x:--spacing(5)]`}
    >
      <TitleTag>
        <button
          className={`bg-card w-full flex items-center justify-start gap-2 border-[1px]
            border-primary-subtle cursor-pointer text-card-foreground px-(--padding-x)
            py-(--padding-y) ${isOpen ? "" : "border-b-0"}`}
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
        >
          <span
            className={`flex items-center justify-center size-5 border-(length:--border-size)
              ${isOpen ? "border-card-foreground" : "bg-foreground border-card-foreground text-card"}
              [--border-size:2px]`}
          >
            <span
              className={`block w-2 h-(--border-size) ${isOpen ? "bg-card-foreground" : "bg-card"} `}
            />

            {!isOpen && (
              <span className="block w-(--border-size) h-2 bg-card absolute" />
            )}
          </span>
          {title}
        </button>
      </TitleTag>

      <div
        ref={contentRef}
        className={`transition-[max-height] overflow-hidden ease-in-out bg-card text-card-foreground
          border-x border-b border-primary-subtle`}
        style={{
          maxHeight: `${contentHeight}px`,
        }}
        aria-hidden={!isOpen}
      >
        <div className="py-(--padding-y) px-(--padding-x)">{children}</div>
      </div>
    </div>
  );
};

export const Accordion: React.FC<AccordionProps> = ({
  defaultActiveId = null,
  items,
  className = "",
}) => {
  const [activeId, setActiveId] = useState<number | string | null>(
    defaultActiveId,
  );

  const handleToggle = (id: number | string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={className}>
      {items.map(({ content, title, id, titleAs }) => (
        <AccordionItem
          key={id}
          onToggle={() => handleToggle(id)}
          title={title}
          titleAs={titleAs}
          isOpen={activeId === id}
        >
          {content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
