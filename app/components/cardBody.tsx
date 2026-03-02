import TagList from "./tagList";

type CTA = {
    label: string;
    href: string;
};

type CardBodyProps = {
    title: string;
    description: string;
    tags?: string[];
    ctas?: CTA[];
};

export default function CardBody({ title, description, tags, ctas }: CardBodyProps) {
    return (
        <div className="p-6">
            <h3 className="text-lg font-medium">{title}</h3>

            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {description}
            </p>

            {tags && tags.length > 0 && <TagList items={tags} />}

            {ctas && (
                <div className="mt-6 flex flex-col gap-3">
                    {ctas.map((cta) => (
                        <a
                            key={cta.href}
                            href={cta.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium underline transition hover:translate-x-1"
                        >
                            {cta.label} →
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}