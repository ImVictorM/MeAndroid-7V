import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline"; // Add more variants if needed
  size?: "default" | "sm"; // Add size prop
}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant = "default",
  size = "default", // Default size
  children,
  ...props
}) => {
  // Base styles adjusted for size
  const sizeStyles = {
    default: "px-4 py-2 text-sm",
    sm: "px-2 py-1 text-xs", // Smaller padding and text for 'sm'
  };

  const baseStyle =
    "border transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = {
    default: `
      bg-nier-light-highlight-bg text-nier-dark-text
      dark:bg-nier-dark-hover-bg dark:text-nier-dark-highlight-text
      border-nier-light-border dark:border-nier-dark-border
      hover:bg-nier-light-hover-bg dark:hover:bg-opacity-80
      focus:ring-nier-light-text dark:focus:ring-nier-dark-highlight-text
    `,
    outline: `
      bg-transparent border-nier-light-border dark:border-nier-dark-border
      text-nier-light-text dark:text-nier-dark-text
      hover:bg-nier-light-hover-bg dark:hover:bg-nier-dark-hover-bg
      focus:ring-nier-light-text dark:focus:ring-nier-dark-highlight-text
    `,
  };

  return (
    <button
      className="baseStyle, sizeStyles[size], variantStyles[variant], className"
      {...props}
    >
      {children}
    </button>
  );
};
