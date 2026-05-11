type PageHeroProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
};

export default function PageHero({ title, subtitle, eyebrow }: PageHeroProps) {
  return (
    <section className="relative w-full px-4 py-20 sm:py-24 text-center overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-ink-900 via-ink to-olive-deep/50"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
      />
      <div className="relative max-w-3xl mx-auto">
        {eyebrow && (
          <p className="text-gold text-xs uppercase tracking-[0.25em] mb-4">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-gold tracking-tight leading-[1.05] mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg sm:text-xl text-bone-muted leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
