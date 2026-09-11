import { useEffect, useState } from "react";
import logo from "@/assets/logo.png.asset.json";

export function Loader() {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setGone(true), 2600);
    return () => clearTimeout(t);
  }, []);

  if (gone) return null;

  return (
    <div className="loader-curtain fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cocoa">
      <img
        src={logo.url}
        alt="Cookie Pookie"
        className="float-slow w-44 md:w-56"
        width={224}
        height={224}
      />
      <p className="mt-6 font-display text-lg tracking-[0.4em] text-cream/80">
        WARMING THE OVEN
      </p>
    </div>
  );
}
