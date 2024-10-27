import axios from "axios";
import Constants from "expo-constants";


// Environment variable handling
const API_URL = Constants.expoConfig?.extra?.api_url || process.env['API_URL'];

console.log(API_URL);

export const apiClient = axios.create({
    baseURL: API_URL,
})