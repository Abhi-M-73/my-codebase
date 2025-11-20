import axios from "axios";
import { backendConfig } from "./mainContent";

const Axios = axios.create({
    withCredentials: true,
    baseURL: backendConfig.base,
    headers: {
        "Content-Type": "application/json",
        "Content-Type": "multipart/form-data",
    },
});

Axios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

Axios.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);

export default Axios;