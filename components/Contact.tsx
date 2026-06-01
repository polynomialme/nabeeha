"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";

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
  const [name, setName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`From: ${name} (${senderEmail})\n\n${message}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="py-20 px-6 bg-teal-dark text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Get in Touch</h2>
        <p className="text-teal-light mb-10 text-center">
          Interested in working together? I'd love to hear from you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm text-teal-light mb-1">Name</label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-teal-light/30 text-white placeholder-teal-light/50 focus:outline-none focus:border-teal-accent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-teal-light mb-1">Email</label>
              <input
                id="email"
                type="email"
                required
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-teal-light/30 text-white placeholder-teal-light/50 focus:outline-none focus:border-teal-accent"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-teal-light mb-1">Message</label>
              <textarea
                id="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-teal-light/30 text-white placeholder-teal-light/50 focus:outline-none focus:border-teal-accent resize-none"
                placeholder="What would you like to discuss?"
              />
            </div>
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 bg-teal-primary rounded-lg hover:bg-teal-accent transition-colors font-medium"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>

          <div className="flex flex-col justify-center gap-4">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-3 text-teal-light hover:text-white transition-colors"
            >
              <Mail size={20} />
              <span>{email}</span>
            </a>
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-teal-light hover:text-white transition-colors"
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
