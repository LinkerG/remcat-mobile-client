import 'dotenv/config';

export default {
    expo: {
        name: "client",
        slug: "client",
        version: "1.0.0",
        orientation: "portrait",
        icon: "./assets/icon.png",
        userInterfaceStyle: "light",
        scheme: "remcat",
        splash: {
            image: "./assets/splash.png",
            resizeMode: "contain",
            backgroundColor: "#ffffff"
        },
        ios: {
            supportsTablet: true
        },
        android: {
            adaptiveIcon: {
                foregroundImage: "./assets/adaptive-icon.png",
                backgroundColor: "#ffffff"
            }
        },
        web: {
            favicon: "./assets/favicon.png"
        },
        plugins: [
            "expo-router"
        ],
        extra: {
            api_url: process.env.API_URL,
            api_key: process.env.API_KEY,
        },
    }
};