interface AboutProps {
  bio: string;
}

export default function About({ bio }: AboutProps) {
  return (
    <section id="about" className="py-20 px-6 bg-teal-bg dark:bg-[#0F1A1F]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-teal-dark dark:text-white mb-6">About</h2>
        <p className="text-lg leading-relaxed dark:text-gray-300">{bio}</p>
      </div>
    </section>
  );
}
