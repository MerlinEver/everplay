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
      <svg
        viewBox="0 0 520 140"
        className="w-[280px] h-[80px] md:w-[380px] md:h-[105px]"
      >
        <text
          x="260"
          y="108"
          textAnchor="middle"
          fill="transparent"
          stroke="#5b4a72"
          strokeWidth="1.2"
          fontSize="100"
          fontFamily="'Caveat', 'Dancing Script', 'Brush Script MT', cursive"
          fontWeight="700"
          strokeDasharray="900"
          strokeDashoffset={animate ? "0" : "900"}
          style={{ transition: "stroke-dashoffset 3s ease-in-out" }}
        >
          Merlin
        </text>
        <text
          x="260"
          y="108"
          textAnchor="middle"
          fill="#5b4a72"
          fontSize="100"
          fontFamily="'Caveat', 'Dancing Script', 'Brush Script MT', cursive"
          fontWeight="700"
          opacity={animate ? "1" : "0"}
          style={{ transition: "opacity 0.4s ease-in-out 2.6s" }}
        >
          Merlin
        </text>
      </svg>
    </section>
  );
}