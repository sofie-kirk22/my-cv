type SectionHeaderProps = {
  label: string;
};

export default function SectionHeader({ label }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
        {label}
      </div>
      <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
    </div>
  );
}