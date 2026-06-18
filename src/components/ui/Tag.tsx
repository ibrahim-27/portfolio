interface TagProps {
  text: string;
  variant: "skill" | "project" | "timeline";
}

const Tag = ({ text, variant }: TagProps) => {
  const base = "px-3 py-1 text-xs font-semibold md:text-sm select-none transition-all duration-300";
  const styles = {
    skill: "text-center rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20 hover:bg-[var(--color-accent)]/20 hover:scale-105 hover:-translate-y-0.5",
    project: "rounded-md bg-[var(--color-bg)] text-[var(--color-accent)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/30",
    timeline: "rounded-full bg-[var(--color-border)]/50 text-[var(--text-secondary)] border border-[var(--color-border)] shrink-0 self-start md:self-auto",
  };

  return <span className={`${base} ${styles[variant]}`}>{text}</span>;
};

export default Tag;
