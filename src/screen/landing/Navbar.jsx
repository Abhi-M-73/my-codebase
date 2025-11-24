import { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (open) {
      setOpen(false);
      enablePageScroll();
    }
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggle = () => {
    setOpen((prev) => {
      const next = !prev;
      next ? disablePageScroll() : enablePageScroll();
      return next;
    });
  };

  return (
    <header
      className={[
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-black/60 border-b border-yellow-500/20 shadow-[0_6px_30px_-10px_rgba(251,191,36,0.25)]"
          : "bg-black/30 border-b border-white/5"
      ].join(" ")}
      role="banner"
    >
      {/* thin gradient line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-600/60 opacity-70" />

      <div className="w-full bg-black/80 px-4 sm:px-6 py-5 lg:px-8 mx-auto border-b border-yellow-400/20 ">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-3 group"
            aria-label="Go to home"
          >
            {/* <img src={nexoLogo1} alt="" className="w-10 h-10" /> */}
            <span className="text-3xl text-white font-extrabold tracking-tight">
              INVESTMENT <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">KING</span>
            </span>
            <span className="ml-1 h-2 w-2 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(251,191,36,0.8)] group-hover:scale-110 transition" />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  [
                    "relative text-lg font-semibold transition-colors",
                    "text-slate-200 hover:text-yellow-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/60 rounded",
                    "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-yellow-400 after:to-yellow-600 after:transition-all after:duration-300 hover:after:w-full",
                    isActive ? "text-yellow-300 after:w-full" : ""
                  ].join(" ")
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* CTA */}
            <button
              onClick={() => navigate("/login")}
              className="relative ml-2 inline-flex items-center justify-center rounded-full px-5 py-2 text-black font-bold text-lg
                         bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-[0_8px_24px_rgba(251,191,36,0.35)]
                         transition-transform hover:scale-[1.03] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
            >
              <span className="relative z-10">Join Now</span>
              {/* shine */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-full overflow-hidden"
              >
                <span className="absolute inset-0 translate-x-[-120%] h-full w-1/3 bg-white/25 skew-x-12 animate-[shimmer_2s_infinite]" />
              </span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggle}
            aria-label="Toggle navigation"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg border border-yellow-400/30 text-yellow-300 hover:bg-yellow-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/60"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Backdrop for mobile drawer */}
      <div
        onClick={() => open && toggle()}
        className={[
          "lg:hidden fixed inset-0 z-40 transition",
          open ? "bg-black/60 backdrop-blur-[2px] opacity-100 visible" : "opacity-0 invisible"
        ].join(" ")}
      />

      {/* Mobile Drawer */}
      <div
        id="mobile-drawer"
        className={[
          "lg:hidden fixed top-[2px] left-0 right-0 z-50 mx-3 rounded-2xl",
          "border border-yellow-400/20 bg-black/90 supports-[backdrop-filter]:backdrop-blur-2xl",
          "transition-all duration-300",
          open ? "translate-y-[70px] opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"
        ].join(" ")}
      >
        <nav className="py-4" aria-label="Mobile">
          <ul className="px-4 flex flex-col gap-2">
            {NAV_LINKS.map((link, i) => (
              <li
                key={link.name}
                style={{ animation: `slideUp 0.35s ease ${0.03 * i}s both` }}
                className="rounded-lg"
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    [
                      "block w-full rounded-xl px-4 py-3 text-2xl font-semibold",
                      "text-slate-200 hover:text-yellow-300 hover:bg-yellow-500/10",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/60",
                      isActive ? "text-yellow-300 bg-yellow-500/10" : ""
                    ].join(" ")
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <li style={{ animation: "slideUp 0.35s ease 0.2s both" }}>
              <button
                onClick={() => navigate("/login")}
                className="w-full rounded-xl px-4 py-4 text-2xl font-bold text-black bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-[0_8px_24px_rgba(251,191,36,0.35)]
                           hover:scale-[1.02] active:scale-95 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/60"
              >
                Join Now
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* local keyframes for small flourishes */}
      <style>{`
        @keyframes shimmer { 0%{transform:translateX(-120%)} 100%{transform:translateX(220%)} }
        @keyframes slideUp { from{opacity:0; transform:translateY(10px)} to{opacity:1; transform:translateY(0)} }
      `}</style>
    </header>
  );
}