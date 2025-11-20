import React, { useState, useRef, useEffect } from 'react';
import { Bell, LogOut, UserCircle2 } from 'lucide-react';
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai";

const DashboardHeader = ({ name = "User", email = "user@example.com", image }) => {
  const [open, setOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const dropdownRef = useRef(null);

  // close popup on click outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      setIsFullscreen(false);
    } else {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    }
  };

  return (
    <div className="bg-white border-b border-gray-200 shadow-sm border relative">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">

          {/* LEFT */}
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Hello, <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {name}
              </span>
            </h1>
            <p className="text-sm text-gray-500 mt-1">{currentDate}</p>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4 relative">
            {/* expand button */}
            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isFullscreen ? (
                <AiOutlineFullscreenExit className="w-6 h-6" />
              ) : (
                <AiOutlineFullscreen className="w-6 h-6" />
              )}
            </button>

            {/* Notifications */}
            <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <Bell className="w-6 h-6 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* User Button */}
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm overflow-hidden">
                {image ? (
                  <img src={image} alt="profile" className="w-full h-full object-cover" />
                ) : (
                  name?.charAt(0).toUpperCase()
                )}
              </div>
            </button>

            {/* DROPDOWN POPUP */}
            {open && (
              <div
                ref={dropdownRef}
                className="absolute right-0 top-14 w-60 bg-white shadow-xl rounded-xl border border-gray-200 p-4 z-50 animate-fadeIn"
              >
                {/* User Info */}
                <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center font-bold overflow-hidden">
                    {image ? (
                      <img src={image} alt="profile" className="w-full h-full object-cover" />
                    ) : (
                      name?.charAt(0).toUpperCase()
                    )}
                  </div>

                  <div>
                    <p className="font-semibold text-gray-800">{name}</p>
                    <p className="text-xs text-gray-500">{email}</p>
                  </div>
                </div>

                {/* Options */}
                <div className="mt-3 space-y-1">
                  <button className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700">
                    <UserCircle2 className="w-4 h-4" /> Profile
                  </button>

                  <button
                    className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-red-100 text-red-600"
                    onClick={() => alert("Logout clicked")}
                  >
                    <LogOut className="w-4 h-4" /> Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
