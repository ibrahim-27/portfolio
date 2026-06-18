import ContentSection from "./ContentSection";
import PersonalInfoSection from "./PersonalInfoSection";
import ThemePicker from "./ThemePicker";
import { useThemeStore } from "../store/themeStore";

const ResumeLayout = () => {
    const { theme } = useThemeStore();
    return (
        <div data-theme={theme} className={`theme-${theme} grid grid-cols-1 min-h-screen md:grid-cols-4 transition-colors duration-300`}>
            <ThemePicker />
            <div className="bg-[var(--color-card)] border-r border-[var(--color-border)] md:col-span-1 md:h-screen md:sticky top-0 transition-colors duration-300 overflow-y-auto">
                <PersonalInfoSection />
            </div>
            <div className="bg-[var(--color-bg)] overflow-y-auto md:col-span-3 transition-colors duration-300">
                <ContentSection />
            </div>
        </div>
    )
};

export default ResumeLayout;