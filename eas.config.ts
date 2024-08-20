import 'dotenv/config';

export default {
    cli: {
        version: ">= 10.2.4"
    },
    build: {
        development: {
            developmentClient: true,
            distribution: "internal",
            android: {
                buildType: "apk",
            },
            env: {
                API_URL: process.env.API_URL,
                API_KEY: process.env.API_KEY,
            },
        },
        preview: {
            distribution: "internal",
            android: {
                buildType: "apk",
            },
            env: {
                API_URL: process.env.API_PROD_URL,
                API_KEY: process.env.API_KEY,
            },
        },
        production: {
            android: {
                buildType: "apk",
            },
            env: {
                API_URL: process.env.API_PROD_URL,
                API_KEY: process.env.API_KEY,
            },
        }
    },
    submit: {
        production: {}
    }
}
