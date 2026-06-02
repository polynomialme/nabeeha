interface ImpactItem {
  title: string;
  number: string;
  label: string;
  description: string;
  org: string;
  date: string;
}

interface ImpactProps {
  items: ImpactItem[];
}

const cardColors = [
  { accent: "text-emerald", border: "border-emerald/30 hover:border-emerald" },
  { accent: "text-ruby", border: "border-ruby/30 hover:border-ruby" },
  { accent: "text-sapphire-light", border: "border-sapphire/30 hover:border-sapphire" },
  { accent: "text-amethyst", border: "border-amethyst/30 hover:border-amethyst" },
  { accent: "text-gold", border: "border-gold/30 hover:border-gold" },
  { accent: "text-ruby-light", border: "border-ruby/30 hover:border-ruby" },
  { accent: "text-emerald-light", border: "border-emerald/30 hover:border-emerald" },
  { accent: "text-amethyst-light", border: "border-amethyst/30 hover:border-amethyst" },
];

export default function Impact({ items }: ImpactProps) {
  const sorted = [...items].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section id="impact" className="py-20 px-6 bg-ivory dark:bg-midnight">
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-3xl font-bold text-ink dark:text-silk mb-8 italic"
          style={{ fontFamily: "var(--font-playfair), 'Times New Roman', serif" }}
        >
          Impact
        </h2>
        <div className="impact-scroll flex gap-5 pb-4">
          {sorted.map((item, i) => {
            const color = cardColors[i % cardColors.length];
            return (
              <div
                key={i}
                className={`min-w-[260px] max-w-[260px] bg-ivory-card dark:bg-midnight-card rounded-xl p-6 border ${color.border} shrink-0 transition-colors`}
              >
                <div className={`text-xs font-semibold uppercase tracking-wider ${color.accent} mb-3`}>
                  {item.title}
                </div>
                <div
                  className={`text-4xl font-bold ${color.accent} mb-1`}
                  style={{ fontFamily: "var(--font-playfair), 'Times New Roman', serif" }}
                >
                  {item.number}
                </div>
                <div className="text-sm font-medium text-ink dark:text-silk mb-3">
                  {item.label}
                </div>
                <p className="text-xs text-ink-muted dark:text-silk-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
