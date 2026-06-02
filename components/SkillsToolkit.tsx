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
    <section id="skills" className="py-20 px-6 bg-cream dark:bg-navy">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-text-dark dark:text-white mb-2">Skills Toolkit</h2>
        <p className="text-text-muted dark:text-text-dim mb-8">{subtitle}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="bg-cream-card dark:bg-navy-card rounded-xl p-6 border border-gray-200 dark:border-purple/20"
            >
              <h3 className="font-semibold text-purple dark:text-purple-light mb-4 text-lg">
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1 bg-cream dark:bg-navy rounded-full text-text-dark dark:text-text-dim border border-gray-200 dark:border-purple/10"
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
