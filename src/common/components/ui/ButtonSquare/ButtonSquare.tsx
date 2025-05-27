import { ButtonHTMLAttributes, PropsWithChildren } from "react";

export type ButtonSquareProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement>
>;

export const ButtonSquare: React.FC<ButtonSquareProps> = (props) => {
  return (
    <button
      {...props}
      className={`flex gap-2.5 group button button-option ${props.className}`}
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
