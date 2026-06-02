interface SkillCategory {
  name: string;
  items: string[];
}

interface SkillsToolkitProps {
  subtitle: string;
  categories: SkillCategory[];
}

export default function SkillsToolkit({ subtitle, categories }: SkillsToolkitProps) {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-teal-dark dark:text-white mb-2">Skills Toolkit</h2>
        <p className="text-gray-500 dark:text-teal-light mb-8">{subtitle}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="bg-white dark:bg-teal-dark/50 rounded-xl p-6 border border-teal-light/30 dark:border-teal-primary/30"
            >
              <h3 className="font-semibold text-teal-primary dark:text-teal-accent mb-4 text-lg">
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1 bg-teal-bg dark:bg-teal-dark rounded-full text-teal-dark dark:text-teal-light"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
