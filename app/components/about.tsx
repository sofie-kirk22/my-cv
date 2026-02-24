"use client";

type AboutParagraph = {
  id: string;
  text: string;
};

type AboutSectionProps = {
  paragraphs: AboutParagraph[];
  title?: string;
};

const paragraphClass =
  "text-zinc-600 dark:text-zinc-400 leading-relaxed";

export default function AboutSection({
  paragraphs,
  title = "About me",
}: AboutSectionProps) {
  return (
    <section id="about" className="space-y-4">
      <h2 className="text-3xl font-semibold">{title}</h2>

      {paragraphs.map(({ id, text }) => (
        <p key={id} className={paragraphClass}>
          {text}
        </p>
      ))}
    </section>
  );
}
