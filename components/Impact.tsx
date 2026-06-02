interface ImpactItem {
  number: string;
  label: string;
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
    <section id="impact" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-teal-dark dark:text-white mb-8">Impact</h2>
        <div className="impact-scroll flex gap-5 pb-4">
          {sorted.map((item, i) => (
            <div
              key={i}
              className="min-w-[220px] max-w-[220px] bg-white dark:bg-teal-dark/50 rounded-xl p-6 border border-teal-light/30 dark:border-teal-primary/30 shrink-0"
            >
              <div className="text-3xl font-bold text-teal-accent mb-2">
                {item.number}
              </div>
              <div className="text-sm font-semibold text-teal-dark dark:text-white mb-1">
                {item.label}
              </div>
              <div className="text-xs text-gray-400">{item.org}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
