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
        },
        preview: {
            distribution: "internal",
            android: {
                buildType: "apk",
            },
        },
        production: {
            android: {
                buildType: "apk",
            },
        }
    },
    submit: {
        production: {}
    }
}
