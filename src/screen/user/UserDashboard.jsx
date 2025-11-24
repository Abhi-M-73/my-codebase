import React from 'react';
import { TrendingUp, DollarSign, CreditCard, Wallet, PiggyBank, ArrowUpRight, ArrowDownRight, Calendar, Award, Target, Activity, User } from 'lucide-react';
import usefetchProfile from '../../hooks/usefetchProfile';

const UserDashboard = () => {
  usefetchProfile();
  
  const incomeData = [
    {
      id: 1,
      title: "Total Users",
      value: "125",
      change: "+12.5%",
      trend: "up",
      icon: <User className="w-6 h-6" />,
      color: "yellow",
      period: "This Month"
    },
    {
      id: 2,
      title: "Total Wallet Balance",
      value: "$200",
      change: "+8.2%",
      trend: "up",
      icon: <Wallet className="w-6 h-6" />,
      color: "green",
      period: "This Month"
    },
    {
      id: 1,
      title: "Total Referrals Income",
      value: "$125",
      change: "+12.5%",
      trend: "up",
      icon: <DollarSign className="w-6 h-6" />,
      color: "blue",
      period: "This Month"
    },
    {
      id: 3,
      title: "Total ROI Income",
      value: "$60",
      change: "+15.8%",
      trend: "up",
      icon: <PiggyBank className="w-6 h-6" />,
      color: "purple",
      period: "This Month"
    },
    {
      id: 4,
      title: "Total Level Income",
      value: "₹5,45,000",
      change: "-2.3%",
      trend: "down",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "orange",
      period: "Portfolio Value"
    },
    {
      id: 5,
      title: "Total Investment",
      value: "₹1,00,000",
      change: "+8.2%",
      trend: "up",
      icon: <ArrowUpRight className="w-6 h-6" />,
      color: "green",
      period: "This Month"
    },
    {
      id: 6,
      title: "Total Withdrawal",
      value: "₹2,00,000",
      change: "+12.5%",
      trend: "up",
      icon: <CreditCard className="w-6 h-6" />,
      color: "red",
      period: "This Month"
    },
    
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
      },
      yellow: {
        bg: "from-yellow-500 to-yellow-600",
        light: "bg-yellow-50",
        text: "text-yellow-600",
        border: "border-yellow-200"
      },
      red: {
        bg: "from-red-500 to-red-600",
        light: "bg-red-50",
        text: "text-red-600",
        border: "border-red-200"
      },
      pink: {
        bg: "from-pink-500 to-pink-600",
        light: "bg-pink-50",
        text: "text-pink-600",
        border: "border-pink-200"
      },
      indigo: {
        bg: "from-indigo-500 to-indigo-600",
        light: "bg-indigo-50",
        text: "text-indigo-600",
        border: "border-indigo-200"
      },
      gray: {
        bg: "from-gray-500 to-gray-600",
        light: "bg-gray-50",
        text: "text-gray-600",
        border: "border-gray-200"
      }
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto space-y-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {incomeData.map((item) => {
            const colors = getColorClasses(item.color);
            return (
              <div
                key={item.id}
                className="group relative bg-white/30 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                <div className={`absolute z--2 inset-0 bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative p-6">
                  <div className={`${colors.light} ${colors.text} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 group-hover:text-white transition-all duration-300`}>
                    {item.icon}
                  </div>
                  <h3 className="text-gray-200 text-sm font-medium mb-2 group-hover:text-white/90 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-3">
                    <p className="text-3xl font-bold text-gray-100 group-hover:text-white transition-colors duration-300">
                      {item.value}
                    </p>
                  </div>
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
                    <span className="text-xs text-gray-200 group-hover:text-white/70 transition-colors duration-300">
                      {item.period}
                    </span>
                  </div>
                </div>
                <div className={`absolute z-10 -right-4 -bottom-4 w-24 h-24 bg-gradient-to-br ${colors.bg} rounded-full opacity-30 group-hover:opacity-50  transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>

        {/* User Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-xl p-6 text-white">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-4 border-4 border-white/30">
                <User className="w-12 h-12" />
              </div>
              <h2 className="text-2xl font-bold mb-2">John Doe</h2>
              <p className="text-white/80 mb-4">Premium Member</p>
              <div className="flex gap-4 mb-4">
                <div className="bg-white/20 rounded-lg px-4 py-2">
                  <p className="text-sm text-white/70">Member Since</p>
                  <p className="font-semibold">Jan 2024</p>
                </div>
                <div className="bg-white/20 rounded-lg px-4 py-2">
                  <p className="text-sm text-white/70">Rank</p>
                  <p className="font-semibold">Diamond</p>
                </div>
              </div>
              <div className="w-full bg-white/20 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">Level Progress</span>
                  <span className="text-sm font-semibold">75%</span>
                </div>
                <div className="w-full bg-white/30 rounded-full h-2">
                  <div className="bg-white rounded-full h-2" style={{width: '75%'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-800">Recent Activity</h3>
              <Activity className="w-6 h-6 text-indigo-600" />
            </div>
            <div className="space-y-4">
              {[
                { action: 'ROI Credited', amount: '+$25', time: '2 hours ago', icon: <PiggyBank className="w-5 h-5" />, color: 'purple' },
                { action: 'Referral Bonus', amount: '+$50', time: '5 hours ago', icon: <Award className="w-5 h-5" />, color: 'blue' },
                { action: 'Withdrawal Processed', amount: '-$100', time: '1 day ago', icon: <ArrowDownRight className="w-5 h-5" />, color: 'red' },
                { action: 'New Investment', amount: '-$500', time: '2 days ago', icon: <TrendingUp className="w-5 h-5" />, color: 'green' },
                { action: 'Level Income', amount: '+$75', time: '3 days ago', icon: <Target className="w-5 h-5" />, color: 'orange' }
              ].map((activity, index) => {
                const colors = getColorClasses(activity.color);
                return (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                    <div className="flex items-center gap-4">
                      <div className={`${colors.light} ${colors.text} w-10 h-10 rounded-lg flex items-center justify-center`}>
                        {activity.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{activity.action}</p>
                        <p className="text-sm text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                    <p className={`font-bold ${activity.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {activity.amount}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;