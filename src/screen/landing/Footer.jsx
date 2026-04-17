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
import { MainContent } from "../../utils/mainContent";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-black via-slate-950 to-slate-900 text-white overflow-hidden">

      {/* Decorative Elements */}
      <div className="absolute top-0 left-10 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-10 w-40 h-40 bg-yellow-600/5 rounded-full blur-3xl opacity-30" />

      <div className="relative z-10 md:w-[90%] w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 pb-12 sm:pb-16">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full" />
              <h2 className="text-xl sm:text-2xl font-bold">
                Trading KINGS
              </h2>
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
              Build Smart Income
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                with MLM System
              </span>
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Simple and transparent MLM system designed for steady income growth and scalable network building.
            </p>

            {/* Social */}
            <div className="flex gap-4 mt-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg hover:bg-yellow-500/20 transition"
                >
                  <Icon className="w-5 h-5 text-yellow-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full" />
              <h3 className="text-xl sm:text-2xl font-bold">
                WHY CHOOSE US
              </h3>
            </div>

            <h4 className="text-lg sm:text-xl font-semibold mb-4">
              Why Choose Us
            </h4>

            <div className="space-y-3 text-slate-300 text-sm sm:text-base mb-6">
              <p>• Easy to start and manage</p>
              <p>• Transparent earning system</p>
              <p>• Fast-growing community</p>
              <p>• Reliable support team</p>
            </div>

            <button className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-lg hover:scale-105 transition">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Contact */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full" />
              <h3 className="text-xl sm:text-2xl font-bold">
                CONTACT US
              </h3>
            </div>

            <div className="space-y-5">

              {/* Address */}
              <div className="flex gap-3">
                <MapPin className="w-6 h-6 text-yellow-400" />
                <p className="text-slate-300 text-sm">
                  {MainContent.address}
                </p>
              </div>

              {/* Email */}
              <a
                href={`mailto:${MainContent.email}`}
                className="flex gap-3 hover:opacity-80"
              >
                <Mail className="w-6 h-6 text-yellow-400" />
                <p className="text-slate-300 text-sm">
                  {MainContent.email}
                </p>
              </a>

              {/* Telegram */}
              <a
                href={MainContent.telegram_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 hover:opacity-80"
              >
                <Send className="w-6 h-6 text-yellow-400" />
                <p className="text-slate-300 text-sm">
                  Join us on Telegram
                </p>
              </a>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-400/40 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate-300">
          <p>© {currentYear} Trading Kings. All rights reserved.</p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <a href="#" className="hover:text-yellow-400">Privacy</a>
            <a href="#" className="hover:text-yellow-400">Terms</a>
          </div>
        </div>
      </div>

      {/* Floating Chat */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-14 h-14 bg-gradient-to-r from-yellow-400 to-yellow-200 text-black rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition">
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>

    </footer>
  );
};

export default Footer;