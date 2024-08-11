import axios from "axios";
import { setupCache } from 'axios-cache-adapter';
import Constants from "expo-constants";

const cache = setupCache({
    maxAge: 15 * 60 * 1000, // 15 minutes
    debug: true, // Enable debugging to see cache hits/misses
    exclude: {
        query: false // Cache requests with query parameters
    },
    key: (req) => {
        // Custom key generation, e.g., use the full URL + query params
        return req.url + '?' + new URLSearchParams(req.params).toString();
    }
});

const smallerCache = setupCache({
    maxAge: 1 * 60 * 1000, // 1 minute
    debug: true,
    exclude: {
        query: false
    }
});

// Environment variable handling
const API_KEY = Constants.expoConfig?.extra?.api_key || process.env['API_KEY'];
const API_URL = Constants.expoConfig?.extra?.api_url || process.env['API_URL'];

console.log(API_URL);

export const apiClient = axios.create({
    baseURL: API_URL,
    adapter: cache.adapter,
    headers: {
        api_key: API_KEY
    },
})

export const quickApiClient = axios.create({
    baseURL: API_URL,
    adapter: smallerCache.adapter,
    headers: {
        api_key: API_KEY
    },
})