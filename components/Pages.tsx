import React, { ReactNode } from "react";
import { ScrollView, View } from "react-native";

interface PageProps {
    children: ReactNode;
}

export function Page({ children }: PageProps) {
    return (
        <View className="flex-1">
            {children}
        </View>
    )
}

export function ScrollPage({ children }: PageProps) {
    return (
        <ScrollView className="flex-1">
            {children}
        </ScrollView>
    )
}