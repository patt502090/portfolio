"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Code2,
  Contact,
  Download,
  ExternalLink,
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

const reveal = {
  hidden: { opacity: 0.72, y: 28 },
  show: { opacity: 1, y: 0 }
};

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
          <div className="hero-content">
            <motion.div
              className="hero-copy"
              initial="hidden"
              animate="show"
              variants={reveal}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="hero-kicker-row" aria-label="Portfolio metadata">
                <span>Portfolio 2026</span>
                <span>{profile.gpa}</span>
                <span>Available for internship interviews</span>
              </div>
              <p className="hero-school">{profile.school}</p>
              <h1>
                <span>Phodcharaphon</span>
                <span>Sukonsakun</span>
              </h1>

              <div className="hero-intro-grid">
                <div>
                  <p className="hero-role">{profile.role}</p>
                  <p className="hero-summary">{profile.summary}</p>

                  <div className="hero-actions" aria-label="Primary actions">
                    <a className="button primary" href="#work">
                      View selected work
                    </a>
                    <a className="button secondary" href={profile.resume} download>
                      <Download size={17} aria-hidden="true" />
                      Download resume
                    </a>
                  </div>
                </div>

                <div className="proof-list" aria-label="Interview proof points">
                  <p>What the first 30 seconds should prove</p>
                  <ul>
                    {proofPoints.map((point) => (
                      <li key={point}>
                        <ShieldCheck size={16} aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="hero-board"
              initial={{ opacity: 0.86, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              aria-label="Selected visual evidence"
            >
              {heroMedia.map((media, index) => (
                <div className="hero-image" key={media.src}>
                  <Image
                    src={media.src}
                    alt={media.alt}
                    fill
                    quality={95}
                    priority={index < 2}
                    sizes="(min-width: 900px) 24vw, 50vw"
                  />
                  <span>{media.sourceFolder}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="spotlight-row" aria-label="Portfolio focus areas">
            {spotlight.map((item) => {
              const Icon = item.icon;
              return (
                <div className="spotlight-item" key={item.label}>
                  <Icon size={20} aria-hidden="true" />
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              );
            })}
          </div>
        </section>

        <motion.section
          id="work"
          className="page-section work-section"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          variants={reveal}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeading
            label="Selected work"
            title="Systems first, stack second."
            description="Each project is presented as evidence of ownership, not as a template screenshot. The strongest signal is production work, followed by contest products, hardware systems, and network infrastructure."
          />
          <div className="project-list">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </motion.section>

        <motion.section
          id="proof"
          className="page-section proof-section"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          variants={reveal}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeading
            label="Competition proof"
            title="Timed pressure, public results, team execution."
            description="Competition records show practical networking, cybersecurity, algorithms, API delivery, and communication under constraints."
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
                    sizes="(min-width: 900px) 210px, 38vw"
                  />
                </button>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="skills"
          className="page-section skills-section"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          variants={reveal}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeading
            label="Technical surface"
            title="Full-stack core with security and hardware range."
            description="The stack is intentionally broad, but the through-line is practical systems work: APIs, data, infrastructure, identity, observability, and devices."
          />
          <div className="skills-grid">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <article className="skill-panel" key={group.title}>
                  <div>
                    <Icon size={21} aria-hidden="true" />
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
            <p>Certifications and training proof</p>
            <div>
              {certificationsList.map((certification) => (
                <span key={certification}>{certification}</span>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="gallery"
          className="page-section gallery-section"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          variants={reveal}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeading
            label="Evidence gallery"
            title={`All local portfolio media, ${allMedia.length} images.`}
            description="Every image from the Resume folder is available here, grouped by the original folder name and optimized for inspection."
          />
          <EvidenceGallery groups={galleryGroups} />
        </motion.section>

        <section id="contact" className="contact-section">
          <div>
            <p>{profile.gpa}</p>
            <h2>Ready for a full-stack internship interview.</h2>
            <span>
              The phone number is intentionally hidden on the public site. Use email,
              LinkedIn, GitHub, or the resume PDF for formal contact.
            </span>
          </div>
          <div className="contact-actions">
            <a href={`mailto:${profile.email}`}>
              <Mail size={18} aria-hidden="true" />
              Email
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Code2 size={18} aria-hidden="true" />
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Contact size={18} aria-hidden="true" />
              LinkedIn
            </a>
            <a href={profile.resume} download>
              <Download size={18} aria-hidden="true" />
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
