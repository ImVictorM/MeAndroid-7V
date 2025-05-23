export const LoadingSpinner: React.FC<
  React.HTMLAttributes<HTMLSpanElement>
> = ({ className = "", ...rest }) => {
  return (
    <span
      {...rest}
      className={`size-(--spinner-size) rounded-full inline-block relative animate-rotate
        border-t-transparent border-(--spinner-border-color)
        border-(length:--spinner-border-size) after:content-['']
        after:size-[calc(var(--spinner-size)/2)] after:absolute after:inset-0
        after:border-t-transparent after:border-(length:--spinner-border-size)
        after:border-(--spinner-border-color) after:m-auto after:rounded-full
        after:animate-rotate-back-half after:origin-center
        [--spinner-size:--spacing(10)] [--spinner-border-color:var(--color-foreground)]
        [--spinner-border-size:3.5px] ${className}`}
    />
  );
};

export default LoadingSpinner;
