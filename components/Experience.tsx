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

function ExperienceCard({ item, index }: { item: ExperienceItem; index: number }) {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative flex items-start md:items-center">
      {/* Mobile: simple card layout */}
      <div className="md:hidden w-full pl-12">
        {/* Timeline line */}
        <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-gray-200 dark:bg-purple/20" />
        {/* Circle */}
        <div className="absolute left-[10px] top-6 w-5 h-5 rounded-full bg-purple border-4 border-cream dark:border-navy z-10" />
        <div className="bg-cream-card dark:bg-navy-card rounded-xl p-5 border border-gray-200 dark:border-purple/20">
          <div className="text-xs text-text-muted dark:text-text-dim mb-2">
            {formatDate(item.startDate)} – {formatDate(item.endDate)}
          </div>
          <h3 className="font-bold text-text-dark dark:text-white text-lg">{item.title}</h3>
          <p className="text-sm text-purple dark:text-purple-light mb-3">{item.org}</p>
          <ul className="list-disc list-outside ml-4 space-y-1">
            {item.bullets.map((bullet, i) => (
              <li key={i} className="text-sm leading-relaxed text-text-muted dark:text-text-dim">
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Desktop: alternating layout */}
      <div className="hidden md:grid md:grid-cols-[1fr_60px_1fr] w-full items-start">
        {/* Left side */}
        <div className={`${isLeft ? "pr-8" : ""}`}>
          {isLeft ? (
            <div className="bg-cream-card dark:bg-navy-card rounded-xl p-6 border border-gray-200 dark:border-purple/20">
              <h3 className="font-bold text-text-dark dark:text-white text-lg">{item.title}</h3>
              <p className="text-sm text-purple dark:text-purple-light mb-3">{item.org}</p>
              <ul className="list-disc list-outside ml-4 space-y-1">
                {item.bullets.map((bullet, i) => (
                  <li key={i} className="text-sm leading-relaxed text-text-muted dark:text-text-dim">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="flex items-center justify-end h-full pt-4">
              <span className="text-sm text-text-muted dark:text-text-dim">
                {formatDate(item.startDate)} – {formatDate(item.endDate)}
              </span>
            </div>
          )}
        </div>

        {/* Center timeline */}
        <div className="flex flex-col items-center relative">
          <div className="absolute top-0 bottom-0 w-[2px] bg-gray-200 dark:bg-purple/20" />
          <div className="relative z-10 w-10 h-10 rounded-full bg-navy-card dark:bg-navy-light border-2 border-purple flex items-center justify-center text-xs font-bold text-purple mt-4">
            {getInitials(item.org)}
          </div>
        </div>

        {/* Right side */}
        <div className={`${!isLeft ? "pl-8" : ""}`}>
          {!isLeft ? (
            <div className="bg-cream-card dark:bg-navy-card rounded-xl p-6 border border-gray-200 dark:border-purple/20">
              <h3 className="font-bold text-text-dark dark:text-white text-lg">{item.title}</h3>
              <p className="text-sm text-purple dark:text-purple-light mb-3">{item.org}</p>
              <ul className="list-disc list-outside ml-4 space-y-1">
                {item.bullets.map((bullet, i) => (
                  <li key={i} className="text-sm leading-relaxed text-text-muted dark:text-text-dim">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="flex items-center h-full pt-4">
              <span className="text-sm text-text-muted dark:text-text-dim">
                {formatDate(item.startDate)} – {formatDate(item.endDate)}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Experience({ items }: ExperienceProps) {
  const sorted = [...items].sort(sortByDate);

  return (
    <section id="experience" className="py-20 px-6 bg-cream dark:bg-navy">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-text-dark dark:text-white mb-10 text-center">Experience</h2>
        <div className="space-y-8">
          {sorted.map((item, i) => (
            <ExperienceCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
