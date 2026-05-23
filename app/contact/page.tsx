import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#ece6f3] text-[#5b4a72] font-sans flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-4">
        Ever<span className="font-bold">play</span>
      </h1>
      <div className="w-40 h-[2px] bg-[#8f79b4] mb-8"></div>
      <p className="text-xl text-[#6d5a87] mb-12">联系我们</p>
      <Link
        href="/"
        scroll={false}
        className="px-6 py-3 rounded-2xl border border-[#8f79b4] text-[#6d5a87] text-lg hover:text-[#a07cc5] hover:bg-[#e6d9f6] hover:scale-105 transition inline-block"
      >
        返回首页
      </Link>
    </div>
  );
}