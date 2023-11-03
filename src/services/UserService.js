import axiosInstance from "./axios.service";

const loginAPI = async (email, password) => {
    const res = await axiosInstance.post("auth/sign-in ",{email, password})

    return res.data.data
}

const serviceAPI = async (name, description, minPrice, maxPrice) => {
    const res = await axiosInstance.post("/services ",{name, description, minPrice, maxPrice})

    return res.data.data
}
 export default {loginAPI, serviceAPI };


