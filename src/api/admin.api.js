import Axios from "../utils/Axios";

export const adminLogin = async (payload) => {
    const response = await Axios.post("/admin/login", payload);
    return response.data;
}