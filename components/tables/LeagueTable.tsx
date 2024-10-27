import React, { useEffect, useState } from "react";
import { League, Team } from "../../types/types";
import { Text, View } from "react-native";
import { getTeams } from "../../api/teams";
import { getTeamName } from "../../utils/functions";

interface Props {
    league: League;
}

interface RowProps {
    rank: number;
    result: any;
    teams: Team[];
    isFirst?: boolean;
    isLast?: boolean;
}

const LeagueRow = ({ rank, result, teams, isFirst, isLast }: RowProps) => (
    <View
        key={result.team_slug + result.team_number}
        className={`
            ${"flex-row py-1 justify-between"}
            ${isFirst ? "rounded-t-lg" : ""} 
            ${isLast ? "rounded-b-lg" : ""} 
            ${rank % 2 === 0 ? "bg-gray-300" : "bg-gray-200"}
            `}
    >
        <Text className="w-1/6 text-md text-center p-1">
            {rank === 1 ? "🥇" : rank === 2 ? "🥈" : rank === 3 ? "🥉" : "" + rank}
        </Text>
        <Text className="w-4/6 text-md p-1 whitespace-nowrap">
            {getTeamName(result.team_slug, teams)}
            {result.team_number !== 0 && " " + result.team_number}
        </Text>
        <Text className="w-1/6 text-md p-1 text-center">{result.points}</Text>
    </View>
);

// Componente principal para la tabla de liga
export default function LeagueTable({ league }: Props) {
    const [teams, setTeams] = useState<Team[]>([]);
    const [loading, setLoading] = useState(true);

    // Obtener los equipos
    useEffect(() => {
        const fetchTeams = async () => {
            const teamData = await getTeams();
            setTeams(teamData);
            setLoading(false);
        };
        fetchTeams();
    }, []);

    // Ordena los equipos de la liga
    const sortedLeague = {
        ...league,
        league_summary: league.league_summary.sort((a, b) => b.points - a.points)
    };

    if (loading) return null; // TODO: Añadir loader de tabla

    return (
        <View>
            {sortedLeague.league_summary.length === 0 ? (
                <Text>No hay resultados para esta categoría</Text>
            ) : (
                <View className="mb-5">
                    {sortedLeague.league_summary.map((result, i) => (
                        <LeagueRow
                            key={result.team_slug + result.team_number}
                            rank={i + 1}
                            result={result}
                            teams={teams}
                            isFirst={i === 0}
                            isLast={i === sortedLeague.league_summary.length - 1}
                        />
                    ))}
                </View>
            )}
        </View>
    );
}
