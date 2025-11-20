"use client";
import React from "react";

const OtpInputWithButton = ({
    label = "OTP",
    name = "otp",
    value,
    onChange,
    placeholder = "Enter OTP",
    required = false,
    disabled = false,
    icon: Icon,
    buttonLabel = "Send OTP",
    onButtonClick,
    loading = false,
    className = "",
}) => {
    const commonInputClass =
        "bg-transparent flex-1 outline-none text-white placeholder-white/70 text-md disabled:cursor-not-allowed " +
        className;

    return (
        <div className="w-full">
            {label && (
                <label
                    htmlFor={name}
                    className="block text-md font-medium mb-2 text-gray-300"
                >
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
            )}

            {/* Outer container */}
            <div className="flex sm:flex-row sm:items-center gap-3 rounded-lg px-2 py-2 border border-gray-700 group">
                {/* Icon + Input block */}
                <div className="flex items-center gap-3 flex-1">
                    {Icon && (
                        <div className="bg-[#252525] p-2 rounded">
                            <Icon className="w-5 h-5 text-gray-300 group-focus-within:text-[var(--btnColor)]" />
                        </div>
                    )}

                    <input
                        id={name}
                        name={name}
                        type="text"
                        inputMode="numeric"
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        required={required}
                        disabled={disabled}
                        className={commonInputClass}
                    />
                </div>

                {/* OTP Button block */}
                <button
                    type="button"
                    onClick={onButtonClick}
                    disabled={disabled || loading}
                    className="sm:w-auto px-3 py-1  font-semibold rounded-md bg-[var(--btnColor)] hover:bg-[var(--btnHoverColor)] text-white disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {loading ? (
                        <>
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Sending...</span>
                        </>
                    ) : (
                        <span>{buttonLabel}</span>
                    )}
                </button>
            </div>
        </div>
    );
};

export default OtpInputWithButton;
