import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const isWeb: boolean = Constants.expoConfig?.web?.shortName ? true : false;

export const LeaguePickerStyle = StyleSheet.create({
    half: {
        width: "50%",
        padding: isWeb ? 10 : 0,
        marginBottom: isWeb ? 5 : 0,
    },
    full: {
        width: "100%",
        padding: isWeb ? 10 : 0,
        marginBottom: isWeb ? 15 : 0,
    }
})

export const UnderlineStyle = StyleSheet.create({
    underline: {
        borderColor: "#6B6B6B",
    }
})