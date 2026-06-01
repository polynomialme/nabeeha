import { Mail, Link } from "lucide-react";

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
              <Link size={18} />
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
