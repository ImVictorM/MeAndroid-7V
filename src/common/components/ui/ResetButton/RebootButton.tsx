import { useNavigate } from "react-router";

export const RebootButton: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <button
      className="group flex flex-col border border-primary-subtle bg-primary/20 size-20 p-1
        cursor-pointer shadow-md"
      type="button"
      title="reboot system"
      onClick={handleClick}
    >
      <div className="flex items-center justify-center relative grow">
        <div className="flex flex-row justify-between absolute top-0 inset-x-0">
          <div className="size-1 rounded bg-foreground"></div>
          <div className="size-1 rounded bg-foreground"></div>
        </div>

        <div className="size-15 shadow-lg flex group-active:scale-96">
          <div
            className="bg-primary-foreground flex flex-col grow-1 justify-center py-1.5 items-center
              border-1 gap-0.5 border-primary-foreground-subtle rounded"
          >
            <div className="h-full bg-primary w-1 rounded"></div>
            <span className="text-primary text-xs uppercase">Reboot</span>
          </div>
        </div>

        <div className="flex flex-row justify-between absolute bottom-0 inset-x-0">
          <div className="size-1 rounded bg-foreground"></div>
          <div className="size-1 rounded bg-foreground"></div>
        </div>
      </div>
    </button>
  );
};

export default RebootButton;
