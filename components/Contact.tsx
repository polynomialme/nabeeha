import { Mail } from "lucide-react";

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

interface ContactProps {
  email: string;
  linkedin: string;
}

export default function Contact({ email, linkedin }: ContactProps) {
  return (
    <section id="contact" className="py-20 px-6 bg-teal-dark text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-teal-light mb-8">
          Interested in working together? I'd love to hear from you.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 px-6 py-3 bg-teal-primary rounded-lg hover:bg-teal-accent transition-colors"
          >
            <Mail size={18} />
            Email
          </a>
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-teal-light rounded-lg hover:bg-teal-primary transition-colors"
            >
              <LinkedInIcon size={18} />
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
