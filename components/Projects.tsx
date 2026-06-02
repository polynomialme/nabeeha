"use client";

import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";

interface Project {
  name: string;
  description: string;
  tags: string[];
  link: string | null;
}

interface ProjectsProps {
  projects: Project[];
}

const tagColors = [
  "text-emerald border-emerald/20",
  "text-ruby border-ruby/20",
  "text-sapphire-light border-sapphire/20",
  "text-amethyst border-amethyst/20",
  "text-gold border-gold/20",
];

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="bg-ivory-card dark:bg-midnight-card rounded-xl p-5 cursor-pointer hover:shadow-lg transition-all border border-gray-200 dark:border-silk-muted/10"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-ink dark:text-silk">
          {project.name}
        </h3>
        <div className="flex items-center gap-2 shrink-0">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald hover:text-emerald-light"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={16} />
            </a>
          )}
          <ChevronDown
            size={18}
            className={`text-gold transition-transform ${expanded ? "rotate-180" : ""}`}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-3">
        {project.tags.map((tag, i) => (
          <span
            key={tag}
            className={`text-xs px-2 py-1 rounded-full border bg-transparent ${tagColors[i % tagColors.length]}`}
          >
            {tag}
          </span>
        ))}
      </div>
      {expanded && (
        <div className="mt-3 pt-3 border-t border-gray-100 dark:border-silk-muted/10">
          <p className="text-sm leading-relaxed text-ink-muted dark:text-silk-muted">{project.description}</p>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-emerald hover:text-emerald-light mt-3"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={14} />
              View Project
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-12 px-6 bg-midnight">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-ink dark:text-silk mb-8">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
