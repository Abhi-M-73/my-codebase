import React from 'react';
import { TrendingUp, DollarSign, CreditCard, Wallet, PiggyBank, ArrowUpRight, ArrowDownRight, Calendar, Award, Target, Activity, User, Copy, Users, ShoppingCart } from 'lucide-react';
import { backendConfig, MainContent } from '../../utils/mainContent';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

const UserDashboard = () => {
  const { user: data } = useSelector((state) => state.auth);

  const stats = [
    { title: 'Total Users', value: '0', icon: Users, color: 'from-blue-500 via-sky-400 to-cyan-400' },
    { title: 'Revenue', value: '$0', icon: DollarSign, color: 'from-emerald-500 via-lime-400 to-teal-400' },
    { title: 'Orders', value: '0', icon: ShoppingCart, color: 'from-purple-500 via-fuchsia-500 to-pink-500' },
    { title: 'Growth', value: '0%', icon: TrendingUp, color: 'from-orange-500 via-amber-400 to-rose-400' },
  ];


  const copyReferralLink = () => {
    const link = `${window.location.origin}/register?ref=${data?.referralCode}`;
    navigator.clipboard.writeText(link);
    toast.success("Referral link copied to clipboard.");
  }


  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl bg-slate-900/80 border border-slate-800 shadow-[0_18px_45px_rgba(15,23,42,0.8)] p-[1px] group"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-60 blur-xl group-hover:opacity-90 transition-opacity`}
                />
                <div className="relative h-full w-full rounded-2xl bg-slate-950/90 px-5 py-4 flex flex-col gap-3">
                  <div className="pointer-events-none absolute -right-7 -top-7 h-16 w-16 rotate-45 bg-gradient-to-br from-white/10 via-green-400/60 to-transparent" />
                  <div className="pointer-events-none absolute -left-7 -bottom-7 h-16 w-16 -rotate-45 bg-gradient-to-tr from-white/10 via-yellow-400/60 to-transparent" />

                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="rounded-2xl bg-gray-500/30 p-3 shadow-inner shadow-black/40">
                        <Icon className="h-6 w-6 text-[var(--btnColor)]" />
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                          {stat.title}
                        </p>
                        <p className="mt-1 text-2xl font-bold text-slate-50">
                          {stat.value}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-1 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Compared to last month</span>
                    <span className="text-sky-300 group-hover:text-sky-200 transition">
                      View details →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>


        {/* Profile Data Section */}
        <div className="mt-10 bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur-lg">
          <h2 className="text-xl font-semibold text-gray-200 mb-4">Profile Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-600 flex items-center justify-between p-4 rounded-lg text-gray-100">
              <p className="text-sm text-gray-200">Username</p>
              <h3 className="text-lg font-medium text-[var(--btnColor)]">{data?.username}</h3>
            </div>
            <div className="border border-gray-600 flex items-center justify-between p-4 rounded-lg text-gray-100">
              <p className="text-sm text-gray-200">Email</p>
              <h3 className="text-lg font-medium text-[var(--btnColor)]">{data?.email}</h3>
            </div>

            <div className="border border-gray-600 flex items-center justify-between p-4 rounded-lg text-gray-100">
              <p className="text-sm text-gray-200">Role</p>
              <h3 className="text-lg font-medium text-[var(--btnColor)] capitalize">{data?.role}</h3>
            </div>

           
            <div className="border border-gray-600 flex items-center justify-between p-4 rounded-lg text-gray-100">
              <p className="text-sm text-gray-300">Created At</p>
              <h3 className="text-lg font-medium text-[var(--btnColor)]">
                {new Date(data?.createdAt).toLocaleDateString()}
              </h3>
            </div>

            <div className="border border-gray-600 flex items-center justify-between p-4 rounded-lg text-gray-100 md:col-span-2">
              <p className="text-sm text-gray-300">Referral Link</p>
              <div className='flex items-center gap-4'>
                <h3 className="text-lg font-medium text-[var(--btnColor)]">{backendConfig.origin}/{data?.referralCode}</h3>
                <Copy onClick={copyReferralLink} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default UserDashboard;