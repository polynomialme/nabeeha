import { Mail, Link } from "lucide-react";

interface HeroProps {
  name: string;
  tagline: string;
  email: string;
  linkedin: string;
}

export default function Hero({ name, tagline, email, linkedin }: HeroProps) {
  return (
    <section className="bg-teal-dark text-white py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">{name}</h1>
        <p className="text-xl text-teal-light mb-8">{tagline}</p>
        <div className="flex gap-4">
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 text-teal-accent hover:text-white transition-colors"
          >
            <Mail size={20} />
            <span>{email}</span>
          </a>
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-teal-accent hover:text-white transition-colors"
            >
              <Link size={20} />
              <span>LinkedIn</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
