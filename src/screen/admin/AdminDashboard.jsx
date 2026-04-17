import { Users, DollarSign, ShoppingCart, TrendingUp, Wallet, PiggyBank, ArrowUpRight, CreditCard , User} from 'lucide-react';

const AdminDashboard = () => {
  const data = {
    directReferralAmount: 0,
    directReferralCount: 0,
    totalEarnings: 0,
    totalReferrals: 0,
    totalPayouts: 0,
    totalUsers: 0,
    totalOrders: 0,
    totalInvestment: 0,
    totalReferrals: 0,
    levelIncome: 0
  }


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

  const incomeData = [
    {
      id: 2,
      title: "Total Wallet Balance",
      value: `$${data?.directReferralAmount?.toFixed(2)}`,
      icon: <Wallet className="w-6 h-6" />,
      color: "green",
      period: "This Month"
    },
    {
      id: 1,
      title: "Total Referrals Income",
      value: `$${data?.directReferralAmount?.toFixed(2)}`,
      icon: <DollarSign className="w-6 h-6" />,
      color: "blue",
      period: "This Month"
    },
    {
      id: 3,
      title: "Total ROI Income",
      value: `$${data?.totalEarnings?.toFixed(2)}`,
      icon: <PiggyBank className="w-6 h-6" />,
      color: "purple",
      period: "This Month"
    },
    {
      id: 4,
      title: "Total Level Income",
      value: `$${data?.levelIncome?.toFixed(2)}`,
      icon: <TrendingUp className="w-6 h-6" />,
      color: "orange",
      period: "Portfolio Value"
    },
    {
      id: 5,
      title: "Total Investment",
      value: `$${data?.totalInvestment?.toFixed(2)}`,
      icon: <ArrowUpRight className="w-6 h-6" />,
      color: "green",
      period: "This Month"
    },
    {
      id: 6,
      title: "Total Withdrawal",
      value: `$${data?.totalPayouts?.toFixed(2)}`,
      icon: <CreditCard className="w-6 h-6" />,
      color: "red",
      period: "This Month"
    },
    
  ];


  return (
    <div className="min-h-screen  text-slate-50">
      {/* Top Header */}
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            Admin <span className="text-[var(--btnColor)]">Dashboard</span>
          </h1>
          <p className="mt-1 text-sm text-slate-300">
            Overview of today’s performance and key metrics.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 transition">
            This Week
          </button>
          <button className="rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 hover:brightness-110 transition">
            Download Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {incomeData.map((item) => {
          const colors = getColorClasses(item.color);
          return (
            <div
              key={item.id + item.title}
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

                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <p className="text-3xl font-bold text-gray-100 group-hover:text-white transition-colors duration-300">
                      {item.value}
                    </p>
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
    </div>
  );
};

export default AdminDashboard;
