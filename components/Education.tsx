interface EducationItem {
  school: string;
  degree: string;
  location: string;
  dates: string;
  details: string[];
}

interface VolunteerItem {
  title: string;
  org: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

interface EducationProps {
  education: EducationItem[];
  volunteering: VolunteerItem[];
}

export default function Education({ education, volunteering }: EducationProps) {
  return (
    <section id="education" className="py-20 px-6 bg-ivory dark:bg-midnight">
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-3xl font-bold text-ink dark:text-silk mb-8 italic"
          style={{ fontFamily: "var(--font-playfair), 'Times New Roman', serif" }}
        >
          Education
        </h2>
        <div className="space-y-6 mb-12">
          {education.map((edu, i) => (
            <div key={i} className="bg-ivory-card dark:bg-midnight-card rounded-xl p-6 border border-gray-200 dark:border-silk-muted/10">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <h3
                  className="font-bold text-ink dark:text-silk"
                  style={{ fontFamily: "var(--font-playfair), 'Times New Roman', serif" }}
                >
                  {edu.school}
                </h3>
                <span className="text-sm text-ink-muted dark:text-silk-muted italic">{edu.dates} · {edu.location}</span>
              </div>
              <p className="text-sm text-sapphire-light dark:text-sapphire-light mt-1 italic">{edu.degree}</p>
              {edu.details.length > 0 && (
                <ul className="list-disc list-outside ml-4 mt-3 space-y-1">
                  {edu.details.map((d, j) => (
                    <li key={j} className="text-sm text-ink-muted dark:text-silk-muted">{d}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <h3
          className="text-lg font-bold text-amethyst dark:text-amethyst-light mb-4 italic"
          style={{ fontFamily: "var(--font-playfair), 'Times New Roman', serif" }}
        >
          Volunteering
        </h3>
        <div className="space-y-4">
          {volunteering.map((vol, i) => (
            <div key={i} className="bg-ivory-card dark:bg-midnight-card rounded-xl p-6 border border-gray-200 dark:border-silk-muted/10">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <h3
                  className="font-bold text-ink dark:text-silk"
                  style={{ fontFamily: "var(--font-playfair), 'Times New Roman', serif" }}
                >
                  {vol.title}
                </h3>
                <span className="text-sm text-ink-muted dark:text-silk-muted italic">{vol.org}</span>
              </div>
              <p className="text-sm text-emerald dark:text-emerald-light mt-1 italic">{vol.location}</p>
              <ul className="list-disc list-outside ml-4 mt-3 space-y-1">
                {vol.bullets.map((b, j) => (
                  <li key={j} className="text-sm text-ink-muted dark:text-silk-muted">{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
