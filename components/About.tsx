interface AboutProps {
  bio: string;
}

export default function About({ bio }: AboutProps) {
  return (
    <section id="about" className="py-20 px-6 bg-cream dark:bg-navy">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-text-dark dark:text-white mb-6">About</h2>
        <p className="text-lg leading-relaxed text-text-muted dark:text-text-dim">{bio}</p>
      </div>
    </section>
  );
}
