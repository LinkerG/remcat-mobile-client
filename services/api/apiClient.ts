import axios from "axios"
import { setupCache } from 'axios-cache-adapter';

const cache = setupCache({
    maxAge: 15 * 60 * 1000 // 15 minutos
});

export const apiClient = axios.create({
    baseURL: "http://192.168.1.36:1097/api/v1",
    adapter: cache.adapter,
})
