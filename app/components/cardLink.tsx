type CardLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function CardLink({ href, children }: CardLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-2xl border border-zinc-200 transition hover:border-black dark:border-zinc-800 dark:hover:border-white"
    >
      {children}
    </a>
  );
}