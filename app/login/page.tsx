"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";


export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toast, setToast] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setToast("你暂时没有账号哟，注册一个试试嘛～");
      setTimeout(() => setToast(""), 3500);
      return;
    }
    // 正常登录逻辑
  };

  return (
    <div className="min-h-screen bg-[#ece6f3] text-[#5B4A7A] font-sans flex items-center justify-center p-4 md:p-8">

      {/* 返回首页 */}
      <a href="/everplay/" className="fixed top-6 left-6 z-40 flex items-center gap-1.5 text-sm text-[#9C7BFF] hover:text-[#7d5ce5] transition-colors bg-white/60 backdrop-blur-sm rounded-xl px-3 py-2 border border-[#dcd0f0]">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        返回首页
      </a>

      {/* 主容器 */}
      <div className="w-full max-w-md rounded-[40px] overflow-hidden">
        {/* 登录卡片 */}
        <div className="bg-white/60 backdrop-blur-xl px-8 py-12 md:px-14 md:py-16 flex flex-col">
          {/* Logo 区域 */}
          <div className="flex items-center gap-3 mb-10">
            <Image
              src="/everplay/logo.png"
              alt="Everplay Logo"
              width={40}
              height={40}
              unoptimized
              className="w-9 h-9 object-contain"
            />
            <span className="text-xl font-light tracking-wide text-[#5B4A7A]">
              Ever<span className="font-semibold">play</span>
            </span>
          </div>

          {/* 标题 */}
          <h1 className="text-3xl md:text-4xl font-light tracking-wide mb-2">
            欢迎回来 ✦
          </h1>
          <p className="text-[#7a6b95] text-sm md:text-base mb-10 leading-relaxed">
            登录你的 Everplay 账号，继续探索无限世界
          </p>

          {/* 表单 */}
          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            {/* 邮箱/用户名 */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9C7BFF]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="邮箱或用户名"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/70 border border-[#dcd0f0] text-[#5B4A7A] placeholder-[#b8a8d0] outline-none transition-all duration-300 focus:border-[#9C7BFF] focus:bg-white hover:border-[#c4b0f0] text-sm"
              />
            </div>

            {/* 密码 */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9C7BFF]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="密码"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-12 py-3.5 rounded-2xl bg-white/70 border border-[#dcd0f0] text-[#5B4A7A] placeholder-[#b8a8d0] outline-none transition-all duration-300 focus:border-[#9C7BFF] focus:bg-white hover:border-[#c4b0f0] text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#b8a8d0] hover:text-[#9C7BFF] transition-colors"
                tabIndex={-1}
              >
                {showPassword ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                    <path d="m14.12 14.12a3 3 0 1 1-4.24-4.24" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>

            {/* 记住我 + 忘记密码 */}
            <div className="flex items-center justify-between mt-1">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-5 h-5 rounded-lg border border-[#d4c8f0] bg-white/70 flex items-center justify-center transition-all peer-checked:bg-[#9C7BFF] peer-checked:border-[#9C7BFF] group-hover:border-[#9C7BFF]">
                    {rememberMe && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-sm text-[#7a6b95] group-hover:text-[#5B4A7A] transition-colors">
                  记住我
                </span>
              </label>

              <Link
                href="/forgot-password"
                className="text-sm text-[#9C7BFF] hover:text-[#7d5ce5] transition-colors"
              >
                忘记密码？
              </Link>
            </div>

            {/* 主按钮 */}
            <button
              type="submit"
              className="mt-2 w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#9C7BFF] to-[#b392f0] text-white text-base font-medium tracking-wide hover:from-[#8d6aef] hover:to-[#a580e8] transition-all duration-300 backdrop-blur-sm"
            >
              登录 →
            </button>
          </form>

          {/* 分隔线 */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-[1px] bg-[#e0d4f4]" />
            <span className="text-xs text-[#b8a8d0]">或</span>
            <div className="flex-1 h-[1px] bg-[#e0d4f4]" />
          </div>

          {/* 第三方登录 */}
          <div className="flex gap-3">
            <button className="flex-1 py-3 rounded-2xl bg-white/50 border border-[#e8dcf6] flex items-center justify-center gap-2 text-sm text-[#6d5a87] hover:bg-white hover:border-[#c4b0f0] transition-all">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#5865F2">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              Discord
            </button>
            <button className="flex-1 py-3 rounded-2xl bg-white/50 border border-[#e8dcf6] flex items-center justify-center gap-2 text-sm text-[#6d5a87] hover:bg-white hover:border-[#c4b0f0] transition-all">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#4285F4">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google
            </button>
            <button className="flex-1 py-3 rounded-2xl bg-white/50 border border-[#e8dcf6] flex items-center justify-center gap-2 text-sm text-[#6d5a87] hover:bg-white hover:border-[#c4b0f0] transition-all">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#24292f">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              GitHub
            </button>
          </div>

          {/* 注册引导 */}
          <p className="text-center text-sm text-[#7a6b95] mt-8">
            还没有账号？{" "}
            <Link href="/register" className="text-[#9C7BFF] hover:text-[#7d5ce5] font-medium transition-colors">
              立即注册
            </Link>
          </p>
        </div>

        </div>

      {/* 提示弹窗 */}
      {toast && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 animate-bounce-in">
          <div className="bg-white/95 backdrop-blur-md border border-[#dcd0f0] rounded-2xl px-6 py-4 shadow-lg flex items-center gap-3">
            <span className="text-xl">👋</span>
            <div>
              <p className="text-[#5B4A7A] text-sm font-medium">{toast}</p>
              <div className="flex items-center gap-3 mt-2">
                <a
                  href="/everplay/register"
                  className="text-xs bg-[#9C7BFF] text-white px-3 py-1 rounded-full hover:bg-[#8d6aef] transition-colors"
                >
                  去注册
                </a>
                <button
                  onClick={() => setToast("")}
                  className="text-xs text-[#b8a8d0] hover:text-[#5B4A7A]"
                >
                  稍后再说
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 底部版权 */}
      <div className="fixed bottom-6 left-0 right-0 text-center text-xs text-[#b8a8d0] z-10">
        &copy; 2026 Everplay Studio
      </div>
    </div>
  );
}