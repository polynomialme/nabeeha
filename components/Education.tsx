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
    <section id="education" className="py-20 px-6 bg-cream dark:bg-navy">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-text-dark dark:text-white mb-8">Education</h2>
        <div className="space-y-6 mb-12">
          {education.map((edu, i) => (
            <div key={i} className="bg-cream-card dark:bg-navy-card rounded-xl p-6 border border-gray-200 dark:border-purple/20">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <h3 className="font-semibold text-text-dark dark:text-white">{edu.school}</h3>
                <span className="text-sm text-text-muted dark:text-text-dim">{edu.dates} · {edu.location}</span>
              </div>
              <p className="text-sm text-purple dark:text-purple-light mt-1">{edu.degree}</p>
              {edu.details.length > 0 && (
                <ul className="list-disc list-outside ml-4 mt-3 space-y-1">
                  {edu.details.map((d, j) => (
                    <li key={j} className="text-sm text-text-muted dark:text-text-dim">{d}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <h3 className="text-lg font-semibold text-purple dark:text-purple-light mb-4">Volunteering</h3>
        <div className="space-y-4">
          {volunteering.map((vol, i) => (
            <div key={i} className="bg-cream-card dark:bg-navy-card rounded-xl p-6 border border-gray-200 dark:border-purple/20">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <h3 className="font-semibold text-text-dark dark:text-white">{vol.title}</h3>
                <span className="text-sm text-text-muted dark:text-text-dim">{vol.org}</span>
              </div>
              <p className="text-sm text-purple dark:text-purple-light mt-1">{vol.location}</p>
              <ul className="list-disc list-outside ml-4 mt-3 space-y-1">
                {vol.bullets.map((b, j) => (
                  <li key={j} className="text-sm text-text-muted dark:text-text-dim">{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
