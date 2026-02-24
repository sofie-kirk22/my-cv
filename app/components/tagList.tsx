type TagListProps = {
  items: string[];
  className?: string;
};

{/* SKILLLISTS */}
export default function TagList({ items, className = "" }: TagListProps) {
  return (
    <div className={`mt-4 flex flex-wrap gap-2 text-sm ${className}`}>
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-800"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
