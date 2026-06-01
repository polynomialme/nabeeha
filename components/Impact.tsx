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
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-teal-dark mb-8">Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {sorted.map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-teal-accent mb-2">
                {item.number}
              </div>
              <div className="text-sm font-medium text-teal-dark mb-1">
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
