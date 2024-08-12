import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { useCategory, useDivision, useSetCategory, useSetDivision } from "../hooks/useCategory";
import { Result } from "../services/types/result";
import { categories, divisions } from "../services/types/consts";
import Table from "./tables/Table";

interface Props {
    results: Result[]
}

function HasFinals(category: string, division: string, results: Result[]): boolean {
    const fullCategory = category + division;

    const filteredResults = results.filter(result => result.category === fullCategory);

    const hasFinals = filteredResults.some(result => result.isFinal);
    console.log(hasFinals)

    return hasFinals;
}

export default function CompetitionResultsTable({ results }: Props) {
    const category = useCategory();
    const setCategory = useSetCategory();
    const division = useDivision();
    const setDivision = useSetDivision();

    const hasFinals = HasFinals(category, division, results)

    const [resultsToShow, setResultsToShow] = useState<Result[]>([])

    useEffect(() => {
        const fullCategory = category + division

        const filteredResults = results.filter(result => result.category === fullCategory);

        setResultsToShow(filteredResults)

    }, [category, division, results])

    return (
        <View>
            <View>
                <Picker
                    selectedValue={category}
                    onValueChange={(itemValue, itemIndex) =>
                        setCategory(itemValue)
                    }
                >
                    {categories.map((category) => (
                        <Picker.Item key={category.key} label={category.name} value={category.key} />
                    ))}
                </Picker>
                <Picker
                    selectedValue={division}
                    onValueChange={(itemValue, itemIndex) =>
                        setDivision(itemValue)
                    }
                >
                    {divisions.map((division) => (
                        <Picker.Item key={division.key} label={division.name} value={division.key} />
                    ))}
                </Picker>
            </View>
            {hasFinals ? (
                <Text>Aqui iria una tabla con tabs</Text>
            ) : (
                <Table results={resultsToShow} />
            )
            }
        </View >
    )
}