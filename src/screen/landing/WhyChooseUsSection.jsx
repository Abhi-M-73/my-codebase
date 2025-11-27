import React from "react";
import { DollarSign, Shield, Zap } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description, index }) => {
  return (
    <div
      className="group relative"
      style={{
        animation: `slideUp 0.6s ease-out ${0.3 + index * 0.1}s both`,
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

      {/* Glow background behind card */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-yellow-500/0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative bg-gradient-to-br from-slate-900/50 to-slate-950/50 border border-gray-700 group-hover:border-yellow-500/30 rounded-2xl p-5 sm:p-6 lg:p-8 transition-all duration-300 backdrop-blur-sm">
        <div className="flex items-start gap-4 mb-4 sm:mb-5">
          <div className="p-2.5 sm:p-3 bg-yellow-500/10 rounded-xl group-hover:bg-yellow-500/20 transition-colors duration-300">
            <Icon className="w-7 h-7 sm:w-9 sm:h-9 text-yellow-400" />
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-yellow-300 transition-colors">
          {title}
        </h3>
        <p className="text-slate-400 text-sm sm:text-base md:text-sm lg:text-base leading-relaxed">
          {description}
        </p>

        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl" />
      </div>
    </div>
  );
};

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: DollarSign,
      title: "Smart Entry & Strong ROI Plan",
      description:
        "Start with a comfortable investment and grow through multiple MLM levels. Our comp plan rewards both product usage and team building for long-term income.",
    },
    {
      icon: Shield,
      title: "Transparent & Secure Structure",
      description:
        "Clear payout charts, real products and documented policies. You always know how earnings are generated and how bonuses are calculated at every level.",
    },
    {
      icon: Zap,
      title: "Fast Payouts & Active Support",
      description:
        "Get regular commission payouts, instant dashboard updates and a dedicated support team to guide you and your downline at every step.",
    },
  ];

  return (
    <section id="features" className="relative bg-black text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* ✨ Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-950 animate-gradientMove" />

      {/* ⚡ Light streak animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_30%_30%,rgba(255,215,0,0.1),transparent_70%)] animate-slowRotate" />
      </div>

      {/* ✨ Floating yellow particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-yellow-400/40 rounded-full animate-float"
            style={{
              width: `${Math.random() * 5 + 3}px`,
              height: `${Math.random() * 5 + 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${4 + Math.random() * 4}s`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Animations for background */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradientMove {
          background-size: 200% 200%;
          animation: gradientMove 12s ease infinite;
        }

        @keyframes slowRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .animate-slowRotate {
          animation: slowRotate 60s linear infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.7; }
          50% { transform: translateY(-20px) scale(1.1); opacity: 1; }
        }

        .animate-float {
          animation: float ease-in-out infinite;
        }
      `}</style>

      {/* Content */}
      <div className="relative w-full md:w-[85%] lg:w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <p className="text-yellow-400 text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.25em] mb-3 sm:mb-4">
            Trusted MLM Investment Community
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Why Choose Our
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              MLM Investment Network?
            </span>
          </h2>

          {/* Description */}
          <div className="max-w-3xl mx-auto mb-6 sm:mb-8">
            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
              We bring together a product-based MLM model, clear income levels
              and mentorship-driven growth. Build your team, earn multi-level
              commissions and create a stable passive income stream with a
              structured and ethical MLM investment plan.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10 lg:mb-14">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg md:text-xl bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 transform hover:scale-105">
            Join Our MLM Network <Zap className="inline-block ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
