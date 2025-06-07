import React, {
  forwardRef,
  JSX,
  PropsWithChildren,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { useWindowDimensions } from "@/common/hooks/useWindowDimensions";

type AccordionItemRef = {
  getContentHeight: () => number;
};

type AccordionItemProps = PropsWithChildren<{
  title: string;
  onToggle: () => void;
  isOpen: boolean;
  titleAs?: keyof JSX.IntrinsicElements;
  openHeight?: number;
}>;

type AccordionSectionId = string | number;

type AccordionSection = {
  id: AccordionSectionId;
  title: string;
  content: React.ReactNode | React.ReactNode[];
  titleAs?: keyof JSX.IntrinsicElements;
};

export type AccordionRef = HTMLDivElement & {
  getOpenItemHeight: () => number;
};

export type AccordionProps = {
  items: AccordionSection[];
  defaultOpenId?: AccordionSectionId | null;
  openHeight?: number;
  className?: string;
};

const AccordionItem = forwardRef<AccordionItemRef, AccordionItemProps>(
  (
    { title, children, isOpen, openHeight, onToggle, titleAs: TitleTag = "h2" },
    ref,
  ) => {
    const [contentHeight, setContentHeight] = useState<number>(0);
    const contentRef = useRef<HTMLDivElement>(null);
    const { width } = useWindowDimensions();

    useEffect(() => {
      if (!contentRef.current) {
        return;
      }

      if (isOpen) {
        setContentHeight(openHeight ?? contentRef.current.scrollHeight);
      } else {
        setContentHeight(0);
      }
    }, [width, isOpen, openHeight]);

    useImperativeHandle(
      ref,
      () => ({
        getContentHeight: () => contentHeight,
      }),
      [contentHeight],
    );

    return (
      <div
        className="flex flex-col overflow-y-hidden -mt-[1px] first:mt-0 [--padding-y:--spacing(4)]
          [--padding-x:--spacing(5)]"
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
                className={`block w-2 h-(--border-size) ${isOpen ? "bg-card-foreground" : "bg-card"}`}
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
          className={`flex flex-col transition-[height] duration-300 overflow-hidden ease-in-out
            bg-card text-card-foreground border-x border-b border-primary-subtle`}
          style={{ height: `${contentHeight}px` }}
          aria-hidden={!isOpen}
        >
          <div className="py-(--padding-y) px-(--padding-x)">{children}</div>
        </div>
      </div>
    );
  },
);

const Accordion = forwardRef<AccordionRef, AccordionProps>(
  ({ defaultOpenId = null, items, openHeight, className = "" }, ref) => {
    const [openId, setOpenId] = useState<AccordionSectionId | null>(
      defaultOpenId,
    );
    const containerRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<Map<AccordionSectionId, AccordionItemRef>>(
      new Map(),
    );

    useImperativeHandle(ref, () => {
      return Object.assign(containerRef.current ?? ({} as HTMLDivElement), {
        getOpenItemHeight: () => {
          if (!openId) return 0;
          const itemRef = itemRefs.current.get(openId);
          return itemRef?.getContentHeight() ?? 0;
        },
      });
    }, [openId]);

    const handleToggle = (id: AccordionSectionId) => {
      setOpenId((prev) => (prev === id ? null : id));
    };

    return (
      <div ref={containerRef} className={`${className}`}>
        {items.map(({ id, title, content, titleAs }) => (
          <AccordionItem
            key={id}
            title={title}
            titleAs={titleAs}
            isOpen={openId === id}
            openHeight={openHeight}
            onToggle={() => handleToggle(id)}
            ref={(el) => {
              if (el) {
                itemRefs.current.set(id, el);
              } else {
                itemRefs.current.delete(id);
              }
            }}
          >
            {content}
          </AccordionItem>
        ))}
      </div>
    );
  },
);

export default Accordion;
