import React from "react";
import { Result } from "../../types/types";
import { sortResults } from "../../utils/sortResults";
import { Text, View } from "react-native";

interface Props {
    results: Result[]
}

export default function Table({ results }: Props) {
    const sortedResults = sortResults(results)

    return (
        <View>
            {(sortedResults.length === 0) ? (
                <Text>No hay resultsdos para esta categoria</Text>
            ) : (
                sortedResults.map((result, i) => (
                    <View key={result._id} className="flex-row">
                        <Text className="m-1">{i + 1}</Text>
                        <Text className="m-1">{result.teamShortName}</Text>
                        <Text className="m-1">{result.time}</Text>
                    </View>
                ))
            )}
        </View>
    )
}