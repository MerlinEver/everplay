"use client";

import { useEffect, useRef, useState } from "react";

export default function Signature() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="px-8 py-20 flex flex-col items-center gap-3">
      <p className="text-[#8a7ba0] text-[0.65rem] tracking-[0.35em] uppercase mb-2">
        Founder &amp; Designer
      </p>
      <div
        className={`transition-all duration-1000 ease-out ${
          animate ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-90"
        }`}
      >
        <svg
          viewBox="0 0 520 140"
          className="w-[280px] h-[80px] md:w-[380px] md:h-[105px]"
        >
          <text
            x="260"
            y="108"
            textAnchor="middle"
            fill="#5b4a72"
            fontSize="100"
            fontFamily="'Caveat', 'Dancing Script', 'Brush Script MT', cursive"
            fontWeight="700"
          >
            Merlin
          </text>
        </svg>
      </div>
    </section>
  );
}