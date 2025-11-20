"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const ReusableForm = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  options,
  required = false,
  icon: Icon,
  className = "",
  disabled = false,
  rows = 4,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => setShowPassword(!showPassword);

  const commonInputClass = `bg-transparent flex-1 outline-none text-white placeholder-white/70 text-md disabled:cursor-not-allowed ${className}`;

  const renderInput = () => {
    switch (type) {
      case "select":
        return (
          <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            disabled={disabled}
            className={commonInputClass}
          >
            <option value="" className="bg-[#101420] text-gray-400">
              Select {label}
            </option>
            {options?.map((opt) => (
              <option
                key={opt?.value || opt}
                value={opt?.value || opt}
                className="bg-[#101420] text-gray-300"
              >
                {opt?.label || opt}
              </option>
            ))}
          </select>
        );

      case "date":
        return (
          <input
            id={name}
            name={name}
            type="date"
            value={value}
            onChange={onChange}
            required={required}
            disabled={disabled}
            className={`${commonInputClass} cursor-pointer [color-scheme:dark]`}
          />
        );

      case "password":
        return (
          <div className="flex items-center w-full">
            <input
              id={name}
              name={name}
              type={showPassword ? "text" : "password"}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              required={required}
              disabled={disabled}
              className={commonInputClass}
            />
            <button
              type="button"
              onClick={handleTogglePassword}
              className="text-gray-400 hover:text-gray-200 transition ml-2"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
        );

      case "file":
        return (
          <input
            id={name}
            name={name}
            type="file"
            onChange={onChange}
            required={required}
            disabled={disabled}
            className={`file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[var(--btnColor)] file:text-white ${commonInputClass}`}
          />
        );

      case "textarea":
        return (
          <div className="w-full flex gap-2">
            {Icon && (
              <div className="bg-[#252525] p-2 rounded w-fit h-fit">
                <Icon className="w-10 h-10 text-gray-300 group-focus-within:text-[var(--btnColor)]" />
              </div>
            )}
            <textarea
              id={name}
              name={name}
              rows={rows}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              required={required}
              disabled={disabled}
              className={`${commonInputClass} px-2 py-3`}
            />
          </div>
        );

      default:
        return (
          <input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            value={type !== "file" ? value : undefined}
            onChange={onChange}
            required={required}
            disabled={disabled}
            className={commonInputClass}
          />
        );
    }
  };

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={name}
          className="block text-md font-medium mb-1 text-gray-300"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <div
        className={`flex ${
          type === "textarea" ? "flex-col items-start" : "items-center"
        } gap-3 rounded-lg px-2 py-2 border !border-gray-700 ${
          type === "file" ? "bg-[#111]" : ""
        } group`}
      >
        {/* Show icon for all input types except textarea (handled inside renderInput) */}
        {Icon && type !== "textarea" && (
          <div className="bg-[#252525] p-2 rounded">
            <Icon className="w-5 h-5 text-gray-300 group-focus-within:text-[var(--btnColor)]" />
          </div>
        )}
        {renderInput()}
      </div>
    </div>
  );
};

export default ReusableForm;