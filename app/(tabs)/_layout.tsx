import React from "react";
import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
            }}>
            <Tabs.Screen
                name="competitions"
                options={{
                    title: "Competiciones"
                }}
            />
            <Tabs.Screen
                name="league"
                options={{
                    title: "Liga"
                }}
            />
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home"
                }}
            />
            <Tabs.Screen
                name="teams"
                options={{
                    title: "Equipos"
                }}
            />
            <Tabs.Screen
                name="account"
                options={{
                    title: "Cuenta"
                }}
            />
        </Tabs>
    )
}