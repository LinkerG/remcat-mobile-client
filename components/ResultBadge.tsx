import React from "react";
import { Text, View } from "react-native";

interface Props {
    category: string
    position: number
}

export default function ResultBadge({ category, position }: Props) {

    switch (position) {
        case 1:
            return (
                <View
                    className="flex-row rounded my-2 p-1 justify-between w-20"
                    style={{ backgroundColor: "gold" }}
                >
                    <Text className="ml-2">{category}</Text>
                    <Text className="mr-2">{position} 🥇</Text>
                </View>
            )
        case 2:
            return (
                <View
                    className="flex-row rounded my-2 p-1 justify-between w-20"
                    style={{ backgroundColor: "silver" }}
                >
                    <Text className="ml-2">{category}</Text>
                    <Text className="mr-2">{position} 🥈</Text>
                </View>
            )
        case 3:
            return (
                <View
                    className="flex-row rounded my-2 p-1 justify-between w-20"
                    style={{ backgroundColor: "#CD7F32" }}
                >
                    <Text className="ml-2">{category}</Text>
                    <Text className="mr-2">{position} 🥉</Text>
                </View>
            )
        default:
            return (
                <View className="flex-row rounded my-2 p-1 justify-between w-20 bg-gray-300">
                    <Text className="ml-2">{category}</Text>
                    <Text className="mr-2">{position} 🏅</Text>
                </View>
            )
    }
}