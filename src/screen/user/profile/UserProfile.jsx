import React, { useState } from "react";
import ReusableForm from "../../../components/ui/ReusableForm";
import { useSelector } from "react-redux";
import ReusableButton from "../../../components/ui/ReusableButton";
import { CircleUser, Mail, Phone, User, Share2, File as FileIcon, Wallet } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { updateUserProfile } from "../../../api/user.api";
import { toast } from "react-hot-toast";
import useFetchProfile from "../../../hooks/usefetchProfile";

const UserProfile = () => {
    const { fetchProfile } = useFetchProfile();
    const userInfo = useSelector((state) => state.auth?.user);

    const [formData, setFormData] = useState({
        username: userInfo?.username || "",
        email: userInfo?.email || "",
        referralCode: userInfo?.referralCode || "",
        walletAddress: userInfo?.walletAddress || "",
        profileImage: userInfo?.profileImage || null,
    });

    const handleInputChange = (e) => {
        const { name, value, files, type } = e.target;

        if (type === "file") {
            setFormData((prev) => ({
                ...prev,
                [name]: files[0], // 👈 actual file
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const { mutate: updateProfile, isPending } = useMutation({
        mutationFn: (data) => updateUserProfile(data),
        onSuccess: (data) => {
            toast.success(data?.message || "Profile updated successfully!");
            fetchProfile();
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message || "Failed to update profile.");
        }
    })

    const handleUpdateProfile = () => {
        const payload = new FormData();

        payload.append("email", formData.email);
        payload.append("walletAddress", formData.walletAddress);
        payload.append("type", "profile");

        // ✅ ONLY send if it's actual file
        if (formData.profileImage instanceof File) {
            payload.append("file", formData.profileImage);
        }

        updateProfile(payload);
    };

    // Derived values from userInfo
    const accountStatus = userInfo?.isVerified === true ? "Active" : "Inactive";
    const isActive = Boolean(userInfo?.isVerified);

    const joinedDate = userInfo?.createdAt
        ? new Date(userInfo.createdAt).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        })
        : "—";

    const totalInvestment = userInfo?.totalInvestment ?? 0;
    const totalEarnings = userInfo?.totalEarnings ?? 0;
    const level = userInfo?.level ?? "-";
    const referralCount = userInfo?.referredUsers?.length ?? 0;

    return (
        <div className="w-full border border-[var(--btnColor)]/40 rounded-lg shadow-xl backdrop-blur-md p-6 md:p-8 grid grid-cols-1 lg:grid-cols-[1.1fr_1.4fr] gap-8">
            {/* LEFT SECTION */}
            <div className="flex flex-col items-center gap-6 border-b lg:border-b-0 lg:border-r border-slate-800 pb-6 lg:pb-0 lg:pr-6">
                {/* Avatar */}
                <div className="relative">
                    <div className="h-28 w-28 rounded-full bg-gradient-to-br from-emerald-500 via-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
                        {
                            userInfo?.profileImage ? (
                                <img
                                    src={userInfo.profileImage}
                                    alt="Profile"
                                    className="h-full w-full rounded-full object-cover"
                                />
                            ) : (
                                <span className="text-3xl font-semibold text-white">
                                    {userInfo?.username
                                        ? userInfo.username.charAt(0).toUpperCase()
                                        : "U"}
                                </span>
                            )
                        }
                    </div>
                    <div className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center shadow-md">
                        <CircleUser className="h-5 w-5 text-white" />
                    </div>
                </div>

                {/* Basic Info */}
                <div className="text-center space-y-1">
                    <h1 className="text-xl md:text-2xl font-semibold text-white">
                        {userInfo?.username || "User Name"}
                    </h1>

                    {userInfo?.referralCode && (
                        <p className="text-sm text-[var(--btnColor)] bg-emerald-500/10 inline-flex items-center gap-2 px-3 py-1 rounded-full mt-2">
                            <Share2 className="h-3 w-3" />
                            Referral Code:{" "}
                            <span className="font-medium">{userInfo.referralCode}</span>
                        </p>
                    )}
                </div>

                <div className="w-full grid grid-cols-2 gap-3 mt-2">
                    <div className="border border-[var(--btnColor)]/40 rounded-xl p-3 text-center">
                        <p className="text-xs text-gray-300">Account Status</p>
                        <p
                            className={`text-lg font-semibold mt-1 ${isActive ? "text-[var(--btnColor)]" : "text-red-500"
                                }`}
                        >
                            {accountStatus}
                        </p>
                    </div>

                    <div className="border border-[var(--btnColor)]/40 rounded-xl p-3 text-center">
                        <p className="text-xs text-gray-300">Joined</p>
                        <p className="text-lg font-semibold text-slate-200 mt-1">
                            {joinedDate}
                        </p>
                    </div>
                    <div className="border border-[var(--btnColor)]/40 rounded-xl p-3 text-center">
                        <p className="text-xs text-gray-300">Level</p>
                        <p className="text-lg font-semibold text-slate-200 mt-1">
                            {level}
                        </p>
                    </div>

                    <div className="border border-[var(--btnColor)]/40 rounded-xl p-3 text-center">
                        <p className="text-xs text-gray-300">Direct Referrals</p>
                        <p className="text-lg font-semibold text-slate-200 mt-1">
                            {referralCount}
                        </p>
                    </div>

                    <div className="border border-[var(--btnColor)]/40 rounded-xl p-3 text-center">
                        <p className="text-xs text-gray-300">Total Investment</p>
                        <p className="text-lg font-semibold text-[var(--btnColor)] mt-1">
                            $ {totalInvestment?.toFixed(2)}
                        </p>
                    </div>

                    <div className="border border-[var(--btnColor)]/40 rounded-xl p-3 text-center">
                        <p className="text-xs text-gray-300">Total Earnings</p>
                        <p className="text-lg font-semibold text-[var(--btnColor)] mt-1">
                            $ {totalEarnings?.toFixed(2)}
                        </p>
                    </div>
                </div>
            </div>

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
                        disabled={true} // usually username fix hota hai
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
                        label="wallet address"
                        name="walletAddress"
                        value={formData.walletAddress}
                        onChange={handleInputChange}
                        placeholder="Enter your wallet address"
                        required={false}
                        icon={Wallet}
                    />

                    <ReusableForm
                        type="file"
                        label="Profile Image"
                        name="profileImage"
                        value={formData.profileImage}
                        onChange={handleInputChange}
                        required={false}
                        icon={FileIcon}
                    />
                </div>

                <div className="w-full flex items-center justify-end pt-2">
                    <ReusableButton
                        label="Update Profile"
                        onClick={handleUpdateProfile}
                        loading={isPending}
                        disabled={isPending}
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
