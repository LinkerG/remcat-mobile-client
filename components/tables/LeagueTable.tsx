import React from "react";
import { League } from "../../services/types/league";
import { Text, View } from "react-native";

interface Props {
    league: League
}

export default function LeagueTable({ league }: Props) {
    // Ordena los equipos por la cantidad de puntos de mayor a menor
    const sortedLeague = {
        ...league,
        teamSummary: league.teamSummary.sort((a, b) => b.points - a.points)
    };

    return (
        <View>
            {sortedLeague.teamSummary.length === 0 ? (
                <Text>No hay resultados para esta categoría</Text>
            ) : (
                sortedLeague.teamSummary.map((result, i) => (
                    <View key={result.teamName} className="flex-row">
                        <Text className="m-1">{i + 1}</Text>
                        <Text className="m-1">{result.teamName}</Text>
                        <Text className="m-1">{result.points}</Text>
                    </View>
                ))
            )}
        </View>
    );
}