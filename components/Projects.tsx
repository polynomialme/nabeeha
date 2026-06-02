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

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="bg-cream-card dark:bg-navy-card rounded-xl p-5 cursor-pointer hover:shadow-md transition-all border border-gray-200 dark:border-purple/20 hover:border-purple/50"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-text-dark dark:text-white">{project.name}</h3>
        <div className="flex items-center gap-2 shrink-0">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple hover:text-purple-light"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={16} />
            </a>
          )}
          <ChevronDown
            size={18}
            className={`text-purple transition-transform ${expanded ? "rotate-180" : ""}`}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-3">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 bg-cream dark:bg-navy rounded-full text-text-muted dark:text-text-dim border border-gray-200 dark:border-purple/10"
          >
            {tag}
          </span>
        ))}
      </div>
      {expanded && (
        <div className="mt-3 pt-3 border-t border-gray-100 dark:border-purple/10">
          <p className="text-sm leading-relaxed text-text-muted dark:text-text-dim">{project.description}</p>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-purple hover:text-purple-light mt-3"
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
    <section id="projects" className="py-20 px-6 bg-cream dark:bg-navy">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-text-dark dark:text-white mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
