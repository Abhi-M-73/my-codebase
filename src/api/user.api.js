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