import axios from "axios"
import { setupCache } from 'axios-cache-adapter';
import Constants from "expo-constants";

const cache = setupCache({
    maxAge: 15 * 60 * 1000 // 15 minutos
});

const API_KEY = Constants.expoConfig?.extra?.api_key;
const API_URL = Constants.expoConfig?.extra?.api_url;

export const apiClient = axios.create({
    baseURL: API_URL,
    adapter: cache.adapter,
    headers: {
        api_key: API_KEY
    },
})
