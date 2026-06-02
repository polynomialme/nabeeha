import { Mail } from "lucide-react";

function LinkedInIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

interface HeroProps {
  name: string;
  tagline: string;
  email: string;
  linkedin: string;
  photo?: string;
}

export default function Hero({ name, tagline, email, linkedin, photo }: HeroProps) {
  return (
    <section className="bg-sapphire dark:bg-midnight text-white pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {photo && (
          <div className="shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo}
              alt={name}
              className="rounded-full object-cover w-[180px] h-[180px] border-4 border-gold"
            />
          </div>
        )}
        <div>
          <h1
            className="text-5xl md:text-6xl font-bold mb-4 italic"
            style={{ fontFamily: "var(--font-playfair), 'Times New Roman', serif" }}
          >
            {name}
          </h1>
          <p className="text-lg text-silk/70 mb-8">{tagline}</p>
          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
            >
              <Mail size={20} />
              <span>{email}</span>
            </a>
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
              >
                <LinkedInIcon size={20} />
                <span>LinkedIn</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
