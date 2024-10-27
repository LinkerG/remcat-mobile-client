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
    results: Result[]
}

export default function ResultsTable({ results }: Props) {
    const isWeb: boolean = Constants.expoConfig?.web?.shortName ? true : false;

    const category = useCategory();
    const division = useDivision();

    const finals: boolean = hasFinals(category, division, results)

    const [teams, setTeams] = useState<Team[]>()
    const [loading, setLoading] = useState(true)
    const [selectedTab, setSelectedTab] = useState<number>(finals ? 1 : 0)
    console.log(selectedTab)

    // eslint-disable-next-line eqeqeq
    const sortedResults = selectedTab == 1 ?
        sortResults(results.filter((res) => res.isFinal === true)) :
        sortResults(results.filter((res) => res.isFinal === false))

    console.log(sortedResults)

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
                <View
                    className={
                        isWeb ?
                            "flex-row justify-around mt-1" :
                            "flex-row justify-around mt-1 border-b-2"
                    }
                    style={UnderlineStyle.underline}
                >
                    <Picker
                        style={LeaguePickerStyle.full}
                        selectedValue={selectedTab}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedTab(itemValue)
                        }
                    >

                        <Picker.Item key={"semi"} label={"Semifinal"} value={0} />
                        <Picker.Item key={"final"} label={"Final"} value={1} />
                    </Picker>
                </View>
                <View
                    className="flex-row border-b-2 mb-1 px-3"
                    style={UnderlineStyle.underline}
                >
                    <Text className="w-1/4 text-lg p-1">Posición</Text>
                    <Text className="w-2/4 text-lg p-1">Equipo</Text>
                    <Text className="w-1/4 text-lg p-1 text-right">Tiempo</Text>
                </View>
                {(sortedResults.length === 0) ? (
                    <Text className="px-3 mt-5 text-lg">No hay resultados para esta categoría</Text>
                ) : (
                    sortedResults.map((result, i) => (
                        <View key={result.team_slug}
                            className={
                                ((i + 1) % 2 === 0) ?
                                    "flex-row justify-between px-3 bg-blue-200" :
                                    "flex-row justify-between px-3 bg-blue-100"
                            }
                        >
                            <Text className="w-1/4 text-md p-1">
                                {i + 1 === 1 ? "1 🥇" : i + 1 === 2 ? "2 🥈" : i + 1 === 3 ? "3 🥉" : i + 1}
                            </Text>
                            <Text className="w-2/4 text-md p-1">{getTeamName(result.team_slug, teams as Team[])}</Text>
                            <Text className="w-1/4 text-md p-1 text-right">{result.time}</Text>
                        </View>
                    ))
                )}
            </View>
        )
    )
}