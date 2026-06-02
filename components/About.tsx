interface AboutProps {
  bio: string;
}

export default function About({ bio }: AboutProps) {
  return (
    <section id="about" className="py-20 px-6 bg-midnight">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-silk mb-6">
          About
        </h2>
        <p className="text-lg leading-relaxed text-silk-muted">{bio}</p>
      </div>
    </section>
  );
}
