import axios from "axios"
import { setupCache } from 'axios-cache-adapter';
import Constants from "expo-constants";

const cache = setupCache({
    maxAge: 15 * 60 * 1000 // 15 minutos
});

const smallerCache = setupCache({
    maxAge: 1 * 60 * 1000 // 15 minutos
});

// Se pone asigna de esta manera los valores ya que la web lee las variables de 
// entorno de una manera diferente que Android/IOS
const API_KEY = Constants.expoConfig?.extra?.api_key || process.env['API_KEY'];
const API_URL = Constants.expoConfig?.extra?.api_url || process.env['API_URL'];

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