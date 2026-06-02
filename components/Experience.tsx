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

function getInitials(org: string): string {
  return org.split(/[\s-]+/).filter(w => w.length > 2).slice(0, 2).map(w => w[0]).join("").toUpperCase();
}

function ExperienceEntry({ item }: { item: ExperienceItem }) {
  return (
    <div className="relative pl-16 pb-10 last:pb-0">
      {/* Timeline line */}
      <div className="absolute left-[19px] top-10 bottom-0 w-[2px] bg-teal-light/50 dark:bg-teal-primary/30" />
      {/* Logo circle */}
      <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-teal-primary dark:bg-teal-accent/20 flex items-center justify-center text-white dark:text-teal-accent text-xs font-bold">
        {getInitials(item.org)}
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
        <h3 className="font-semibold text-teal-dark dark:text-white">{item.title}</h3>
        <span className="text-sm text-gray-400 shrink-0">
          {formatDate(item.startDate)} – {formatDate(item.endDate)}
        </span>
      </div>
      <p className="text-sm text-teal-primary dark:text-teal-accent mb-2">
        {item.org} · {item.location}
      </p>
      <ul className="list-disc list-outside ml-4 space-y-1">
        {item.bullets.map((bullet, i) => (
          <li key={i} className="text-sm leading-relaxed dark:text-gray-300">
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
    <section id="experience" className="py-20 px-6 bg-teal-bg dark:bg-[#0F1A1F]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-teal-dark dark:text-white mb-8">Experience</h2>
        <div>
          {sorted.map((item, i) => (
            <ExperienceEntry key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
