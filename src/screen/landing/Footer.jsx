import React from "react";
import {
  Mail,
  MapPin,
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-black via-slate-950 to-slate-900 text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-10 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-10 w-40 h-40 bg-yellow-600/5 rounded-full blur-3xl opacity-30" />

      <div className="relative z-10 md:w-[90%] w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 pb-12 sm:pb-16">
          {/* Left Section - Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-2 h-8 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full" />
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Trading KINGS
              </h2>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Unlock
              <br />
              <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                Your MLM
              </span>
              <br />
              Income Potential.
            </h3>

            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
              Build long-term income with a structured MLM investment plan,
              clear level-wise payouts and real products that support sustainable
              network growth.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4 mt-4 sm:mt-6">
              <a
                href="#"
                className="group p-2.5 sm:p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg hover:bg-yellow-500/20 hover:border-yellow-400/50 transition-all"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 group-hover:text-yellow-300" />
              </a>
              <a
                href="#"
                className="group p-2.5 sm:p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg hover:bg-yellow-500/20 hover:border-yellow-400/50 transition-all"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 group-hover:text-yellow-300" />
              </a>
              <a
                href="#"
                className="group p-2.5 sm:p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg hover:bg-yellow-500/20 hover:border-yellow-400/50 transition-all"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 group-hover:text-yellow-300" />
              </a>
              <a
                href="#"
                className="group p-2.5 sm:p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg hover:bg-yellow-500/20 hover:border-yellow-400/50 transition-all"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 group-hover:text-yellow-300" />
              </a>
            </div>
          </div>

          {/* Middle Section - Why Choose Us */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-2 h-8 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full" />
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                WHY CHOOSE US
              </h3>
            </div>

            <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 leading-tight">
              Why Choose Trading Kings for Your MLM Investment Journey
            </h4>

            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
              <p className="text-slate-300 leading-relaxed">
                <span className="font-bold text-yellow-300">
                  Get Started Today
                </span>{" "}
                with a clear, step-by-step MLM plan. Activate your package,
                start building your network and unlock multi-level income from
                your growing team.
              </p>

              <p className="text-slate-300 leading-relaxed">
                Trusted by a fast-growing community of investors and leaders,
                Trading Kings focuses on transparency, realistic expectations and
                long-term wealth building through a structured MLM system.
              </p>
            </div>

            <button className="group inline-flex text-sm sm:text-base md:text-lg items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-yellow-500/50 transition-all transform hover:scale-105">
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Section - Contact */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-2 h-8 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full" />
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                CONTACT US
              </h3>
            </div>

            <div className="space-y-5 sm:space-y-6">
              {/* Address */}
              <div className="group">
                <div className="flex gap-3 items-start">
                  <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400 flex-shrink-0 mt-1 group-hover:text-yellow-300 transition-colors" />
                  <div>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed group-hover:text-slate-100 transition-colors">
                      11B S Governors Ave STE 23271, Dover, DE 19904
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="group cursor-pointer">
                <a
                  href="mailto:contact@unitedkings.net"
                  className="flex gap-3 items-start hover:opacity-80 transition-opacity"
                >
                  <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400 flex-shrink-0 mt-1 group-hover:text-yellow-300 transition-colors" />
                  <div>
                    <p className="text-slate-300 text-sm sm:text-base group-hover:text-yellow-200 transition-colors font-medium">
                      contact@unitedkings.net
                    </p>
                  </div>
                </a>
              </div>

              {/* Telegram */}
              <div className="group cursor-pointer">
                <a
                  href="https://t.me/uktyler"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 items-start hover:opacity-80 transition-opacity"
                >
                  <Send className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400 flex-shrink-0 mt-1 group-hover:text-yellow-300 transition-colors" />
                  <div>
                    <p className="text-slate-300 text-sm sm:text-base group-hover:text-yellow-200 transition-colors font-medium">
                      Telegram: @uktyler
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-slate-400/40 pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-slate-200 text-xs sm:text-sm md:text-base text-center md:text-left">
            &copy; {currentYear} Trading Kings. All rights reserved. | MLM
            Investment & Earnings Platform
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm md:text-base justify-center md:justify-end">
            <a
              href="#"
              className="text-slate-200 hover:text-yellow-400 transition-colors"
            >
              Risk Disclaimer
            </a>
            <a
              href="#"
              className="text-slate-200 hover:text-yellow-400 transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-slate-200 hover:text-yellow-400 transition-colors"
            >
              Privacy
            </a>
          </div>
        </div>
      </div>

      {/* Floating Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="group relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-yellow-400 to-yellow-200 text-black rounded-full shadow-2xl shadow-yellow-500/50 flex items-center justify-center font-bold text-sm sm:text-lg hover:scale-110 transition-all">
          <span className="group-hover:opacity-0 transition-opacity">
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          </span>
          <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity">
            Chat
          </span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
