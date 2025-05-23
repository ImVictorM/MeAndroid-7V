import { ButtonHTMLAttributes, PropsWithChildren } from "react";

export type ButtonSquareProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement>
>;

export const ButtonSquare: React.FC<ButtonSquareProps> = (props) => {
  return (
    <button
      {...props}
      className={`button-square flex gap-2.5 bg-primary text-primary-foreground px-3 py-1.5
        text-start leading-tight border-b-1 border-r-1 border-border shadow-sm
        transition-transform duration-200 ease-in-out hover:bg-primary-foreground
        hover:text-card hover:cursor-pointer hover:-translate-x-3 group
        ${props.className}`}
    >
      <span
        className="min-w-[1lh] size-[1lh] flex flex-col justify-center before:content-['']
          before:min-w-[1em] before:inline-block before:bg-primary-foreground
          before:self-baseline before:size-[1em] group-hover:before:bg-card"
      />
      {props.children}
    </button>
  );
};

export default ButtonSquare;
