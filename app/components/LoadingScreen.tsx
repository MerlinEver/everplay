"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // wait for page content to render, then start fade
    const timer1 = setTimeout(() => setFadeOut(true), 2000);
    // remove from DOM after fade completes
    const timer2 = setTimeout(() => setVisible(false), 2800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#ece6f3] transition-opacity duration-800 ease-in-out ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="animate-loading-logo">
        <Image
          src="/everplay/logo.png"
          alt="Everplay"
          width={120}
          height={120}
          unoptimized
          className="object-contain"
        />
      </div>
    </div>
  );
}