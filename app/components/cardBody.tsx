import TagList from "./tagList";

type CardBodyProps = {
  title: string;
  description: string;
  tags?: string[];
  cta: string;
};

export default function CardBody({ title, description, tags, cta }: CardBodyProps) {
  return (
    <div className="p-6">
      <h3 className="text-lg font-medium">{title}</h3>

      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {description}
      </p>

      {tags && tags.length > 0 && <TagList items={tags} />}

      <span className="mt-4 inline-block text-sm font-medium underline transition group-hover:translate-x-1">
        {cta} →
      </span>
    </div>
  );
}