import React, { ReactNode } from "react";
import { ScrollView, View } from "react-native";

interface PageProps {
    children: ReactNode;
    refreshControl: any;
}

export function Page({ children }: PageProps) {
    return (
        <View className="flex-1">
            {children}
        </View>
    )
}

export function ScrollPage({ children, refreshControl }: PageProps) {
    if (refreshControl) {
        return (
            <ScrollView refreshControl={refreshControl}>
                {children}
            </ScrollView>
        )
    } else {
        return (
            <ScrollView className="flex-1">
                {children}
            </ScrollView>
        )
    }
}