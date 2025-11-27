import React, { useEffect, useState } from "react";
import { Users, TrendingUp, Award, BarChart3 } from "lucide-react";

const StatCard = ({ Icon, value, label, duration = 2000, index }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end =
      typeof value === "number"
        ? value
        : parseInt(value.replace(/\D/g, ""), 10);

    if (!end || end <= 0) return;

    const incrementTime = Math.floor(duration / end);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration, isVisible]);

  const suffix =
    typeof value === "string" && !/\d+$/.test(value)
      ? value.replace(/[0-9]/g, "")
      : "";

  return (
    <div
      className="group relative"
      style={{
        animation: isVisible
          ? `slideUp 0.6s ease-out ${index * 0.1}s both`
          : "none",
      }}
    >
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Gradient Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-yellow-500/0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative border !border-gray-700 group-hover:border-yellow-500/50 rounded-2xl p-4 sm:p-5 transition-all duration-300 transform group-hover:scale-105">
        {/* Icon */}
        <div className="flex justify-center mb-4 sm:mb-5">
          <div className="p-2.5 sm:p-3 bg-yellow-500/10 rounded-xl group-hover:bg-yellow-500/20 transition-colors duration-300">
            <Icon className="w-7 h-7 sm:w-9 sm:h-9 text-yellow-400 transform group-hover:scale-110 transition-transform duration-300" />
          </div>
        </div>

        {/* Value */}
        <div className="text-center mb-2 sm:mb-3">
          <div className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
            {count}
            <span className="text-base sm:text-lg md:text-xl ml-1">
              {suffix}
            </span>
          </div>
        </div>

        {/* Label */}
        <p className="text-slate-200 text-xs sm:text-sm md:text-base text-center font-medium tracking-wide uppercase">
          {label}
        </p>

        {/* Bottom Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl" />
      </div>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    {
      Icon: Users,
      value: 5000,
      label: "Active MLM Investors",
    },
    {
      Icon: Award,
      value: 10,
      label: "Years of Proven Payouts",
    },
    {
      Icon: TrendingUp,
      value: 7,
      label: "Levels of Income Streams",
    },
    {
      Icon: BarChart3,
      value: 95,
      label: "Team Retention Rate (%)",
    },
  ];

  return (
    <section id="about" className="relative bg-gradient-to-br from-slate-950 to-slate-950 text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-black to-black pointer-events-none" />

      <div className="relative w-full md:w-[85%] lg:w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="text-yellow-400 text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.2em]">
              Smart MLM Investment Network
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
            Build Long-Term Wealth With
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Transparent MLM Earnings
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Join a structured MLM investment community with real products,
            weekly payouts and a clear plan to grow your passive income through
            team building and smart reinvestments.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8 sm:mb-12">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              Icon={stat.Icon}
              value={stat.value}
              label={stat.label}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
