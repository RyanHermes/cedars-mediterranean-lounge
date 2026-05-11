import Link from "next/link";

type CardProps = {
  href: string;
  title: string;
  tagline?: string;
  cta?: string;
  children: React.ReactNode;
};

export default function Card({
  href,
  title,
  tagline,
  cta = "Read more",
  children,
}: CardProps) {
  return (
    <Link
      href={href}
      className="group block flex-1 basis-72 max-w-md bg-ink-900 p-8 rounded-2xl ring-1 ring-bone/10 hover:ring-gold/40 hover:bg-ink-800 transition-all duration-300 hover:shadow-glow"
    >
      <h3 className="font-display text-2xl text-gold mb-2 tracking-tight">
        {title}
      </h3>
      {tagline && <p className="text-bone-muted text-sm mb-4">{tagline}</p>}
      <p className="text-bone leading-relaxed mb-6">{children}</p>
      <p className="text-gold text-sm font-medium group-hover:text-gold-hover transition-colors">
        {cta}{" "}
        <span
          aria-hidden
          className="inline-block transition-transform group-hover:translate-x-1"
        >
          →
        </span>
      </p>
    </Link>
  );
}
