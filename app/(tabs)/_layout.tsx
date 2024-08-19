import React from "react";
import { Tabs } from "expo-router";
import { CompetitionsIcon, HomeIcon, LeagueIcon, TeamIcon, UserIcon } from "../../components/Icons";

export default function TabsLayout() {
    const inactiveColor = "#076eed"
    const activeColor = "#db5500"

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 80,
                    paddingTop: 5,
                    paddingBottom: 10,
                },
                tabBarActiveTintColor: activeColor,
                tabBarInactiveTintColor: inactiveColor,
            }}>
            <Tabs.Screen
                name="competitions"
                options={{
                    title: "Competiciones",
                    tabBarIcon: ({ color }) => <CompetitionsIcon color={color} />,
                }}
            />
            <Tabs.Screen
                name="league"
                options={{
                    title: "Liga",
                    tabBarIcon: ({ color }) => <LeagueIcon color={color} />,
                }}
            />
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => <HomeIcon color={color} />,
                }}
            />
            <Tabs.Screen
                name="teams"
                options={{
                    title: "Equipos",
                    tabBarIcon: ({ color }) => <TeamIcon color={color} />,
                }}
            />
            <Tabs.Screen
                name="account"
                options={{
                    title: "Cuenta",
                    tabBarIcon: ({ color }) => <UserIcon color={color} />,
                }}
            />
        </Tabs >
    )
}