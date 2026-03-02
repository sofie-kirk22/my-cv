type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        underline underline-offset-2
        transition
        hover:text-black dark:hover:text-white
      "
    >
      {children}
    </a>
  );
}