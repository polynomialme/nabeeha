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
  languages: string[];
  skills: string[];
}

export default function Education({
  education,
  volunteering,
  languages,
  skills,
}: EducationProps) {
  return (
    <section id="education" className="py-20 px-6 bg-teal-bg">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-teal-dark mb-8">Education</h2>
        <div className="space-y-6 mb-12">
          {education.map((edu, i) => (
            <div key={i}>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <h3 className="font-semibold text-teal-dark">{edu.school}</h3>
                <span className="text-sm text-gray-400">{edu.dates} · {edu.location}</span>
              </div>
              <p className="text-sm text-teal-primary mt-1">{edu.degree}</p>
              {edu.details.length > 0 && (
                <ul className="list-disc list-outside ml-4 mt-2 space-y-1">
                  {edu.details.map((d, j) => (
                    <li key={j} className="text-sm">{d}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <h3 className="text-lg font-semibold text-teal-primary mb-4">Volunteering</h3>
        <div className="space-y-4 mb-12">
          {volunteering.map((vol, i) => (
            <div key={i}>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <h3 className="font-semibold text-teal-dark">{vol.title}</h3>
                <span className="text-sm text-gray-400">{vol.org}</span>
              </div>
              <p className="text-sm text-teal-primary mt-1">{vol.location}</p>
              <ul className="list-disc list-outside ml-4 mt-2 space-y-1">
                {vol.bullets.map((b, j) => (
                  <li key={j} className="text-sm">{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-teal-primary mb-3">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <span key={lang} className="text-sm px-3 py-1 bg-white rounded-full">
                  {lang}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-teal-primary mb-3">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="text-sm px-3 py-1 bg-white rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
