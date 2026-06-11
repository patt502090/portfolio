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
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const evidenceGroups = project.evidenceGroups.length
    ? project.evidenceGroups
    : [{ label: "Evidence", description: "Selected project evidence.", media: project.media }];
  const activeGroup = evidenceGroups[activeGroupIndex] ?? evidenceGroups[0];
  const activeItems = activeGroup.media;
  const active = activeItems[activeIndex] ?? activeItems[0] ?? project.media[0];

  const closeLightbox = () => setLightboxIndex(null);
  const showPrev = () =>
    setLightboxIndex((current) =>
      current === null ? null : (current - 1 + activeItems.length) % activeItems.length
    );
  const showNext = () =>
    setLightboxIndex((current) =>
      current === null ? null : (current + 1) % activeItems.length
    );

  const showGroup = (groupIndex: number) => {
    setActiveGroupIndex(groupIndex);
    setActiveIndex(0);
  };

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
        <div className="stack-logo-row" aria-label={`${project.title} primary stack`}>
          {project.stackLogos.map((stack) => (
            <span
              className={stack.wordmark ? "stack-logo is-wordmark" : "stack-logo"}
              key={stack.label}
              aria-label={stack.label}
            >
              <Image
                src={stack.icon}
                alt=""
                aria-hidden="true"
                width={28}
                height={28}
                unoptimized
              />
              {stack.wordmark ? null : <span>{stack.label}</span>}
            </span>
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
        <div className="evidence-group-tabs" aria-label={`${project.title} evidence groups`}>
          {evidenceGroups.map((group, groupIndex) => (
            <button
              className={groupIndex === activeGroupIndex ? "is-active" : ""}
              key={group.label}
              type="button"
              onClick={() => showGroup(groupIndex)}
            >
              <span>{group.label}</span>
              <strong>{group.media.length}</strong>
            </button>
          ))}
        </div>
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
            {activeIndex + 1}/{activeItems.length}
          </span>
        </button>
        <div className="evidence-group-note">
          <strong>{activeGroup.label}</strong>
          <p>{activeGroup.description}</p>
        </div>
        {activeItems.length > 1 ? (
          <div className="project-image-strip" aria-label={`${project.title} image selector`}>
            {activeItems.map((media, mediaIndex) => (
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
          items={activeItems}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={showPrev}
          onNext={showNext}
        />
      ) : null}
    </article>
  );
}
