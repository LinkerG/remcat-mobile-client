import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { useCategory, useDivision, useSetCategory, useSetDivision } from "../hooks/useCategory";
import { Result } from "../types/types";
import { Categories, Divisions } from "../types/consts";
import ResultsTable from "./tables/ResultsTable";
import { LeaguePickerStyle, UnderlineStyle } from "./Styles";
import Constants from "expo-constants";

interface Props {
    results: Result[]
}

export default function CompetitionResultsTable({ results }: Props) {
    const category = useCategory();
    const setCategory = useSetCategory();
    const division = useDivision();
    const setDivision = useSetDivision();
    const isWeb: boolean = Constants.expoConfig?.web?.shortName ? true : false;

    const [resultsToShow, setResultsToShow] = useState<Result[]>([])

    useEffect(() => {
        const fullCategory = category + division

        const filteredResults = results.filter(result => result.category === fullCategory);

        setResultsToShow(filteredResults)

    }, [category, division, results])

    return (
        <View>
            <Text className="text-2xl font-semibold mb-5">Resultados</Text>
            <View className={
                isWeb ?
                    "flex-row justify-around my-4" :
                    "flex-row justify-around my-4 border-b-2"
            }
                style={UnderlineStyle.underline}
            >
                <Picker
                    style={LeaguePickerStyle.half}
                    selectedValue={category}
                    onValueChange={(itemValue, itemIndex) =>
                        setCategory(itemValue)
                    }
                >
                    {Categories.map((category) => (
                        <Picker.Item key={category.key} label={category.name} value={category.key} />
                    ))}
                </Picker>
                <Picker
                    style={LeaguePickerStyle.half}
                    selectedValue={division}
                    onValueChange={(itemValue, itemIndex) =>
                        setDivision(itemValue)
                    }
                >
                    {Divisions.map((division) => (
                        <Picker.Item key={division.key} label={division.name} value={division.key} />
                    ))}
                </Picker>
            </View>
            <ResultsTable results={resultsToShow} />
        </View >
    )
}