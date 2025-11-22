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

export const maskEmail = (email) => {
    const [localPart, domain] = email.split("@");
    const maskedLocalPart = localPart.replace(/./g, "*");
    return `${maskedLocalPart}@${domain}`;
};


export const maskPhoneNumber = (phoneNumber) => {
    if (phoneNumber.length < 4) return phoneNumber;
    const visibleDigits = phoneNumber.slice(-4);
    const maskedSection = "*".repeat(phoneNumber.length - 4);
    return `${maskedSection}${visibleDigits}`;
};

export const formatCurrency = (amount, currency = "USD") => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency,
    }).format(amount);
}

export const legButton = (leg) => {
    return (
        <button className={`${leg === "left" ? "bg-blue-500" : "bg-green-500"} text-white px-3 py-1 rounded-full capitalize text-xs`}>
            {leg}
        </button>
    )
}
