import React, {
  forwardRef,
  JSX,
  PropsWithChildren,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

type AccordionItemRef = {
  getHeaderHeight: () => number;
};

type AccordionId = string | number;

type AccordionItemProps = PropsWithChildren<{
  id: AccordionId;
  title: string;
  onToggle: () => void;
  isOpen: boolean;
  titleAs?: keyof JSX.IntrinsicElements;
  minOpenHeight?: number;
  headerRef?: React.Ref<HTMLButtonElement>;
}>;

type AccordionSection = {
  id: AccordionId;
  title: string;
  content: React.ReactNode | React.ReactNode[];
  titleAs?: keyof JSX.IntrinsicElements;
};

export type AccordionRef = HTMLDivElement & {
  getHeaderTotalHeight: () => number;
};

export type AccordionProps = {
  items: AccordionSection[];
  defaultOpenId?: AccordionId | null;
  minOpenHeight?: number;
  className?: string;
};

const AccordionItem = forwardRef<AccordionItemRef, AccordionItemProps>(
  (
    {
      id,
      title,
      children,
      isOpen,
      minOpenHeight,
      onToggle,
      titleAs: TitleTag = "h2",
    },
    ref,
  ) => {
    const [contentHeight, setContentHeight] = useState<number>(0);
    const [minContentHeight, setMinContentHeight] = useState<number>(0);
    const contentRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLButtonElement>(null);
    const accordionContentContainerId = `accordion-item-${id}`;

    useEffect(() => {
      if (!contentRef.current) return;

      const naturalHeight = contentRef.current.offsetHeight;

      const min =
        minOpenHeight && minOpenHeight > naturalHeight
          ? minOpenHeight
          : naturalHeight;

      setMinContentHeight(min);
    }, [minOpenHeight]);

    useLayoutEffect(() => {
      if (!contentRef.current) return;

      const observer = new ResizeObserver(() => {
        const element = contentRef.current as HTMLDivElement;
        setContentHeight(element.offsetHeight);
      });

      observer.observe(contentRef.current);

      return () => observer.disconnect();
    }, []);

    useImperativeHandle(
      ref,
      () => ({
        getHeaderHeight: () => headerRef.current?.offsetHeight || 0,
      }),
      [],
    );

    return (
      <section
        className="flex flex-col -mt-[1px] first:mt-0 [--padding-y:--spacing(4)]
          [--padding-x:--spacing(5)]"
      >
        <TitleTag className="relative z-10 focus-within:z-20">
          <button
            ref={headerRef}
            className={`bg-card w-full flex items-center justify-start gap-2 border-[1px]
              border-primary-subtle cursor-pointer text-card-foreground px-(--padding-x)
              py-(--padding-y) ${isOpen ? "" : "border-b-0"}`}
            type="button"
            onClick={onToggle}
            aria-expanded={isOpen}
            aria-controls={accordionContentContainerId}
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
          id={accordionContentContainerId}
          className={`flex flex-col overflow-y-hidden ease-in-out bg-card z-10 text-card-foreground
            border-x border-b border-primary-subtle motion-safe:transition-all
            motion-safe:duration-300`}
          style={{
            minHeight: isOpen ? `${minContentHeight}px` : "0px",
            height: isOpen ? `${contentHeight}px` : "0px",
          }}
          aria-hidden={!isOpen}
          inert={!isOpen}
        >
          <div className="py-(--padding-y) px-(--padding-x)" ref={contentRef}>
            {children}
          </div>
        </div>
      </section>
    );
  },
);

const Accordion = forwardRef<AccordionRef, AccordionProps>(
  ({ defaultOpenId = null, items, minOpenHeight }, ref) => {
    const [openId, setOpenId] = useState<AccordionId | null>(defaultOpenId);
    const containerRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<Map<AccordionId, AccordionItemRef>>(new Map());

    useImperativeHandle(ref, () => {
      return Object.assign(containerRef.current ?? ({} as HTMLDivElement), {
        getHeaderTotalHeight: () => {
          let total = 0;
          itemRefs.current.forEach((item) => {
            total += item.getHeaderHeight();
          });
          return total;
        },
      });
    }, []);

    const handleToggle = (id: AccordionId) => {
      setOpenId((prev) => (prev === id ? null : id));
    };

    return (
      <div ref={containerRef}>
        {items.map(({ id, title, content, titleAs }) => (
          <AccordionItem
            key={id}
            id={id}
            title={title}
            titleAs={titleAs}
            isOpen={openId === id}
            minOpenHeight={minOpenHeight}
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
