import Link from "next/link";

export default function EverplayLandingPage() {
  return (
    <div className="min-h-screen bg-[#ece6f3] text-[#5b4a72] font-sans">
      {/* Hero */}
      <section className="relative px-8 py-20 md:px-20 flex flex-col items-center text-center">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#d9caeb] to-transparent opacity-40"></div>

        <div className="relative z-10 max-w-5xl w-full">
          <div className="flex flex-col items-center gap-6">
            <img
              src="/logo.png"
              alt="Everplay Logo"
              className="w-40 h-40 md:w-52 md:h-52 object-contain drop-shadow-2xl"
            />

            <h1 className="text-6xl md:text-8xl font-light tracking-tight">
              Ever<span className="font-bold">play</span>
            </h1>

            <div className="w-40 h-[2px] bg-[#8f79b4]"></div>

            <p className="max-w-3xl text-lg md:text-2xl leading-relaxed text-[#6d5a87]">
              让游戏改变生活，让每个人都玩到我们的游戏。
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Link href="/games" className="px-8 py-3 rounded-2xl bg-[#8f79b4] text-white text-lg shadow-lg hover:scale-105 transition inline-block">
                进入世界
              </Link>

              <Link href="/about" className="px-8 py-3 rounded-2xl border border-[#8f79b4] text-[#6d5a87] text-lg hover:bg-[#e6d9f6] transition inline-block">
                关于 Everplay
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="px-8 md:px-20 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1 rounded-full bg-[#d7c6ec] text-[#5d4b75] text-sm mb-6">
              品牌理念
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-8">
              音乐 × 游戏 × 科技
            </h2>

            <p className="text-lg leading-9 text-[#6f6186]">
              钢琴键盘象征音乐、节奏与创造力，体现 Everplay 希望通过游戏给玩家带来情感与沉浸式体验。
              游戏不仅是娱乐，更是一种生活方式和精神共鸣。
            </p>

            <p className="text-lg leading-9 text-[#6f6186] mt-6">
              标志中的“水”元素象征流动与生命力，代表品牌不断突破、持续创造。
              音乐与游戏的融合，也传达出 Everplay 对未来互动娱乐的探索。
            </p>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute inset-0 blur-3xl bg-[#c9b1e8] opacity-30 rounded-full"></div>

            <div className="relative bg-white/50 backdrop-blur-xl rounded-[32px] p-10 shadow-2xl border border-white/40 max-w-md">
              <div className="flex flex-col items-center text-center gap-5">
                <img
                  src="/logo.png"
                  alt="Everplay Symbol"
                  className="w-36 h-36 object-contain"
                />

                <h3 className="text-3xl font-light tracking-wide">
                  Ever<span className="font-semibold">play</span>
                </h3>

                <p className="text-[#726285] leading-7">
                  一个融合音乐灵魂、幻想世界与未来科技的游戏品牌。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-8 md:px-20 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-block px-4 py-1 rounded-full bg-[#d7c6ec] text-[#5d4b75] text-sm mb-5">
              Everplay Universe
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold">
              我们正在创造什么？
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: '沉浸式体验',
                desc: '通过音乐、互动与视觉设计打造具有情感共鸣的游戏世界。'
              },
              {
                title: '未来幻想风格',
                desc: '融合科技感与幻想元素，建立属于 Everplay 的独特世界观。'
              },
              {
                title: '玩家共创',
                desc: '希望每一位玩家都能在游戏中找到自己的故事与情感。'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-[28px] bg-white/60 backdrop-blur-xl border border-white/50 shadow-xl p-8 hover:-translate-y-2 transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#d8c4ef] mb-6"></div>

                <h3 className="text-2xl font-semibold mb-4">
                  {item.title}
                </h3>

                <p className="leading-8 text-[#6d5f82]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 md:px-20 py-16 border-t border-[#cdbde0]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-3xl font-light mb-3">
              Ever<span className="font-semibold">play</span>
            </h3>

            <p className="text-[#746487]">
              游戏 × 音乐 × 科技
            </p>
          </div>

          <div className="flex gap-6 text-[#756588]">
            <Link href="/about" className="hover:text-[#5b4a72] transition">关于</Link>
            <Link href="/games" className="hover:text-[#5b4a72] transition">游戏</Link>
            <Link href="/blog" className="hover:text-[#5b4a72] transition">博客</Link>
            <Link href="/contact" className="hover:text-[#5b4a72] transition">联系</Link>
          </div>

          <div className="text-center md:text-right text-[#756588] leading-8">
            <p>Founder / Game Designer</p>
            <p>Merlin</p>
            <p>contact@everplay.gg</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
