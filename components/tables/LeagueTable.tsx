import React, { useEffect, useState } from "react";
import { League, Team } from "../../types/types";
import { Text, View } from "react-native";
import { UnderlineStyle } from "../Styles";
import { getTeams } from "../../api/teams";
import getTeamName from "../../utils/getTeamName";

interface Props {
    league: League
}

export default function LeagueTable({ league }: Props) {
    // Ordena los equipos por la cantidad de puntos de mayor a menor
    const sortedLeague = {
        ...league,
        leagueSummary: league.leagueSummary.sort((a, b) => b.points - a.points)
    };

    const [teams, setTeams] = useState<Team[]>()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            setTeams(await getTeams())
            setLoading(false)
        }
        fetchData()
    }, []);

    return (
        loading ? (
            null // TODO: Añadir loader de tabla
        ) : (
            <View>
                {(sortedLeague.leagueSummary.length === 0) ? (
                    <Text>No hay resultados para esta categoría</Text>
                ) : (
                    <>
                        <View
                            className="flex-row border-b-2 mb-1 px-3"
                            style={UnderlineStyle.underline}
                        >
                            <Text className="w-1/4 text-lg p-1">Posición</Text>
                            <Text className="w-2/4 text-lg p-1">Equipo</Text>
                            <Text className="w-1/4 text-lg p-1 text-right">Puntos</Text>
                        </View>
                        {sortedLeague.leagueSummary.map((result, i) => (
                            <View key={result.teamName}
                                className={
                                    ((i + 1) % 2 === 0) ?
                                        "flex-row justify-between px-3 bg-blue-200" :
                                        "flex-row justify-between px-3 bg-blue-100"
                                }
                            >
                                <Text className="w-1/4 text-lg p-1">
                                    {i + 1 === 1 ? "1 🥇" : i + 1 === 2 ? "2 🥈" : i + 1 === 3 ? "3 🥉" : i + 1}
                                </Text>
                                <Text className="w-2/4 text-lg p-1">{getTeamName(result.teamName, teams as Team[])}</Text>
                                <Text className="w-1/4 text-lg p-1 text-right">{result.points}</Text>
                            </View>
                        ))}
                    </>
                )}
            </View>
        )
    );
}