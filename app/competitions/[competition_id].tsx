import React from "react";
import { Page } from "../../components/Pages";
import { Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function CompetitionResume() {
    const { competition_id } = useLocalSearchParams();
    return (
        <Page>
            <Text>a</Text>
        </Page>
    )
}