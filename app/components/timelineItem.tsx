import TagList from "./tagList";

type TimelineItemProps = {
  title: string;
  period: string;
  bullets: string[];
  tags?: string[];
  tagHeader?: string;
  collapsibleTags?: boolean;
  initialVisibleTags?: number;
};

export default function TimelineItem({
  title,
  period,
  bullets,
  tags,
  tagHeader,
  collapsibleTags = false,
  initialVisibleTags = 3,
}: TimelineItemProps) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-xl font-medium">{title}</h3>
        <p className="text-sm text-zinc-500">{period}</p>

        <ul className="mt-3 list-disc space-y-2 pl-6 text-zinc-600 dark:text-zinc-400">
          {bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>

        {tags && (
          <div className="pt-6">
            {tagHeader && (
              <h4 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                {tagHeader}
              </h4>
            )}

            <TagList
              items={tags}
              collapsible={collapsibleTags}
              initialVisible={initialVisibleTags}
            />
          </div>
        )}
      </div>
    </div>
  );
}