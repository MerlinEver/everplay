import type { Metadata, Viewport } from "next";
import LoadingScreen from "./components/LoadingScreen";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Everplay - 游戏 × 音乐 × 科技",
  description: "让游戏改变生活，让每个人都玩到我们的游戏。Everplay 是一个融合音乐灵魂、幻想世界与未来科技的游戏品牌。",
  keywords: ["Everplay", "游戏", "音乐", "科技", "独立游戏", "游戏品牌", "音乐游戏"],
  authors: [{ name: "Merlin" }],
  openGraph: {
    title: "Everplay - 游戏 × 音乐 × 科技",
    description: "让游戏改变生活，让每个人都玩到我们的游戏。",
    url: "https://everplay-a8mh.vercel.app",
    siteName: "Everplay",
    locale: "zh_CN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/everplay/logo.png",
    apple: "/everplay/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="antialiased">
      <body className="antialiased">
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
