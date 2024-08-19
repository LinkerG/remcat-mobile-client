import React from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6"

export const HomeIcon = (props: any) => {
    return (
        <FontAwesome6 name="house" size={24} color="white" {...props} />
    )
}

export const UserIcon = (props: any) => {
    return (
        <FontAwesome6 name="user" size={24} color="white" {...props} />
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
        <FontAwesome6 name="calendar" size={24} color="white" {...props} />
    )
}