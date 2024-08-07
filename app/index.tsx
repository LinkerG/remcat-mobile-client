// /
import React from "react"
import { View, Text, Pressable } from "react-native"
import { Link } from "expo-router"

export default function Index() {
    return (
        <View>
            <Text>Soy el inicio</Text>
            <Link asChild href="competitions">
                <Pressable className="border">
                    <Text>Competiciones</Text>
                </Pressable>
            </Link>
        </View>
    )
}