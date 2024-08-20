import 'dotenv/config';

export default {
    expo: {
        name: "client",
        owner: "linkerg",
        slug: "remcat",
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
            package: "com.linkerg.remcat",
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
            "eas": {
                "projectId": "765740bd-f97e-4bc0-bf25-544f84d7fa81"
            }
        },
    }
};
