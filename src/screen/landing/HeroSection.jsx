import { Zap, TrendingUp, Shield, ArrowRight } from "lucide-react";
import React, { useState, useEffect } from "react";

export default function HeroSection() {

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-950 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div
            className="absolute w-96 h-96 bg-yellow-500/15 rounded-full blur-3xl"
            style={{
              top: "10%",
              left: "10%",
              animation: "float1 8s infinite ease-in-out",
            }}
          />
          <div
            className="absolute w-80 h-80 bg-yellow-600/10 rounded-full blur-3xl"
            style={{
              top: "60%",
              right: "10%",
              animation: "float2 10s infinite ease-in-out",
            }}
          />
          <div
            className="absolute w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl"
            style={{
              bottom: "10%",
              left: "50%",
              animation: "float3 12s infinite ease-in-out",
            }}
          />
        </div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(251,191,36,.1) 1px, transparent 1px),
              linear-gradient(rgba(251,191,36,.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -50px) scale(1.1); }
        }
        
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, 50px) scale(1.05); }
        }

        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(50px, 30px) scale(0.95); }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(12px); }
        }

        @keyframes glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(251, 191, 36, 0.3),
                        0 0 40px rgba(217, 119, 6, 0.2);
          }
          50% { 
            box-shadow: 0 0 40px rgba(251, 191, 36, 0.6),
                        0 0 60px rgba(217, 119, 6, 0.4);
          }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes pulse-ring {
          0%, 100% { 
            box-shadow: 0 0 0 0 rgba(251, 191, 36, 0.4);
          }
          50% { 
            box-shadow: 0 0 0 20px rgba(251, 191, 36, 0);
          }
        }

        @keyframes bounceImg {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-25px);
          }
        }

        @keyframes spinSlow { from { transform: rotate(0deg);} to { transform: rotate(360deg);} }
        @keyframes spinSlowReverse { from { transform: rotate(360deg);} to { transform: rotate(0deg);} }

        @keyframes rise {
          0%,100% { transform: translateY(0); opacity: .9; }
          50% { transform: translateY(-18px); opacity: 1; }
        }

        @keyframes tilt {
          0%,100% { transform: rotateX(12deg) rotateY(-14deg) translateY(0); }
          50% { transform: rotateX(10deg) rotateY(-10deg) translateY(-6px); }
        }

        @keyframes floatY {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes floatYSlow {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        /* SVG path dash animations */
        .animate-path {
          stroke-dasharray: 8 10;
          animation: pathMove 3.5s linear infinite;
        }
        .animate-path-slow {
          stroke-dasharray: 6 12;
          animation: pathMove 6s linear infinite;
        }
        @keyframes pathMove {
          to { stroke-dashoffset: -200; }
        }

        .animate-floatY { animation: floatY 3s ease-in-out infinite; }
        .animate-floatYSlow { animation: floatYSlow 4.5s ease-in-out infinite; }

      `}</style>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-between px-6 lg:px-16 py-32 w-full md:w-[90%] mx-auto">
        {/* Left Section */}
        <div
          className="lg:w-1/2"
          style={{
            animation: "slideInLeft 0.8s ease-out",
          }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 border border-yellow-500/40 bg-gradient-to-r from-yellow-500/10 to-yellow-600/5 group hover:bg-yellow-500/20 rounded-full mb-8 cursor-pointer transition-all duration-300 backdrop-blur-sm">
            <Zap className="w-5 h-5 text-yellow-400 animate-pulse" />
            <span className="md:text-md text-sm font-semibold text-yellow-200 group-hover:text-yellow-100">
              Smart MLM Wealth Network
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="md:text-6xl text-4xl font-bold leading-tighter mb-6">
            Build<br />
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Passive Income
            </span>
            <br />
            <span className="text-white">With Smart Levels</span>
          </h1>

          {/* Description */}
          <p className="mt-8 md:text-lg text-md text-slate-200 leading-relaxed max-w-3xl mb-10">
            Join <span className="text-yellow-300 font-bold">2,50,000+</span> active members growing their{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
              team & rewards
            </span>{" "}
            with{" "}
            <span className="font-bold text-yellow-300">
              United Kings MLM
            </span>. Unlock multiple income streams, level-wise bonuses, and automated payouts with a transparent business plan.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex md:items-center md:flex-row flex-col gap-4 mb-12">
            <button className="group relative px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl text-lg font-bold text-black shadow-2xl shadow-yellow-500/50 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/80 hover:scale-105 active:scale-95">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start Earning Today
                <ArrowRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
              </span>
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                style={{ animation: "shimmer 2s infinite" }}
              />
            </button>

            <button className="group px-8 py-3 border-2 border-yellow-500/50 bg-yellow-500/5 backdrop-blur-md rounded-xl text-lg font-bold text-yellow-200 hover:border-yellow-400/80 hover:bg-yellow-500/15 transition-all duration-300 hover:scale-105 active:scale-95">
              <span className="flex items-center justify-center gap-2">
                <Shield className="w-5 h-5" />
                View Investment Plans
              </span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-700/50">
            <div className="group cursor-pointer">
              <div className="text-3xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors">2.5L+</div>
              <p className="text-sm text-slate-300 mt-1 group-hover:text-slate-300 transition-colors">
                Active Members
              </p>
            </div>
            <div className="group cursor-pointer">
              <div className="text-3xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors">7</div>
              <p className="text-sm text-slate-300 mt-1 group-hover:text-slate-300 transition-colors">
                Income Levels
              </p>
            </div>
            <div className="group cursor-pointer">
              <div className="text-3xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors">24x7</div>
              <p className="text-sm text-slate-300 mt-1 group-hover:text-slate-300 transition-colors">
                Auto Payout System
              </p>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 flex md:flex-row flex-col md:items-center gap-4 ">
            <div className="flex items-center justify-center gap-2 px-4 py-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
              <TrendingUp className="w-4 h-4 text-yellow-400" />
              <span className="text-md font-semibold text-yellow-200">Team Bonus</span>
            </div>
            <div className="flex items-center justify-center gap-2 px-4 py-3 bg-yellow-500/10 border border-yellow-500/20 rounded-md">
              <Shield className="w-4 h-4 text-yellow-400" />
              <span className="text-md font-semibold text-yellow-200">Transparent Plan</span>
            </div>
            <div className="flex items-center justify-center gap-2 px-4 py-3 bg-yellow-500/10 border border-yellow-500/20 rounded-md">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-md font-semibold text-yellow-200">Instant Joining</span>
            </div>
          </div>
        </div>

        <div
          className="flex items-center justify-center relative mt-10 md:mt-0"
          style={{ animation: "slideInRight 0.8s ease-out 0.3s both" }}
        >
          <div className="relative w-[520px] h-[520px] flex items-center justify-center">
            <div
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[420px] h-[120px] rounded-[999px] blur-3xl opacity-70"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(251,191,36,0.35), rgba(251,191,36,0.08) 60%, transparent 70%)",
                filter: "drop-shadow(0 0 30px rgba(251,191,36,0.35))",
              }}
            />

            {/* Outer rotating ring */}
            <div
              className="absolute w-[520px] h-[520px] rounded-full pointer-events-none ring-1 ring-yellow-400/15"
            />
            <div
              className="absolute w-[520px] h-[520px] rounded-full animate-spinSlow pointer-events-none"
              style={{
                WebkitMask:
                  "radial-gradient(circle, transparent 69%, black 70%, black 100%)",
                background:
                  "conic-gradient(from 0deg, rgba(251,191,36,0.0), rgba(251,191,36,0.35), rgba(59,130,246,0.25), rgba(147,51,234,0.25), rgba(251,191,36,0.0))",
                filter: "blur(1px)",
              }}
            />

            {/* Middle ring */}
            <div
              className="absolute w-[420px] h-[420px] rounded-full animate-spinSlowReverse"
              style={{
                WebkitMask:
                  "radial-gradient(circle, transparent 64%, black 65%, black 100%)",
                background:
                  "conic-gradient(from 90deg, rgba(251,191,36,0.0), rgba(251,191,36,0.45), rgba(59,130,246,0.3), rgba(251,191,36,0.0))",
                filter: "blur(0.5px)",
              }}
            />

            {/* Inner ring */}
            <div
              className="absolute w-[320px] h-[320px] rounded-full animate-spinSlow"
              style={{
                WebkitMask:
                  "radial-gradient(circle, transparent 59%, black 60%, black 100%)",
                background:
                  "conic-gradient(from 180deg, rgba(251,191,36,0), rgba(251,191,36,0.5), rgba(251,191,36,0))",
              }}
            />

            {/* Floating candles (keep as income bars visual) */}
            {[...Array(18)].map((_, i) => {
              const left = 10 + (i * 5.2) % 80; // 10%–90%
              const height = 18 + (i % 5) * 6;  // 18–42px
              const delay = (i % 7) * 0.35;
              const top = 20 + (i % 6) * 8;     // 20%–60%
              return (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    height,
                    width: 3,
                    borderRadius: 2,
                    background:
                      "linear-gradient(180deg, rgba(251,191,36,0.9), rgba(251,191,36,0.15))",
                    boxShadow:
                      "0 0 10px rgba(251,191,36,0.5), 0 8px 24px rgba(251,191,36,0.15)",
                    animation: `rise ${4 + (i % 4)}s ease-in-out ${delay}s infinite`,
                  }}
                />
              );
            })}

            {/* Central glass card (tilted) */}
            <div
              className="relative w-[360px] h-[440px] rounded-3xl border border-yellow-400/25 bg-gradient-to-br from-yellow-400/10 to-yellow-400/0 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
              style={{
                transform: "rotateX(12deg) rotateY(-14deg)",
                animation: "tilt 6s ease-in-out infinite",
              }}
            >
              {/* Shine */}
              <div
                className="absolute inset-0 rounded-3xl opacity-30"
                style={{
                  background:
                    "linear-gradient(130deg, rgba(255,255,255,0.18), transparent 35%)",
                }}
              />
              {/* Corner badge */}
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold text-black bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-md">
                LIVE PAYOUT
              </div>

              {/* Fake chart lines (pure CSS) */}
              <div className="absolute inset-0 p-6">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(251,191,36,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.5) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                {/* Curvy path */}
                <svg
                  className="absolute inset-0"
                  viewBox="0 0 360 440"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M10,360 C60,320 110,370 160,310 C210,250 250,320 300,260"
                    fill="none"
                    stroke="rgba(251,191,36,0.9)"
                    strokeWidth="3"
                    className="animate-path"
                  />
                  <path
                    d="M10,300 C70,260 130,330 180,270 C230,210 280,280 330,220"
                    fill="none"
                    stroke="rgba(59,130,246,0.5)"
                    strokeWidth="2"
                    className="animate-path-slow"
                  />
                </svg>
                {/* Metric chips */}
                <div className="absolute bottom-6 left-6 flex gap-3 flex-wrap">
                  <div className="px-3 py-1.5 rounded-lg bg-yellow-500/15 border border-yellow-400/30 text-yellow-200 text-sm font-semibold">
                    Top 10 Leaderboard
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-400/30 text-blue-200 text-sm font-semibold">
                    Daily Reward Cycles
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-400/30 text-emerald-200 text-sm font-semibold">
                    Auto Level Upgrade
                  </div>
                </div>
              </div>
            </div>

            {/* Floating info chips around card */}
            <div className="absolute -top-2 -right-4 px-4 py-2 rounded-xl bg-yellow-500/15 border border-yellow-400/30 text-yellow-100 text-sm font-bold animate-floatY">
              ROYAL CROWN PLAN
            </div>
            <div className="absolute top-[22%] -left-6 px-3 py-1.5 rounded-lg bg-slate-900/70 border border-yellow-400/30 text-yellow-200 text-xs font-semibold animate-floatYSlow">
              Payout Released ✓
            </div>
            <div className="absolute bottom-[14%] -right-10 px-3 py-1.5 rounded-lg bg-slate-900/70 border border-yellow-400/30 text-yellow-200 text-xs font-semibold animate-floatY">
              Rank Up Achieved →
            </div>
          </div>
        </div>

      </div>

      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer "
        style={{
          animation: "bounce 2s infinite",
        }}
      >
        <div className="flex flex-col items-center justify-center gap-3">
          <span className="text-sm text-yellow-400/70 font-bold uppercase tracking-widest">
            Explore More Plans
          </span>
          <div className="w-8 h-11 border-2 border-yellow-500/40 rounded-full flex justify-center">
            <div className="w-3 h-3 bg-gradient-to-b from-yellow-400 to-transparent rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
