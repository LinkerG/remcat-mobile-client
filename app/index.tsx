// /
import React from "react"
import { Text, Pressable } from "react-native"
import { Link } from "expo-router"
import { Page } from "../components/Pages"

export default function Index() {
    return (
        <Page>
            <Text>Soy el inicio</Text>
            <Link asChild href="competitions">
                <Pressable className="border">
                    <Text>Competiciones</Text>
                </Pressable>
            </Link>
        </Page>
    )
}