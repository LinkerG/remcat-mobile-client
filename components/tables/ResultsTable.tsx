import React, { useEffect, useState } from "react";
import { Result, Team } from "../../types/types";
import { hasFinals, sortResults } from "../../utils/functions";
import { Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { LeaguePickerStyle, UnderlineStyle } from "../Styles";
import { getTeamName } from "../../utils/functions";
import { getTeams } from "../../api/teams";
import Constants from "expo-constants";
import { useCategory, useDivision } from "../../hooks/useCategory";

interface Props {
    results: Result[];
}

interface RowProps {
    rank: number;
    result: Result;
    teams: Team[];
    isFirst?: boolean;
    isLast?: boolean;
}

const ResultRow = ({ rank, result, teams, isFirst, isLast }: RowProps) => (
    <View
        className={`flex-row py-1 justify-between ${isFirst ? "rounded-t-lg" : ""} ${isLast ? "rounded-b-lg" : ""} ${rank % 2 === 0 ? "bg-gray-300" : "bg-gray-200"}`}
    >
        <Text className="w-1/6 text-md text-center p-1">
            {rank === 1 ? "🥇" : rank === 2 ? "🥈" : rank === 3 ? "🥉" : "" + rank}
        </Text>
        <Text className="w-3/6 text-md p-1 whitespace-nowrap">
            {getTeamName(result.team_slug, teams)}
            {result.team_number !== 0 && " " + result.team_number}
        </Text>
        <Text className="w-2/6 text-md p-1 text-center">{result.time}</Text>
    </View>
);

export default function ResultsTable({ results }: Props) {
    const isWeb: boolean = Constants.expoConfig?.web?.shortName ? true : false;

    const category = useCategory();
    const division = useDivision();
    const finals: number = hasFinals(category, division, results) ? 1 : 0;



    const [teams, setTeams] = useState<Team[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedTab, setSelectedTab] = useState<number>(finals);

    const sortedResults = selectedTab === 1
        ? sortResults(results.filter((res) => res.isFinal === true))
        : sortResults(results.filter((res) => res.isFinal === false));

    useEffect(() => {
        const fetchData = async () => {
            const teamData = await getTeams();
            setTeams(teamData);
            setLoading(false);
        };
        fetchData();
    }, []);

    if (loading) return null; // TODO: Añadir loader de tabla

    return (
        <View>
            <View
                className={isWeb ? "flex-row justify-around mt-1 mb-5" : "flex-row justify-around mt-1 mb-5 border-b-2"}
                style={UnderlineStyle.underline}
            >
                <Picker
                    style={LeaguePickerStyle.full}
                    selectedValue={selectedTab}
                    onValueChange={(itemValue) => setSelectedTab(itemValue)}
                >
                    <Picker.Item key={"semi"} label={"Semifinal"} value={0} />
                    <Picker.Item key={"final"} label={"Final"} value={1} />
                </Picker>
            </View>
            {sortedResults.length === 0 ? (
                <Text className="px-3 mt-5 text-lg">No hay resultados para esta categoría</Text>
            ) : (
                <View className="mb-5">
                    {sortedResults.map((result, i) => (
                        <ResultRow
                            key={result.team_slug + result.team_number}
                            rank={i + 1}
                            result={result}
                            teams={teams}
                            isFirst={i === 0}
                            isLast={i === sortedResults.length - 1}
                        />
                    ))}
                </View>
            )}
        </View>
    );
}
