import useAppDispatch from "@/common/hooks/useAppDispatch";
import useAppSelector from "@/common/hooks/useAppSelector";
import { selectTheme, toggleTheme } from "@/common/store/theme/themeSlice";

export const ThemeSwitch: React.FC = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <button
      className="cursor-pointer border-1 bg-primary-foreground border-primary-foreground-subtle
        p-(--switch-padding) shadow-sm [--switch-padding:--spacing(0.8)]"
      type="button"
      onClick={handleToggleTheme}
      aria-label="toggle theme"
      title="toggle theme"
    >
      <div
        className="flex items-center relative w-(--switch-inner-size) h-[25px]
          [--switch-inner-size:70px] [--switch-inner-slider-size:25px]"
      >
        <div
          className={`absolute top-0 left-0 h-full w-(--switch-inner-slider-size) bg-primary border-2
            border-primary-subtle
            ${theme === "dark" ? "translate-x-[calc(var(--switch-inner-size)-var(--switch-inner-slider-size))]" : "translate-x-0"}
            motion-safe:transition-transform`}
        ></div>

        <div
          className={`w-full text-xs text-primary
            ${theme === "dark" ? "mr-(--switch-inner-slider-size) pr-(--switch-padding)" : "ml-(--switch-inner-slider-size) pl-(--switch-padding)"}`}
        >
          <span className="uppercase text-bold">{theme}</span>
        </div>
      </div>
    </button>
  );
};

export default ThemeSwitch;
