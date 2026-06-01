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
      className="bg-white rounded-lg p-5 cursor-pointer hover:shadow-md transition-shadow"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-teal-dark">{project.name}</h3>
        <ChevronDown
          size={18}
          className={`text-teal-primary shrink-0 transition-transform ${expanded ? "rotate-180" : ""}`}
        />
      </div>
      <div className="flex flex-wrap gap-2 mb-3">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 bg-teal-light/40 text-teal-dark rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      {expanded && (
        <div className="mt-3 pt-3 border-t border-gray-100">
          <p className="text-sm leading-relaxed">{project.description}</p>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-teal-primary hover:text-teal-accent mt-3"
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
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-teal-dark mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
