interface ExperienceItem {
  title: string;
  org: string;
  location: string;
  startDate: string;
  endDate: string | null;
  bullets: string[];
}

interface ExperienceProps {
  items: ExperienceItem[];
}

function formatDate(date: string | null): string {
  if (!date) return "Present";
  const [year, month] = date.split("-");
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${months[parseInt(month) - 1]} ${year}`;
}

function sortByDate(a: ExperienceItem, b: ExperienceItem): number {
  const aEnd = a.endDate ? new Date(a.endDate).getTime() : Date.now();
  const bEnd = b.endDate ? new Date(b.endDate).getTime() : Date.now();
  if (bEnd !== aEnd) return bEnd - aEnd;
  return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
}

function ExperienceEntry({ item }: { item: ExperienceItem }) {
  return (
    <div className="relative pl-6 pb-8 border-l-2 border-teal-light last:pb-0">
      <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-teal-primary" />
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
        <h3 className="font-semibold text-teal-dark">{item.title}</h3>
        <span className="text-sm text-gray-400 shrink-0">
          {formatDate(item.startDate)} – {formatDate(item.endDate)}
        </span>
      </div>
      <p className="text-sm text-teal-primary mb-2">
        {item.org} · {item.location}
      </p>
      <ul className="list-disc list-outside ml-4 space-y-1">
        {item.bullets.map((bullet, i) => (
          <li key={i} className="text-sm leading-relaxed">
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience({ items }: ExperienceProps) {
  const sorted = [...items].sort(sortByDate);

  return (
    <section id="experience" className="py-20 px-6 bg-teal-bg">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-teal-dark mb-8">Experience</h2>
        <div>
          {sorted.map((item, i) => (
            <ExperienceEntry key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
