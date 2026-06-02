import { ExternalLink } from "lucide-react";

interface ExperienceItem {
  title: string;
  org: string;
  logo?: string | null;
  link?: string | null;
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

function LogoOrInitials({ item, size = 40 }: { item: ExperienceItem; size?: number }) {
  if (item.logo) {
    return (
      /* eslint-disable-next-line @next/next/no-img-element */
      <img
        src={item.logo}
        alt={item.org}
        className="rounded-full object-contain bg-white"
        style={{ width: size, height: size }}
      />
    );
  }
  return (
    <div
      className="rounded-full bg-sapphire flex items-center justify-center text-white text-xs font-bold"
      style={{ width: size, height: size }}
    >
      {getInitials(item.org)}
    </div>
  );
}

function ExperienceCard({ item, index }: { item: ExperienceItem; index: number }) {
  const isLeft = index % 2 === 0;

  const card = (
    <div className="bg-ivory-card dark:bg-midnight-card rounded-xl p-6 border border-gray-200 dark:border-silk-muted/10 shadow-sm">
      <h3 className="font-bold text-ink dark:text-silk text-xl mb-1">
        {item.title}
      </h3>
      <p className="text-sm text-emerald dark:text-emerald-light italic mb-3">
        {item.org}
        {item.link && (
          <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 ml-2 text-gold hover:text-gold-light" onClick={(e) => e.stopPropagation()}>
            <ExternalLink size={12} />
          </a>
        )}
      </p>
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
      <div className="md:hidden w-full pl-16">
        <div className="absolute left-[23px] top-0 bottom-0 w-[2px] bg-gray-200 dark:bg-gold/20" />
        <div className="absolute left-[4px] top-4 z-10">
          <LogoOrInitials item={item} />
        </div>
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
          <div className="absolute top-0 bottom-0 w-[2px] bg-gray-200 dark:bg-gold/20" />
          <div className="relative z-10 mt-4 rounded-full border-4 border-ivory dark:border-midnight overflow-hidden">
            <LogoOrInitials item={item} size={44} />
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
