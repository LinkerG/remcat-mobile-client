import React, { useState } from "react";
import { Page } from "../../components/Pages";
import { Text } from "react-native";

export default function League() {
    const [season, setSeason] = useState<number>(new Date().getFullYear())

    return (
        <Page>
            <Text>Datos de la liga {season}</Text>
        </Page>
    )
}