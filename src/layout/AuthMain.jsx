import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const AuthMain = ({ inner, name }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const [phase, setPhase] = useState("enter");

    // route change with animation
    const handleRouteChange = (path) => {
        if (path === location.pathname) return;

        setPhase("exit"); // LEFT slide

        setTimeout(() => {
            navigate(path);     // route change
            setPhase("enter");  // RIGHT slide for new page
        }, 400); // must match animation duration
    };

    return (
        <div className="mainBgColor min-h-screen w-full flex items-center justify-center md:p-5 p-1 relative overflow-hidden">
            <div className="w-full max-w-6xl flex gap-10 relative z-10">

                {/* LEFT SIDE */}
                <div className="w-1/2 md:flex flex-col justify-center hidden">
                    <div className="mb-12">
                        <Link to="/" className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-[var(--btnColor)] rounded-lg flex items-center justify-center">
                                <svg
                                    className="w-7 h-7 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                </svg>
                            </div>
                            <span className="text-3xl font-bold text-white">
                                {name || "BrandName"}
                            </span>
                        </Link>

                        <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
                            Start Your <br />
                            <span className="text-[var(--btnColor)]">
                                Amazing Journey
                            </span>
                        </h1>

                        <p className="text-gray-300 text-xl leading-relaxed">
                            Experience the next generation of secure authentication.
                            Built for speed, designed for simplicity.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-12">
                        <div className="bg-black/5 backdrop-blur-lg rounded-xl p-4 border border-gray-700">
                            <div className="text-3xl font-bold text-white mb-1">10K+</div>
                            <div className="text-[var(--btnColor)] text-sm">Active Users</div>
                        </div>
                        <div className="bg-black/5 backdrop-blur-lg rounded-xl p-4 border border-gray-700">
                            <div className="text-3xl font-bold text-white mb-1">97.9%</div>
                            <div className="text-[var(--btnColor)] text-sm">Uptime</div>
                        </div>
                        <div className="bg-black/5 backdrop-blur-lg rounded-xl p-4 border border-gray-700">
                            <div className="text-3xl font-bold text-white mb-1">4.3★</div>
                            <div className="text-[var(--btnColor)] text-sm">Rating</div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE (ANIMATED INNER) */}
                <div className="md:w-1/2 w-full flex items-center justify-center overflow-hidden">
                    <div
                        className={`
              w-full max-w-xl bg-black/50 backdrop-blur-xl p-8 rounded-3xl
              border border-gray-700 shadow-2xl
              transition-all duration-400 ease-in-out
              ${phase === "enter"
                                ? "translate-x-0 opacity-100"
                                : "-translate-x-full opacity-0"
                            }
            `}
                    >
                        {/* Pass this function to inner forms */}
                        {React.cloneElement(inner, {
                            onNavigate: handleRouteChange,
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthMain;
