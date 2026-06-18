import { useThemeStore } from "../store/themeStore";

const ThemePicker = () => {
  const themes = ["dark-green", "blue", "purple", "orange", "teal"];
  const { theme: activeTheme, setTheme } = useThemeStore();

  return (
    <div className="absolute top-4 right-4 z-50 flex items-center gap-2.5 px-3 py-2 rounded-full bg-[var(--color-card)]/80 backdrop-blur-md border border-[var(--color-border)] shadow-lg shadow-black/10 transition-all duration-300">
      <span className="text-[10px] uppercase tracking-wider font-bold text-[var(--text-muted)] mr-1 select-none hidden sm:inline">
        Theme:
      </span>
      <div className="flex gap-2">
        {themes.map((theme, idx) => {
          const isActive = activeTheme === theme;
          return (
            <button
              key={idx}
              style={{ backgroundColor: `var(--accent-${theme})` }}
              className={`w-5 h-5 rounded-full cursor-pointer transition-all duration-300 relative group
                ${isActive 
                  ? "scale-115 ring-2 ring-[var(--color-accent)] ring-offset-2 ring-offset-[var(--color-bg)]" 
                  : "hover:scale-110 opacity-70 hover:opacity-100"
                }
              `}
              title={`${theme.charAt(0).toUpperCase() + theme.slice(1).replace("-", " ")} Theme`}
              onClick={() => setTheme(theme)}
              aria-label={`Switch to ${theme.replace("-", " ")} theme`}
            >
              {/* Tooltip */}
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-[10px] font-medium text-[var(--text-primary)] bg-[var(--color-card)] border border-[var(--color-border)] rounded-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-md whitespace-nowrap">
                {theme.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ThemePicker;
