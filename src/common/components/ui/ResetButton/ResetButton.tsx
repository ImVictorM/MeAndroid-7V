export const ResetButton: React.FC = () => {
  return (
    <button
      className="flex flex-col border border-primary-subtle bg-black/7 size-20 p-1 cursor-pointer
        shadow-md"
      type="button"
      title="reset"
    >
      <div className="flex items-center justify-center relative grow">
        <div className="flex flex-row justify-between absolute top-0 inset-x-0">
          <div className="size-1 rounded bg-foreground"></div>
          <div className="size-1 rounded bg-foreground"></div>
        </div>

        <div
          className="bg-primary-foreground border-2 border-primary-foreground-subtle size-15 rounded
            shadow-lg flex flex-col items-center justify-center py-1.5 gap-0.5"
        >
          <div className="h-full bg-primary w-1 rounded"></div>
          <span className="text-primary text-xs uppercase">Reset</span>
        </div>

        <div className="flex flex-row justify-between absolute bottom-0 inset-x-0">
          <div className="size-1 rounded bg-foreground"></div>
          <div className="size-1 rounded bg-foreground"></div>
        </div>
      </div>
    </button>
  );
};

export default ResetButton;
