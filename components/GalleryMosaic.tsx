"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type Props = { images: string[] };

const FEATURED_COUNT = 6;

const TILE_CLASSES = [
  "lg:col-span-2 lg:row-span-2", // 1 — hero
  "lg:col-span-2", //               2 — wide top right
  "", //                            3 — small
  "lg:row-span-2", //               4 — tall right
  "", //                            5 — small
  "lg:col-span-2", //               6 — wide bottom
];

export default function GalleryMosaic({ images }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const featured = images.slice(0, FEATURED_COUNT);

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length]
  );
  const prev = useCallback(
    () =>
      setOpenIndex((i) =>
        i === null ? null : (i - 1 + images.length) % images.length
      ),
    [images.length]
  );

  useEffect(() => {
    if (openIndex === null) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handler);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = originalOverflow;
    };
  }, [openIndex, close, next, prev]);

  return (
    <>
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 lg:h-[640px]">
        {featured.map((src, i) => (
          <button
            key={src}
            onClick={() => setOpenIndex(i)}
            aria-label={`Open gallery image ${i + 1}`}
            className={`group relative aspect-[4/3] lg:aspect-auto overflow-hidden rounded-2xl ring-1 ring-bone/10 hover:ring-gold/40 transition-all bg-ink-900 ${TILE_CLASSES[i] ?? ""}`}
          >
            <Image
              src={src}
              alt={`Cedar's gallery image ${i + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
          data-lenis-prevent
          className="fixed inset-0 z-50 bg-ink/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-12"
          onClick={close}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            aria-label="Close gallery"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-ink-900 ring-1 ring-bone/20 text-bone hover:text-gold hover:ring-gold/40 flex items-center justify-center text-2xl leading-none transition-colors"
          >
            ×
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous image"
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-ink-900/80 ring-1 ring-bone/20 text-bone hover:text-gold hover:ring-gold/40 flex items-center justify-center text-3xl leading-none transition-colors"
          >
            ‹
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next image"
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-ink-900/80 ring-1 ring-bone/20 text-bone hover:text-gold hover:ring-gold/40 flex items-center justify-center text-3xl leading-none transition-colors"
          >
            ›
          </button>

          <div
            className="relative w-full h-full max-w-6xl max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={openIndex}
              src={images[openIndex]}
              alt={`Cedar's gallery image ${openIndex + 1}`}
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
          </div>

          <p className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-bone-muted text-sm tabular-nums">
            {openIndex + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}
