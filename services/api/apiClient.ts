import axios from "axios"

export const apiClient = axios.create({
    baseURL: "http://192.168.1.36:1097/api/v1",
})
