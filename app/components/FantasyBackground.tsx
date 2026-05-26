"use client";

export default function FantasyBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* 紫色雾感渐变背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f8f4ff] to-[#e8dcf8] opacity-80" />

      {/* 云层光雾 */}
      <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#e0d0f4]/40 to-transparent" />
      <div className="absolute bottom-[15%] left-[10%] w-[300px] h-[120px] bg-white/20 rounded-full blur-3xl" />
      <div className="absolute bottom-[25%] right-[5%] w-[250px] h-[100px] bg-[#d4c0f0]/25 rounded-full blur-3xl" />
      <div className="absolute top-[20%] left-[60%] w-[200px] h-[80px] bg-white/15 rounded-full blur-3xl" />

      {/* 浮空岛 */}
      <svg
        className="absolute bottom-[8%] left-[55%] w-[200px] h-[160px] opacity-[0.12]"
        viewBox="0 0 200 160"
        fill="none"
      >
        <ellipse cx="100" cy="130" rx="90" ry="20" fill="#9C7BFF" opacity="0.3" />
        <ellipse cx="100" cy="110" rx="70" ry="30" fill="#b8a0e8" opacity="0.4" />
        <path
          d="M30 110 Q100 50 170 110"
          fill="#c4b0f0"
          opacity="0.3"
        />
      </svg>

      {/* 梦幻城堡（简化，超淡化） */}
      <svg
        className="absolute bottom-[5%] right-[8%] w-[140px] h-[180px] opacity-[0.10]"
        viewBox="0 0 140 180"
        fill="none"
      >
        <rect x="30" y="60" width="80" height="100" rx="4" fill="#9C7BFF" />
        <rect x="20" y="70" width="30" height="90" rx="3" fill="#b09ce0" />
        <rect x="90" y="70" width="30" height="90" rx="3" fill="#b09ce0" />
        <polygon points="35,30 65,60 5,60" fill="#c4b0f0" />
        <polygon points="75,30 105,60 45,60" fill="#c4b0f0" />
        <rect x="55" y="90" width="30" height="30" rx="8" fill="#d4c8f4" />
      </svg>

      {/* 紫色云海 */}
      <svg
        className="absolute bottom-0 left-0 right-0 w-full h-[200px] opacity-[0.08]"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
      >
        <ellipse cx="100" cy="180" rx="200" ry="50" fill="#9C7BFF" />
        <ellipse cx="350" cy="160" rx="250" ry="60" fill="#b8a0e8" />
        <ellipse cx="650" cy="170" rx="280" ry="55" fill="#c4b0f0" />
        <ellipse cx="950" cy="165" rx="240" ry="58" fill="#b8a0e8" />
        <ellipse cx="1150" cy="175" rx="200" ry="48" fill="#9C7BFF" />
      </svg>

      {/* 月亮 */}
      <div className="absolute top-[10%] right-[18%] w-[50px] h-[50px] rounded-full bg-white/15 blur-[2px]" />
      <div className="absolute top-[10%] right-[18%] w-[46px] h-[46px] rounded-full bg-white/10 blur-[1px]" />

      {/* 漂浮粒子 */}
      <div className="absolute top-[30%] left-[65%] w-[3px] h-[3px] rounded-full bg-[#9C7BFF]/20" />
      <div className="absolute top-[45%] right-[25%] w-[2px] h-[2px] rounded-full bg-[#b8a0e8]/25" />
      <div className="absolute top-[55%] left-[70%] w-[4px] h-[4px] rounded-full bg-[#c4b0f0]/15" />
      <div className="absolute top-[20%] right-[30%] w-[2px] h-[2px] rounded-full bg-white/20" />
      <div className="absolute top-[65%] right-[15%] w-[3px] h-[3px] rounded-full bg-[#9C7BFF]/18" />

      {/* 星空 */}
      <div className="absolute top-[8%] right-[35%] w-[2px] h-[2px] rounded-full bg-[#9C7BFF]/12" />
      <div className="absolute top-[15%] right-[22%] w-[1.5px] h-[1.5px] rounded-full bg-white/12" />
      <div className="absolute top-[12%] right-[40%] w-[2px] h-[2px] rounded-full bg-[#b8a0e8]/10" />
    </div>
  );
}