"use client";

import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { useMemo, useState } from "react";
import { Lightbox } from "@/components/lightbox";
import type { GalleryGroup, MediaItem } from "@/lib/content";

type EvidenceGalleryProps = {
  groups: GalleryGroup[];
};

export function EvidenceGallery({ groups }: EvidenceGalleryProps) {
  const [activeGroup, setActiveGroup] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visibleItems = useMemo(() => {
    if (activeGroup === "all") return groups.flatMap((group) => group.media);
    return groups.find((group) => group.id === activeGroup)?.media ?? [];
  }, [activeGroup, groups]);

  const openLightbox = (media: MediaItem) => {
    const index = visibleItems.findIndex((item) => item.src === media.src);
    setLightboxIndex(index >= 0 ? index : 0);
  };

  const closeLightbox = () => setLightboxIndex(null);
  const showPrev = () =>
    setLightboxIndex((current) =>
      current === null ? null : (current - 1 + visibleItems.length) % visibleItems.length
    );
  const showNext = () =>
    setLightboxIndex((current) =>
      current === null ? null : (current + 1) % visibleItems.length
    );

  return (
    <div className="evidence-gallery">
      <div className="gallery-filters" aria-label="Evidence gallery filters">
        <button
          type="button"
          className={activeGroup === "all" ? "is-active" : ""}
          onClick={() => setActiveGroup("all")}
        >
          All evidence
        </button>
        {groups.map((group) => (
          <button
            type="button"
            key={group.id}
            className={activeGroup === group.id ? "is-active" : ""}
            onClick={() => setActiveGroup(group.id)}
          >
            {group.title}
          </button>
        ))}
      </div>

      <div className="gallery-status">
        <ImageIcon size={18} aria-hidden="true" />
        <span>
          Showing {visibleItems.length} item{visibleItems.length === 1 ? "" : "s"}
        </span>
      </div>

      <div className="gallery-grid">
        {visibleItems.map((media) => (
          <button type="button" className="gallery-item" key={media.src} onClick={() => openLightbox(media)}>
            <Image
              src={media.src}
              alt={media.alt}
              fill
              quality={88}
              sizes="(min-width: 1100px) 24vw, 50vw"
            />
            <span>{media.sourceFolder}</span>
          </button>
        ))}
      </div>

      {lightboxIndex !== null ? (
        <Lightbox
          items={visibleItems}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={showPrev}
          onNext={showNext}
        />
      ) : null}
    </div>
  );
}
