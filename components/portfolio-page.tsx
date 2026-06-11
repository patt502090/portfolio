"use client";

import Image from "next/image";
import {
  Code2,
  Contact,
  Download,
  ExternalLink,
  FileText,
  Mail,
  ShieldCheck
} from "lucide-react";
import { useState } from "react";
import { EvidenceGallery } from "@/components/evidence-gallery";
import { Lightbox } from "@/components/lightbox";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { SiteNav } from "@/components/site-nav";
import {
  achievements,
  allMedia,
  certificationsList,
  galleryGroups,
  heroMedia,
  profile,
  projects,
  proofPoints,
  skillGroups,
  spotlight
} from "@/lib/content";
import type { MediaItem } from "@/lib/content";

export function PortfolioPage() {
  const [proofMedia, setProofMedia] = useState<MediaItem[] | null>(null);
  const [proofIndex, setProofIndex] = useState(0);

  const openProof = (items: MediaItem[], index: number) => {
    setProofMedia(items);
    setProofIndex(index);
  };

  const closeProof = () => setProofMedia(null);
  const prevProof = () =>
    setProofIndex((current) =>
      proofMedia ? (current - 1 + proofMedia.length) % proofMedia.length : current
    );
  const nextProof = () =>
    setProofIndex((current) => (proofMedia ? (current + 1) % proofMedia.length : current));

  return (
    <>
      <SiteNav />
      <main id="top">
        <section className="hero-section">
          <div className="official-shell">
            <div className="record-banner">
              <span>Engineering Portfolio Record</span>
              <span>Computer Engineering</span>
              <span>Prince of Songkla University</span>
            </div>

            <div className="hero-content">
              <section className="profile-record" aria-labelledby="profile-name">
                <p className="record-label">Formal Engineering Portfolio</p>
                <h1 id="profile-name">{profile.name}</h1>
                <p className="hero-role">{profile.role}</p>
                <p className="hero-summary">{profile.summary}</p>

                <dl className="identity-grid" aria-label="Profile details">
                  <div>
                    <dt>Institution</dt>
                    <dd>{profile.school}</dd>
                  </div>
                  <div>
                    <dt>Education Record</dt>
                    <dd>{profile.gpa}</dd>
                  </div>
                  <div>
                    <dt>Primary Evidence</dt>
                    <dd>Production systems, competitions, infrastructure, embedded systems</dd>
                  </div>
                  <div>
                    <dt>Public Repository</dt>
                    <dd>github.com/patt502090</dd>
                  </div>
                </dl>

                <div className="hero-actions" aria-label="Primary actions">
                  <a className="button primary" href="#work">
                    <FileText size={17} aria-hidden="true" />
                    Review engineering record
                  </a>
                  <a className="button secondary" href={profile.resume} download>
                    <Download size={17} aria-hidden="true" />
                    Download resume PDF
                  </a>
                </div>
              </section>

              <aside className="verification-panel" aria-label="Verification summary">
                <p>Verification Summary</p>
                <ul>
                  {proofPoints.map((point) => (
                    <li key={point}>
                      <ShieldCheck size={15} aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="evidence-strip" aria-label="Selected evidence thumbnails">
                  {heroMedia.slice(0, 4).map((media, index) => (
                    <figure key={media.src}>
                      <div>
                        <Image
                          src={media.src}
                          alt={media.alt}
                          fill
                          quality={90}
                          priority={index < 2}
                          sizes="(min-width: 900px) 150px, 45vw"
                        />
                      </div>
                      <figcaption>{media.sourceFolder}</figcaption>
                    </figure>
                  ))}
                </div>
              </aside>
            </div>

            <div className="spotlight-row" aria-label="Portfolio focus areas">
              {spotlight.map((item) => {
                const Icon = item.icon;
                return (
                  <div className="spotlight-item" key={item.label}>
                    <Icon size={18} aria-hidden="true" />
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="work" className="page-section work-section">
          <SectionHeading
            label="Section 01"
            title="Selected Engineering Records"
            description="A concise record of production work, public systems, contest products, hardware-backed software, and network infrastructure. Each entry pairs outcomes with selected architecture and proof media for interview review."
          />
          <div className="project-list">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </section>

        <section id="proof" className="page-section proof-section">
          <SectionHeading
            label="Section 02"
            title="Competition and Public Proof"
            description="Formal records of timed competitions, cybersecurity training, algorithmic contests, API delivery, and community organization."
          />
          <div className="achievement-timeline">
            {achievements.map((achievement) => (
              <article className="achievement-item" key={achievement.title}>
                <div className="achievement-date">{achievement.date}</div>
                <div className="achievement-body">
                  <p>{achievement.issuer}</p>
                  <h3>{achievement.title}</h3>
                  <strong>{achievement.outcome}</strong>
                  <span>{achievement.details}</span>
                </div>
                <button
                  className="achievement-media"
                  type="button"
                  onClick={() => openProof(achievement.media, 0)}
                  aria-label={`Open media for ${achievement.title}`}
                >
                  <Image
                    src={achievement.media[0].src}
                    alt={achievement.media[0].alt}
                    fill
                    quality={90}
                    sizes="(min-width: 900px) 190px, 38vw"
                  />
                </button>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="page-section skills-section">
          <SectionHeading
            label="Section 03"
            title="Technical Competency Index"
            description="Technical capabilities are grouped by engineering function so that interviewers can scan the operational surface quickly."
          />
          <div className="skills-grid">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <article className="skill-panel" key={group.title}>
                  <div>
                    <Icon size={19} aria-hidden="true" />
                    <h3>{group.title}</h3>
                  </div>
                  <ul>
                    {group.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>

          <div className="cert-strip">
            <p>Certifications and training evidence</p>
            <div>
              {certificationsList.map((certification) => (
                <span key={certification}>{certification}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="page-section gallery-section">
          <SectionHeading
            label="Section 04"
            title={`Evidence Repository, ${allMedia.length} Files`}
            description="Curated portfolio evidence is grouped by source folder. Architecture diagrams, product screenshots, competition records, and hardware proof are selected for direct inspection without flooding the page."
          />
          <EvidenceGallery groups={galleryGroups} />
        </section>

        <section id="contact" className="contact-section">
          <div>
            <p>Formal Contact</p>
            <h2>Internship interview and portfolio review.</h2>
            <span>
              The phone number is intentionally hidden on the public site. Use email,
              LinkedIn, GitHub, or the resume PDF for formal contact.
            </span>
          </div>
          <div className="contact-actions">
            <a href={`mailto:${profile.email}`}>
              <Mail size={17} aria-hidden="true" />
              Email
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Code2 size={17} aria-hidden="true" />
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Contact size={17} aria-hidden="true" />
              LinkedIn
            </a>
            <a href={profile.resume} download>
              <Download size={17} aria-hidden="true" />
              Resume PDF
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>Phodcharaphon Sukonsakun</span>
        <a href="https://github.com/patt502090/portfolio" target="_blank" rel="noreferrer">
          Portfolio source
          <ExternalLink size={14} aria-hidden="true" />
        </a>
      </footer>

      {proofMedia ? (
        <Lightbox
          items={proofMedia}
          index={proofIndex}
          onClose={closeProof}
          onPrev={prevProof}
          onNext={nextProof}
        />
      ) : null}
    </>
  );
}
