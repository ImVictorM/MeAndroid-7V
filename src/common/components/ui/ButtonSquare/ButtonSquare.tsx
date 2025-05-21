import { ButtonHTMLAttributes, PropsWithChildren } from "react";

export type ButtonSquareProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement>
>;

export const ButtonSquare: React.FC<ButtonSquareProps> = (props) => {
  return (
    <button {...props} className={`button-square ${props.className}`}>
      <span className="square" />
      {props.children}
    </button>
  );
};

export default ButtonSquare;
