interface ImpactItem {
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
    <section id="impact" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-teal-dark mb-8">Impact</h2>
        <div className="flex flex-col gap-4">
          {sorted.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-5 bg-white rounded-lg p-5 border-l-4 border-teal-primary"
            >
              <div className="text-3xl font-bold text-teal-accent min-w-[100px] text-center shrink-0">
                {item.number}
              </div>
              <div>
                <div className="font-semibold text-teal-dark">{item.label}</div>
                <p className="text-sm mt-1">{item.description}</p>
                <p className="text-xs text-gray-400 mt-2">{item.org}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
