"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function Loader() {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setGone(true), 2400);
    return () => clearTimeout(t);
  }, []);

  if (gone) return null;

  return (
    <div className="loader-curtain fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cocoa">
      <div className="float-slow px-6">
        <Image
          src="/logo.png"
          alt="Cookie Pookie"
          width={320}
          height={140}
          className="h-auto max-h-36 w-auto object-contain md:max-h-48"
          priority
        />
      </div>
      <p className="mt-6 font-display text-lg tracking-[0.4em] text-cream/80">
        WARMING THE OVEN
      </p>
    </div>
  );
}
