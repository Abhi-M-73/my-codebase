import React, { useState } from 'react';
import ReusableForm from '../../../components/ui/ReusableForm';
import { useSelector } from 'react-redux';
import ReusableButton from '../../../components/ui/ReusableButton';
import { CircleUser, Mail, Phone, User, Share2 } from 'lucide-react';

const UserProfile = () => {
    const userInfo = useSelector((state) => state.auth?.user);
    console.log("Auth Info:", userInfo);

    const [formData, setFormData] = useState({
        username: userInfo?.username || "",
        email: userInfo?.email || "",
        referralCode: userInfo?.referralCode || "",
        phone: userInfo?.phone || "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleUpdateProfile = () => {
        // Yahan pe aap API call / redux action se profile update ka logic likh sakte ho
        console.log("Update profile with: ", formData);
    };

    return (
        <div className="w-full border border-slate-500 rounded-lg shadow-xl backdrop-blur-md p-6 md:p-8 grid grid-cols-1 lg:grid-cols-[1.1fr_1.4fr] gap-8">
            <div className="flex flex-col items-center gap-6 border-b lg:border-b-0 lg:border-r border-slate-800 pb-6 lg:pb-0 lg:pr-6">
                <div className="relative">
                    <div className="h-28 w-28 rounded-full bg-gradient-to-br from-emerald-500 via-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
                        <span className="text-3xl font-semibold text-white">
                            {userInfo?.username
                                ? userInfo.username.charAt(0).toUpperCase()
                                : "U"}
                        </span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center shadow-md">
                        <CircleUser className="h-5 w-5 text-white" />
                    </div>
                </div>

                <div className="text-center space-y-1">
                    <h1 className="text-xl md:text-2xl font-semibold text-white">
                        {userInfo?.username || "User Name"}
                    </h1>
                    <p className="text-sm text-slate-300 flex items-center gap-2 justify-center ">
                        <Mail className="h-4 w-4" />
                        <span>{userInfo?.email || "user@example.com"}</span>
                    </p>
                    {userInfo?.referralCode && (
                        <p className="text-xs text-emerald-400 bg-emerald-500/10 inline-flex items-center gap-2 px-3 py-1 rounded-full mt-2">
                            <Share2 className="h-3 w-3" />
                            Referral Code: <span className="font-medium">{userInfo.referralCode}</span>
                        </p>
                    )}
                </div>

                {/* Small stats / info */}
                <div className="w-full mt-4 grid grid-cols-2 gap-3">
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-center">
                        <p className="text-xs text-slate-400">Account Status</p>
                        <p className="text-sm font-semibold text-emerald-400 mt-1">Active</p>
                    </div>
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-center">
                        <p className="text-xs text-slate-400">Joined</p>
                        <p className="text-sm font-semibold text-slate-200 mt-1">
                            {/* Placeholder – actual date aap backend se doge */}
                            —
                        </p>
                    </div>
                </div>
            </div>

            {/* Right: Editable Form */}
            <div className="space-y-6">
                <div>
                    <h2 className="text-lg md:text-2xl font-semibold text-white">
                        Profile Details
                    </h2>
                    <p className="text-sm text-slate-300 mt-1">
                        Update your basic information. These details help us personalize
                        your experience.
                    </p>
                </div>

                <div className="space-y-4">
                    <ReusableForm
                        type="text"
                        label="Username"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        placeholder="Enter your username"
                        required={true}
                        disabled={true}
                        icon={User}
                    />

                    <ReusableForm
                        type="email"
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required={true}
                        icon={Mail}
                    />

                    <ReusableForm
                        type="text"
                        label="Phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        required={false}
                        icon={Phone}
                    />

                    <ReusableForm
                        type="text"
                        label="Referral Code"
                        name="referralCode"
                        value={formData.referralCode}
                        onChange={handleInputChange}
                        placeholder="Your referral code"
                        required={false}
                        icon={Share2}
                    />
                </div>

                <div className="w-full flex items-center justify-end pt-2">
                    <ReusableButton
                        label="Update Profile"
                        onClick={handleUpdateProfile}
                        loading={false}
                        disabled={false}
                        icon={CircleUser}
                        variant="primary"
                        type="button"
                        className="w-fit"
                    />
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
