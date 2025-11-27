import React, { useState } from "react";
import { ChevronDown, CheckCircle2, Zap } from "lucide-react";

const FAQItem = ({ question, answer, index, isOpen, onClick }) => {
  return (
    <div
      className="group relative mb-3 sm:mb-4"
      style={{
        animation: `slideUp 0.6s ease-out ${0.1 + index * 0.08}s both`,
      }}
    >
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <button onClick={onClick} className="w-full relative text-left">
        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-yellow-500/0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div
          className={`relative rounded-2xl border-2 transition-all duration-300 backdrop-blur-sm px-4 py-4 sm:px-5 sm:py-5 md:px-6 md:py-6 ${isOpen
              ? "bg-gradient-to-br from-slate-900/80 to-slate-950/80 border-yellow-500/50 shadow-lg shadow-yellow-500/10"
              : "bg-gradient-to-br from-slate-900/60 to-slate-950/60 border-slate-800/60 hover:border-yellow-500/30"
            }`}
        >
          {/* Question Header */}
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            <h3
              className={`text-base sm:text-lg md:text-xl font-bold transition-colors ${isOpen
                  ? "text-yellow-300"
                  : "text-white group-hover:text-yellow-200"
                }`}
            >
              {question}
            </h3>
            <ChevronDown
              className={`w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                }`}
            />
          </div>

          {/* Answer */}
          {isOpen && (
            <div className="mt-4 pt-4 border-t border-slate-700/50">
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base md:text-lg">
                {answer}
              </p>
            </div>
          )}

          {/* Bottom Accent */}
          <div
            className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent transition-opacity duration-300 rounded-b-2xl ${isOpen ? "opacity-100" : "opacity-0"
              }`}
          />
        </div>
      </button>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is included in the MLM investment plan?",
      answer:
        "You get access to your personal dashboard, detailed plan structure, level-wise income chart, referral link, regular updates, basic training resources and ongoing support from our team and upline leaders.",
    },
    {
      question: "Is my income guaranteed in this MLM plan?",
      answer:
        "No, there is no fixed or guaranteed income. Your earnings depend on your package, team size, activity of your downline and overall network performance. We provide a clear payout structure, but actual results vary from member to member.",
    },
    {
      question: "How and when can I withdraw my earnings?",
      answer:
        "You can request withdrawals once you reach the minimum withdrawal limit mentioned in the plan. Payouts are processed to your bank, UPI or wallet as per the options available in your country, usually within the specified processing time.",
    },
    {
      question: "What is the difference between direct and level income?",
      answer:
        "Direct income is the commission you earn when someone joins or activates a plan using your referral link. Level income is the bonus you receive from the investments and activity of your team across multiple levels in your downline, as per the plan.",
    },
    {
      question: "How do I start with this MLM investment opportunity?",
      answer:
        "Create your account, choose and activate an investment package, verify your details and start sharing your referral link. You’ll get a step-by-step onboarding guide and support to help you build and grow your team.",
    },
  ];

  return (
    <section id="faq" className="relative bg-black text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-black to-black" />

        <div className="absolute top-0 left-0 w-[120%] h-[150%] bg-[conic-gradient(from_180deg_at_50%_50%,#fbbf24_0%,#facc15_25%,#3b82f6_50%,#9333ea_75%,#fbbf24_100%)] opacity-[0.07] blur-[120px] animate-aurora" />
        <div className="absolute bottom-0 right-0 w-[120%] h-[150%] bg-[conic-gradient(from_0deg_at_50%_50%,#3b82f6_0%,#facc15_25%,#fbbf24_50%,#9333ea_75%,#3b82f6_100%)] opacity-[0.05] blur-[150px] animate-aurora-reverse" />

        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400/50 rounded-full blur-sm"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${2 + Math.random() * 4}s ease-in-out infinite`,
              opacity: 0.4 + Math.random() * 0.4,
            }}
          />
        ))}

        <style>{`
          @keyframes aurora {
            0% { transform: translateX(-10%) translateY(-10%) rotate(0deg); }
            50% { transform: translateX(10%) translateY(10%) rotate(180deg); }
            100% { transform: translateX(-10%) translateY(-10%) rotate(360deg); }
          }
          @keyframes aurora-reverse {
            0% { transform: translateX(10%) translateY(10%) rotate(0deg); }
            50% { transform: translateX(-10%) translateY(-10%) rotate(-180deg); }
            100% { transform: translateX(10%) translateY(10%) rotate(-360deg); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-aurora {
            animation: aurora 20s ease-in-out infinite alternate;
          }
          .animate-aurora-reverse {
            animation: aurora-reverse 25s ease-in-out infinite alternate;
          }
        `}</style>
      </div>

      <div className="relative w-full md:w-[70%] lg:w-[60%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <p className="text-yellow-400 text-xs sm:text-sm md:text-base font-semibold uppercase tracking-[0.25em] mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 sm:mb-6 leading-tight">
            MLM Investment
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            Clear answers about our MLM-based investment plan, payouts and
            process so you can start with confidence and realistic expectations.
          </p>
        </div>

        <div className="space-y-2 sm:space-y-3 mb-12 sm:mb-16">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
              isOpen={openIndex === index}
              onClick={() =>
                setOpenIndex(openIndex === index ? -1 : index)
              }
            />
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block max-w-4xl">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6">
              Build long-term income with our{" "}
              <span className="text-yellow-400">structured MLM plan</span>.
            </h3>

            <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-7 justify-center">
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0" />
              <p className="text-sm sm:text-base md:text-lg font-bold text-white">
                Transparent plan · Real products · Multi-level earnings
              </p>
            </div>

            <p className="text-slate-300 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
              Start with a plan that matches your budget and growth speed. Learn
              the system, support your team and unlock multiple income streams
              through a clear and ethical MLM structure.
            </p>

            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-sm sm:text-base md:text-lg rounded-full hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 transform hover:scale-105">
              Get Started with Our MLM Plan{" "}
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 inline-block ml-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
