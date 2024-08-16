import axios from "axios";
import Constants from "expo-constants";


// Environment variable handling
const API_KEY = Constants.expoConfig?.extra?.api_key || process.env['API_KEY'];
const API_URL = Constants.expoConfig?.extra?.api_url || process.env['API_URL'];

console.log(API_URL);

export const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        api_key: API_KEY
    },
})

export const quickApiClient = axios.create({
    baseURL: API_URL,
    headers: {
        api_key: API_KEY
    },
})