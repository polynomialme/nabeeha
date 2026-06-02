interface AboutProps {
  bio: string;
}

export default function About({ bio }: AboutProps) {
  return (
    <section id="about" className="py-20 px-6 bg-ivory dark:bg-midnight">
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-3xl font-bold text-ink dark:text-silk mb-6 italic"
          style={{ fontFamily: "var(--font-playfair), 'Times New Roman', serif" }}
        >
          About
        </h2>
        <p className="text-lg leading-relaxed text-ink-muted dark:text-silk-muted">{bio}</p>
      </div>
    </section>
  );
}
