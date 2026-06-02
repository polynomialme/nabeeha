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
    <section id="education" className="py-20 px-6 bg-teal-bg dark:bg-[#0F1A1F]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-teal-dark dark:text-white mb-8">Education</h2>
        <div className="space-y-6 mb-12">
          {education.map((edu, i) => (
            <div key={i} className="bg-white dark:bg-teal-dark/50 rounded-xl p-6 border border-teal-light/30 dark:border-teal-primary/30">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <h3 className="font-semibold text-teal-dark dark:text-white">{edu.school}</h3>
                <span className="text-sm text-gray-400">{edu.dates} · {edu.location}</span>
              </div>
              <p className="text-sm text-teal-primary dark:text-teal-accent mt-1">{edu.degree}</p>
              {edu.details.length > 0 && (
                <ul className="list-disc list-outside ml-4 mt-3 space-y-1">
                  {edu.details.map((d, j) => (
                    <li key={j} className="text-sm dark:text-gray-300">{d}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <h3 className="text-lg font-semibold text-teal-primary dark:text-teal-accent mb-4">Volunteering</h3>
        <div className="space-y-4">
          {volunteering.map((vol, i) => (
            <div key={i} className="bg-white dark:bg-teal-dark/50 rounded-xl p-6 border border-teal-light/30 dark:border-teal-primary/30">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <h3 className="font-semibold text-teal-dark dark:text-white">{vol.title}</h3>
                <span className="text-sm text-gray-400">{vol.org}</span>
              </div>
              <p className="text-sm text-teal-primary dark:text-teal-accent mt-1">{vol.location}</p>
              <ul className="list-disc list-outside ml-4 mt-3 space-y-1">
                {vol.bullets.map((b, j) => (
                  <li key={j} className="text-sm dark:text-gray-300">{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
