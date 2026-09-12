"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductImage({
  src,
  alt,
  sizes,
  className = "",
  quality = 92,
  priority,
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  quality?: number;
  priority?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <div
        aria-hidden
        className={`absolute inset-0 shimmer-placeholder transition-opacity duration-300 ${loaded ? "opacity-0" : "opacity-100"}`}
      />
      <Image
        src={src}
        alt={alt}
        fill
        quality={quality}
        priority={priority}
        sizes={sizes}
        className={`${className} transition-opacity duration-500 ease-out ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setLoaded(true)}
      />
    </>
  );
}
