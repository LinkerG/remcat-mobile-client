import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Slot } from 'expo-router'
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
    default: "native",
});

export default function Layout() {
    return (
        <View className="w-100 bg-black flex-1">
            <SafeAreaView className="h-full">
                <View className="w-100 h-full bg-white">
                    <StatusBar style="light" />
                    <Header />
                    <Slot />
                </View>
            </SafeAreaView>
        </View>
    )
}