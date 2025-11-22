import Axios from "../utils/Axios";

const API = "/user"

export const userRegister = async (payload) => {
    const response = await Axios.post(`${API}/register`, payload);
    return response.data;
}

export const userLogin = async (payload) => {
    const response = await Axios.post(`${API}/login`, payload);
    return response.data;
}

export const buyPlanPackage = async (payload) => {
    const response = await Axios.post(`${API}/buy-package`, payload);
    return response.data;
}

export const makeInvestment = async (payload) => {
    const response = await Axios.post(`${API}/create-investment`, payload);
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
    const response = await Axios.get(`${API}/direct-user`);
    return response.data;
}