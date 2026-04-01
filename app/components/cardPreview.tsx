"use client";

import { useState } from "react";

type CardPreviewProps =
  | {
      type: "image";
      src: string;
      alt: string;
    }
  | {
      type: "iframe";
      src: string;
      title?: string;
    }
  | {
      type: "gallery";
      images: string[];
      alt?: string;
    };

export default function CardPreview(props: CardPreviewProps) {
  const [index, setIndex] = useState(0);

  if (props.type === "iframe") {
    return (
      <div className="overflow-hidden">
        <iframe
          src={props.src}
          title={props.title ?? "Embedded preview"}
          className="w-full h-[220px]"
          allowFullScreen
        />
      </div>
    );
  }

  if (props.type === "gallery") {
    const images = props.images;
    const currentImage = images[index];

    function prev(e: React.MouseEvent) {
      e.preventDefault();
      e.stopPropagation();
      setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
    }

    function next(e: React.MouseEvent) {
      e.preventDefault();
      e.stopPropagation();
      setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
    }

    return (
      <div className="relative overflow-hidden">
        <img
          src={currentImage}
          alt={props.alt ?? `Gallery image ${index + 1}`}
          className="w-full h-[220px] object-cover transition duration-500"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-white transition hover:bg-black/80"
              aria-label="Previous image"
            >
              ←
            </button>

            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-white transition hover:bg-black/80"
              aria-label="Next image"
            >
              →
            </button>

            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIndex(i);
                  }}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    i === index ? "bg-white" : "bg-white/50"
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      <img
        src={props.src}
        alt={props.alt}
        className="w-full h-[220px] object-cover transition duration-500 group-hover:scale-105"
      />
    </div>
  );
}