import React from 'react';
import { TrendingUp, DollarSign, CreditCard, Wallet, PiggyBank, ArrowUpRight, ArrowDownRight, Calendar, Award, Target, Activity } from 'lucide-react';

const UserDashboard = () => {
  // User information
  const userInfo = {
    name: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    joinDate: "January 2024",
    membershipLevel: "Premium",
    profileImage: "RS"
  };

  // Income data
  const incomeData = [
    {
      id: 1,
      title: "Total Revenue",
      amount: "₹2,45,680",
      change: "+12.5%",
      trend: "up",
      icon: <DollarSign className="w-6 h-6" />,
      color: "blue",
      period: "This Month"
    },
    {
      id: 2,
      title: "Active Income",
      amount: "₹1,85,420",
      change: "+8.2%",
      trend: "up",
      icon: <Wallet className="w-6 h-6" />,
      color: "green",
      period: "This Month"
    },
    {
      id: 3,
      title: "Passive Income",
      amount: "₹60,260",
      change: "+15.8%",
      trend: "up",
      icon: <PiggyBank className="w-6 h-6" />,
      color: "purple",
      period: "This Month"
    },
    {
      id: 4,
      title: "Investments",
      amount: "₹5,45,000",
      change: "-2.3%",
      trend: "down",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "orange",
      period: "Portfolio Value"
    }
  ];

  // Stats data
  const stats = [
    { label: "Total Transactions", value: "1,234", icon: <Activity className="w-5 h-5" /> },
    { label: "Success Rate", value: "98.5%", icon: <Target className="w-5 h-5" /> },
    { label: "Rewards Earned", value: "₹12,450", icon: <Award className="w-5 h-5" /> }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "from-blue-500 to-blue-600",
        light: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-200"
      },
      green: {
        bg: "from-green-500 to-green-600",
        light: "bg-green-50",
        text: "text-green-600",
        border: "border-green-200"
      },
      purple: {
        bg: "from-purple-500 to-purple-600",
        light: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-200"
      },
      orange: {
        bg: "from-orange-500 to-orange-600",
        light: "bg-orange-50",
        text: "text-orange-600",
        border: "border-orange-200"
      }
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* User Info Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 h-32"></div>
          <div className="px-8 pb-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between -mt-16">
              <div className="flex items-end gap-4">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-xl flex items-center justify-center text-white text-4xl font-bold border-4 border-white">
                  {userInfo.profileImage}
                </div>
                <div className="pb-2">
                  <h2 className="text-3xl font-bold text-gray-800">{userInfo.name}</h2>
                  <p className="text-gray-500">{userInfo.email}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-semibold rounded-full">
                      {userInfo.membershipLevel}
                    </span>
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Joined {userInfo.joinDate}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="mt-4 md:mt-0 flex gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center gap-1 text-gray-600 mb-1">
                      {stat.icon}
                    </div>
                    <p className="text-xl font-bold text-gray-800">{stat.value}</p>
                    <p className="text-xs text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Income Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {incomeData.map((item) => {
            const colors = getColorClasses(item.color);
            return (
              <div
                key={item.id}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative p-6">
                  {/* Icon */}
                  <div className={`${colors.light} ${colors.text} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 group-hover:text-white transition-all duration-300`}>
                    {item.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-gray-600 text-sm font-medium mb-2 group-hover:text-white/90 transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  {/* Amount */}
                  <div className="flex items-baseline gap-2 mb-3">
                    <p className="text-3xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300">
                      {item.amount}
                    </p>
                  </div>
                  
                  {/* Change and Period */}
                  <div className="flex items-center justify-between">
                    <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${
                      item.trend === 'up' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                    } group-hover:bg-white/20 group-hover:text-white transition-all duration-300`}>
                      {item.trend === 'up' ? (
                        <ArrowUpRight className="w-4 h-4" />
                      ) : (
                        <ArrowDownRight className="w-4 h-4" />
                      )}
                      <span className="text-sm font-semibold">{item.change}</span>
                    </div>
                    <span className="text-xs text-gray-500 group-hover:text-white/70 transition-colors duration-300">
                      {item.period}
                    </span>
                  </div>
                </div>

                {/* Decorative element */}
                <div className={`absolute -right-4 -bottom-4 w-24 h-24 bg-gradient-to-br ${colors.bg} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>

        {/* Additional Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5 text-blue-600" />
              Recent Transactions
            </h3>
            <div className="space-y-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Payment Received</p>
                      <p className="text-sm text-gray-500">Dec {28 - i}, 2024</p>
                    </div>
                  </div>
                  <span className="text-green-600 font-bold">+₹{(15000 + i * 1000).toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Goals */}
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-lg p-6 text-white">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Target className="w-5 h-5" />
              Monthly Goal
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>₹2,45,680</span>
                  <span>₹3,00,000</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3">
                  <div className="bg-white h-3 rounded-full" style={{ width: '82%' }}></div>
                </div>
                <p className="text-sm mt-2 opacity-90">82% Complete</p>
              </div>
              <div className="pt-4 border-t border-white/20">
                <p className="text-2xl font-bold">₹54,320</p>
                <p className="text-sm opacity-90">Remaining to reach goal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;