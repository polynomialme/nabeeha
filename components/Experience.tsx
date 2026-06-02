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
  return org.split(/[\s-]+/).filter(w => w.length > 2).map(w => w[0]).slice(0, 2).join("").toUpperCase();
}

const dotColors = [
  "bg-emerald border-emerald",
  "bg-ruby border-ruby",
  "bg-sapphire-light border-sapphire",
  "bg-amethyst border-amethyst",
  "bg-gold border-gold",
];

function ExperienceCard({ item, index }: { item: ExperienceItem; index: number }) {
  const isLeft = index % 2 === 0;
  const dotColor = dotColors[index % dotColors.length];

  const card = (
    <div className="bg-ivory-card dark:bg-midnight-card rounded-xl p-6 border border-gray-200 dark:border-silk-muted/10">
      <h3 className="font-bold text-ink dark:text-silk text-xl mb-1">
        {item.title}
      </h3>
      <p className="text-sm text-emerald dark:text-emerald-light italic mb-3">{item.org}</p>
      <ul className="list-disc list-outside ml-4 space-y-2">
        {item.bullets.map((bullet, i) => (
          <li key={i} className="text-sm leading-relaxed text-ink-muted dark:text-silk-muted">
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );

  const date = (
    <div className="flex items-center h-full pt-4">
      <span className="text-sm text-ink-muted dark:text-silk-muted italic">
        {formatDate(item.startDate)} – {formatDate(item.endDate)}
      </span>
    </div>
  );

  return (
    <div className="relative flex items-start md:items-center">
      {/* Mobile layout */}
      <div className="md:hidden w-full pl-12">
        <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-gold/20" />
        <div className={`absolute left-[10px] top-6 w-5 h-5 rounded-full ${dotColor} border-4 border-ivory dark:border-midnight z-10`} />
        <div className="text-xs text-ink-muted dark:text-silk-muted italic mb-2">
          {formatDate(item.startDate)} – {formatDate(item.endDate)}
        </div>
        {card}
      </div>

      {/* Desktop alternating layout */}
      <div className="hidden md:grid md:grid-cols-[1fr_60px_1fr] w-full items-start">
        <div className={isLeft ? "pr-8" : "flex justify-end pr-8"}>
          {isLeft ? card : date}
        </div>

        <div className="flex flex-col items-center relative">
          <div className="absolute top-0 bottom-0 w-[2px] bg-gold/20" />
          <div className={`relative z-10 w-10 h-10 rounded-full ${dotColor} flex items-center justify-center text-white text-xs font-bold mt-4 border-4 border-ivory dark:border-midnight`}>
            {getInitials(item.org)}
          </div>
        </div>

        <div className={!isLeft ? "pl-8" : "pl-8"}>
          {!isLeft ? card : date}
        </div>
      </div>
    </div>
  );
}

export default function Experience({ items }: ExperienceProps) {
  const sorted = [...items].sort(sortByDate);

  return (
    <section id="experience" className="py-20 px-6 bg-ivory dark:bg-midnight">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-ink dark:text-silk mb-10 text-center">
          Experience
        </h2>
        <div className="space-y-8">
          {sorted.map((item, i) => (
            <ExperienceCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
