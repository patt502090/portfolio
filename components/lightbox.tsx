"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect } from "react";
import type { MediaItem } from "@/lib/content";

type LightboxProps = {
  items: MediaItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export function Lightbox({ items, index, onClose, onPrev, onNext }: LightboxProps) {
  const current = items[index];

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    };

    document.addEventListener("keydown", onKey);
    document.body.classList.add("no-scroll");

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("no-scroll");
    };
  }, [onClose, onNext, onPrev]);

  if (!current) return null;

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={current.alt}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close image viewer">
        <X size={22} aria-hidden="true" />
      </button>
      <button className="lightbox-arrow left" onClick={onPrev} aria-label="Previous image">
        <ChevronLeft size={28} aria-hidden="true" />
      </button>
      <figure className="lightbox-figure">
        <div className="lightbox-image">
          <Image src={current.src} alt={current.alt} fill quality={100} sizes="92vw" />
        </div>
        <figcaption>
          <strong>{current.alt}</strong>
          <span>Source folder: {current.sourceFolder}</span>
        </figcaption>
      </figure>
      <button className="lightbox-arrow right" onClick={onNext} aria-label="Next image">
        <ChevronRight size={28} aria-hidden="true" />
      </button>
    </div>
  );
}
