"use client";

import Image from "next/image";
import { ArrowRight, ExternalLink, Images } from "lucide-react";
import { useState } from "react";
import { Lightbox } from "@/components/lightbox";
import type { Project } from "@/lib/content";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const active = project.media[activeIndex] ?? project.media[0];

  const closeLightbox = () => setLightboxIndex(null);
  const showPrev = () =>
    setLightboxIndex((current) =>
      current === null ? null : (current - 1 + project.media.length) % project.media.length
    );
  const showNext = () =>
    setLightboxIndex((current) =>
      current === null ? null : (current + 1) % project.media.length
    );

  return (
    <article className="project-card" id={project.slug}>
      <div className="project-copy">
        <div className="project-number">0{index + 1}</div>
        <div className="project-meta">
          <span>{project.kicker}</span>
          <span>{project.period}</span>
        </div>
        <h3>{project.title}</h3>
        <p className="project-role">{project.role}</p>
        <p>{project.summary}</p>
        <ul>
          {project.impact.map((impact) => (
            <li key={impact}>
              <ArrowRight size={15} aria-hidden="true" />
              {impact}
            </li>
          ))}
        </ul>
        <div className="stack-mark-row" aria-label={`${project.title} primary stack`}>
          {project.stackMarks.map((stack) => (
            <span className="stack-mark" data-tone={stack.tone} key={stack.label}>
              <span aria-hidden="true">{stack.mark}</span>
              {stack.label}
            </span>
          ))}
        </div>
        <div className="tag-row" aria-label={`${project.title} technology stack`}>
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        {project.links.length ? (
          <div className="project-links">
            {project.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
                <ExternalLink size={16} aria-hidden="true" />
              </a>
            ))}
          </div>
        ) : null}
      </div>
      <div className="project-media" data-layout={index % 2 === 0 ? "left" : "right"}>
        <button
          className="project-image-main"
          type="button"
          onClick={() => setLightboxIndex(activeIndex)}
          aria-label={`Open ${project.title} image ${activeIndex + 1}`}
        >
          <Image
            src={active.src}
            alt={active.alt}
            fill
            quality={100}
            priority={index < 2}
            sizes="(min-width: 900px) 48vw, 100vw"
          />
          <span>
            <Images size={16} aria-hidden="true" />
            {activeIndex + 1}/{project.media.length}
          </span>
        </button>
        {project.media.length > 1 ? (
          <div className="project-image-strip" aria-label={`${project.title} image selector`}>
            {project.media.map((media, mediaIndex) => (
              <button
                className={mediaIndex === activeIndex ? "project-image-thumb is-active" : "project-image-thumb"}
                key={media.src}
                type="button"
                onClick={() => setActiveIndex(mediaIndex)}
                aria-label={`Show ${project.title} image ${mediaIndex + 1}`}
              >
                <Image src={media.src} alt={media.alt} fill quality={90} sizes="110px" />
              </button>
            ))}
          </div>
        ) : null}
      </div>

      {lightboxIndex !== null ? (
        <Lightbox
          items={project.media}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={showPrev}
          onNext={showNext}
        />
      ) : null}
    </article>
  );
}
