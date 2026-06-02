interface SkillCategory {
  name: string;
  items: string[];
}

interface SkillsToolkitProps {
  subtitle: string;
  categories: SkillCategory[];
}

const categoryColors = [
  { title: "text-emerald-light", pill: "border-emerald/20 text-emerald-light" },
  { title: "text-sapphire-light", pill: "border-sapphire/20 text-sapphire-light" },
  { title: "text-amethyst-light", pill: "border-amethyst/20 text-amethyst-light" },
  { title: "text-ruby-light", pill: "border-ruby/20 text-ruby-light" },
];

export default function SkillsToolkit({ subtitle, categories }: SkillsToolkitProps) {
  return (
    <section id="skills" className="py-12 px-6 bg-midnight">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-silk mb-2">
          Skills Toolkit
        </h2>
        <p className="text-silk-muted mb-8 italic">{subtitle}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {categories.map((cat, i) => {
            const color = categoryColors[i % categoryColors.length];
            return (
              <div
                key={cat.name}
                className="bg-midnight-card rounded-xl p-6 border border-silk-muted/10"
              >
                <h3 className={`font-bold ${color.title} mb-4 text-lg`}>
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className={`text-sm px-3 py-1 rounded-full border ${color.pill} bg-transparent`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
