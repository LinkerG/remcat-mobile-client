import React from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6"
import FontAwesome5 from "@expo/vector-icons/FontAwesome5"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import { Text, View } from "react-native";

export const HomeIcon = (props: any) => {
    return (
        <FontAwesome6 name="house" size={24} color="white" {...props} />
    )
}

export const UserIcon = (props: any) => {
    return (
        <FontAwesome6 name="user" solid size={24} color="white" {...props} />
    )
}

export const TeamIcon = (props: any) => {
    return (
        <FontAwesome6 name="people-group" size={24} color="white" {...props} />
    )
}

export const LeagueIcon = (props: any) => {
    return (
        <FontAwesome6 name="trophy" size={24} color="white" {...props} />
    )
}

export const CompetitionsIcon = (props: any) => {
    return (
        <FontAwesome6 name="calendar" solid size={24} color="white" {...props} />
    )
}

export const InstagramIcon = (props: any) => {
    return (
        <FontAwesome6 name="instagram" size={24} color="white" {...props} />
    )
}

export const FacebookIcon = (props: any) => {
    return (
        <FontAwesome6 name="facebook" size={24} color="white" {...props} />
    )
}

export const TwitterIcon = (props: any) => {
    return (
        <FontAwesome6 name="twitter" size={24} color="white" {...props} />
    )
}

export const LinkedInIcon = (props: any) => {
    return (
        <FontAwesome6 name="linkedin" size={24} color="white" {...props} />
    )
}

export const WebIcon = (props: any) => {
    return (
        <FontAwesome6 name="link" size={24} color="white" {...props} />
    )
}

export const AppLogo = (props: any) => {
    return (
        <View className="flex-row ml-5 justify-center items-center rounded bg-blue-300 p-1">
            <MaterialIcons name="rowing" size={30} color="black" {...props} />
            <Text className="ml-2 text-black font-semibold text-lg">RemCAT</Text>
        </View>
    )
}

export const ChangeIcon = (props: any) => {
    return (
        <View className="flex-row-reverse mr-5 justify-center items-center rounded bg-blue-300 p-1">
            <FontAwesome5 name="cog" size={20} color="black" {...props} />
            <Text className="mr-2 text-black text-md">Cambiar año</Text>
        </View>
    )
}