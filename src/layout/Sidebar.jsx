import React, { useState } from 'react';
import {  Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import SidebarContent from '../routes/SidebarContent';

const Sidebar = ({ userRole = 'user' }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [expandedMenus, setExpandedMenus] = useState({});

  const menuItems = SidebarContent[userRole] || SidebarContent.User;

  const toggleMenu = (itemId) => {
    setExpandedMenus(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const handleItemClick = (itemId, hasOptions = false) => {
    if (hasOptions) {
      toggleMenu(itemId);
    } else {
      setActiveItem(itemId);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-gray-800 text-white lg:hidden hover:bg-gray-700 transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/10 bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white z-40 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 w-64 shadow-2xl`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-gray-700">
            <h1 className="text-2xl capitalize font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {userRole} Panel
            </h1>
            <p className="text-gray-400 text-sm mt-1">Welcome back</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {menuItems?.map((item) => (
              <div key={item.id}>
                {/* Main menu item */}
                {item.link ? (
                  <a
                    href={item.link}
                    onClick={(e) => {
                      e.preventDefault();
                      handleItemClick(item.id);
                    }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${activeItem === item.id
                        ? 'bg-blue-600 shadow-lg shadow-blue-600/50 scale-105'
                        : 'hover:bg-gray-700 hover:translate-x-1'
                      }`}
                  >
                    <span className={activeItem === item.id ? 'text-white' : 'text-gray-400'}>
                      {item.icon}
                    </span>
                    <span className="font-medium flex-1">{item.name}</span>
                  </a>
                ) : (
                  <button
                    onClick={() => handleItemClick(item.id, true)}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-700 hover:translate-x-1"
                  >
                    <span className="text-gray-400">{item.icon}</span>
                    <span className="font-medium flex-1 text-left">{item.name}</span>
                    {item.options && (
                      expandedMenus[item.id] ? (
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      )
                    )}
                  </button>
                )}

                {/* Submenu items */}
                {item.options && expandedMenus[item.id] && (
                  <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-700 pl-4">
                    {item.options.map((option) => (
                      <a
                        key={option.id}
                        href={option.link}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveItem(option.id);
                        }}
                        className={`block px-4 py-2 rounded-lg text-sm transition-all duration-200 ${activeItem === option.id
                            ? 'bg-blue-600 shadow-lg shadow-blue-600/50'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                          }`}
                      >
                        {option.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-700/50">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-sm font-bold">
                {userRole[0]}
              </div>
              <div>
                <p className="font-medium text-sm">{userRole} Account</p>
                <p className="text-xs text-gray-400">user@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content spacer */}
      <div className="lg:ml-64">
        {/* Your main content goes here */}
      </div>
    </>
  );
};

export default Sidebar;