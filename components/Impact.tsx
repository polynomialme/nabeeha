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

export default function Impact({ items }: ImpactProps) {
  const sorted = [...items].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section id="impact" className="py-20 px-6 bg-cream dark:bg-navy">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-text-dark dark:text-white mb-8">Impact</h2>
        <div className="impact-scroll flex gap-5 pb-4">
          {sorted.map((item, i) => (
            <div
              key={i}
              className="min-w-[260px] max-w-[260px] bg-cream-card dark:bg-navy-card rounded-xl p-6 border border-gray-200 dark:border-purple/20 shrink-0 hover:border-purple/50 transition-colors"
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-purple mb-3">
                {item.title}
              </div>
              <div className="text-4xl font-bold text-text-dark dark:text-white mb-1">
                {item.number}
              </div>
              <div className="text-sm font-medium text-text-muted dark:text-text-dim mb-3">
                {item.label}
              </div>
              <p className="text-xs text-text-muted dark:text-text-dim leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
