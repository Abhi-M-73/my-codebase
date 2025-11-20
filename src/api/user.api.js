import Axios from "../utils/Axios";

export const userRegister = async (payload) => {
    const response = await Axios.post("/user/register", payload);
    return response.data;
}