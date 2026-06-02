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
      className="bg-white dark:bg-teal-dark/50 rounded-xl p-5 cursor-pointer hover:shadow-md transition-shadow border border-teal-light/30 dark:border-teal-primary/30"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-teal-dark dark:text-white">{project.name}</h3>
        <div className="flex items-center gap-2 shrink-0">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-primary dark:text-teal-accent hover:text-teal-accent"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={16} />
            </a>
          )}
          <ChevronDown
            size={18}
            className={`text-teal-primary dark:text-teal-accent transition-transform ${expanded ? "rotate-180" : ""}`}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-3">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 bg-teal-bg dark:bg-teal-dark rounded-full text-teal-dark dark:text-teal-light"
          >
            {tag}
          </span>
        ))}
      </div>
      {expanded && (
        <div className="mt-3 pt-3 border-t border-gray-100 dark:border-teal-primary/20">
          <p className="text-sm leading-relaxed dark:text-gray-300">{project.description}</p>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-teal-primary dark:text-teal-accent hover:text-teal-accent mt-3"
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
    <section id="projects" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-teal-dark dark:text-white mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
