import React from "react";
import { TeamResume } from "../types/types";
import { Text, ScrollView, View } from "react-native";

interface Props {
    resume: TeamResume[]
}

export function TeamResumeComponent({ resume }: Props) {
    return (
        <ScrollView>
            {resume.map((year) => (
                <>
                    <Text>{year.year}</Text>
                    {year.results.map((result) => (
                        <View className="flex-row w-full">
                            <Text className="mr-2">{result.competition_name}</Text>
                            <Text className="mr-2">{result.category}</Text>
                            <Text className="mr-2">{result.position}</Text>
                        </View>
                    ))}
                </>
            ))}
        </ScrollView>
    )

}