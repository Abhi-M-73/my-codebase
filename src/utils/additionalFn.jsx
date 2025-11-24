export const dateFormatter = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" }); // Nov
    const year = date.getFullYear();
    const time = date.toLocaleString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });
    return `${day} ${month} ${year}, ${time}`;
};

export const maskEmail = (email = "") => {
    if (typeof email !== "string" || !email.includes("@")) return email;
    const [localPart, domain] = email.split("@");
    if (localPart.length <= 4) {
        return `${localPart[0] + localPart[1]}***@${domain}`;
    }
    const start = localPart.slice(0, 5);
    const end = localPart.slice(-5);
    const maskedLength = Math.max(0, localPart.length - (start.length + end.length));
    const masked = "*".repeat(maskedLength);
    return `${start}${masked}${end}@${domain}`;
};



export const maskPhoneNumber = (phoneNumber) => {
    if (phoneNumber.length < 4) return phoneNumber;
    const startDigits = phoneNumber.slice(0, 2);
    const endDigits = phoneNumber.slice(-2);
    const maskedSection = "*".repeat(phoneNumber.length - 4);
    return `${startDigits}${maskedSection}${endDigits}`;
};

export const formatCurrency = (amount, currency = "USD") => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency,
    }).format(amount);
}

export const formatPercentage = (value) => {
    return `${value}%`;
}

export const legButton = (leg) => {
    return (
        <button className={`${leg === "left" ? "bg-blue-500" : "bg-green-500"} text-white px-3 py-1 rounded-full capitalize text-xs`}>
            {leg}
        </button>
    )
}

export const levelButton = (level) => {
    if (!level) return null;
    let bgColor = 'bg-gray-500';
    if (level === '1') return bgColor = 'bg-gray-600';
    if (level === '2') return bgColor = 'bg-blue-500';
    if (level === '3') return bgColor = 'bg-green-500';
    if (level === '4') return bgColor = 'bg-yellow-500';
    if (level === '5') return bgColor = 'bg-purple-500';
    return (
        <button className={`${bgColor} text-white px-3 py-1 rounded-full capitalize text-xs`}>
            Level {level}
        </button>
    )
}
