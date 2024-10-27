import React from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6"
import FontAwesome5 from "@expo/vector-icons/FontAwesome5"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import { Text, View } from "react-native";
import { useYear } from "../hooks/useYear";

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
        <View className="flex-row ml-5 justify-center items-center">
            {/* <MaterialIcons name="rowing" size={30} color="black" {...props} /> */}
            <Text className=" text-white font-bold text-xl">RemCAT</Text>
        </View>
    )
}

export const ChangeIcon = (props: any) => {
    const year = useYear();
    return (
        <View className="flex-row mr-5 justify-center items-center rounded-2xl bg-blue-500 p-2 px-3">
            <Text className="text-white font-semibold text-md mr-1">{year} </Text>
            <FontAwesome6 name="arrow-right" size={16} color="white" {...props} />
        </View>
    )
}