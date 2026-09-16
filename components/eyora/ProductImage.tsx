"use client";

import { useState } from "react";
import Image from "next/image";
import { versionedSrc } from "@/lib/imageManifest";

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
  // Next's optimizer already refuses to resize/re-encode animated GIFs (it
  // would freeze the animation), but still runs them through sharp just to
  // detect that — a step that occasionally throws "Input Buffer is empty"
  // under load. Skipping optimization for .gif sources avoids that entirely
  // with no loss, since nothing was being optimized anyway.
  const unoptimized = src.toLowerCase().endsWith(".gif");

  return (
    <>
      <div
        aria-hidden
        className={`absolute inset-0 shimmer-placeholder transition-opacity duration-300 ${loaded ? "opacity-0" : "opacity-100"}`}
      />
      <Image
        src={versionedSrc(src)}
        alt={alt}
        fill
        quality={quality}
        priority={priority}
        unoptimized={unoptimized}
        sizes={sizes}
        className={`${className} transition-opacity duration-500 ease-out ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setLoaded(true)}
      />
    </>
  );
}
