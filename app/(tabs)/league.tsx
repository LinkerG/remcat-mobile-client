import React from "react";
import { Page } from "../../components/Pages";
import { Text } from "react-native";
import { useYear } from "../../hooks/useYear";

export default function League() {
    const year = useYear()

    return (
        <Page>
            <Text>Datos de la liga {year}</Text>
        </Page>
    )
}