import Axios from "../utils/Axios";

const API = "/users"

export const userRegister = async (payload) => {
    const response = await Axios.post(`${API}/register`, payload);
    return response.data;
}

export const userLogin = async (payload) => {
    const response = await Axios.post(`${API}/login`, payload);
    return response.data;
}

export const getUserProfile = async () => {
    const response = await Axios.get(`${API}/get-profile`);
    return response.data;
}

export const updateUserProfile = async (payload) => {
    const response = await Axios.put(`${API}/update-profile`, payload, {
        headers: { "Content-Type": "multipart/form-data" }
    });
    return response.data;
}

export const buyPlanPackage = async (payload) => {
    const response = await Axios.post(`${API}/buy-package`, payload);
    return response.data;
}

export const makeInvestment = async (payload) => {
    const response = await Axios.post(`${API}/buy-package`, payload);
    return response.data;
}

export const getInvestmentHistory = async () => {
    const response = await Axios.get(`${API}/get-investment-history`);
    return response.data;
}

export const userDeposit = async () => {
    const response = await Axios.post(`${API}/create-deposit`);
    return response.data;
}

export const getDirectTeam = async () => {
    const response = await Axios.get(`${API}/get-direct-team`);
    return response.data;
}

export const getLevelTeam = async () => {
    const response = await Axios.get(`${API}/get-level-team`);
    return response.data;
}

export const getReferralIncome = async () => {
    const response = await Axios.get(`${API}/get-referral-income`);
    return response.data;
}

export const getLevelIncome = async () => {
    const response = await Axios.get(`${API}/get-level-income`);
    return response.data;
}

export const getRoiIncome = async () => {
    const response = await Axios.get(`${API}/get-roi-income`);
    return response.data;
}

export const withdrawalRequest = async (payload) => {
    const response = await Axios.post(`${API}/withdrawal-request`, payload);
    return response.data;
}

export const getWithdrawalHistory = async () => {
    const response = await Axios.get(`${API}/withdrawals-history`);
    return response.data;
}


export const raiseTicket = async (payload) => {
    const response = await Axios.post(`${API}/support/create`, payload, {
        headers: { "Content-Type": "multipart/form-data" }
    });
    return response.data;
}

export const getRaiseTicketHistory = async () => {
    const response = await Axios.get(`${API}/support/messages`);
    return response.data;
}

export const deleteRaiseTicket = async (ticketId) => {
    const response = await Axios.delete(`${API}/delete-raise-ticket/${ticketId}`);
    return response.data;
}