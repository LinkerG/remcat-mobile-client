import React, { useEffect, useState } from "react";
import { useBoatType, useSetBoatType } from "../hooks/useBoatType";
import { useCategory, useDivision, useSetCategory, useSetDivision } from "../hooks/useCategory";
import { Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { League } from "../types/types";
import { categories, divisions, boatTypes } from "../types/consts";
import LeagueTable from "./tables/LeagueTable";

interface Props {
    leagues: League[]
}

export default function LeagueResults({ leagues }: Props) {
    const category = useCategory();
    const setCategory = useSetCategory();
    const division = useDivision();
    const setDivision = useSetDivision();
    const boatType = useBoatType();
    const setBoatType = useSetBoatType();

    const [loading, setLoading] = useState(true)
    const [selectedLeague, setSelectedLeague] = useState<League>()
    useEffect(() => {
        const fullCategory = category + division
        const league = leagues.find(
            (league) => league.boatType === boatType && league.category === fullCategory
        );

        setSelectedLeague(league)
        setLoading(false)
    }, [boatType, category, division, leagues])

    return (
        <>
            {!loading && (
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
                        <Picker
                            selectedValue={boatType}
                            onValueChange={(itemValue, itemIndex) =>
                                setBoatType(itemValue)
                            }
                        >
                            {boatTypes.map((boatType) => (
                                <Picker.Item key={boatType.key} label={boatType.name} value={boatType.key} />
                            ))}
                        </Picker>
                    </View>
                    {!selectedLeague ? (
                        <Text>No hay resultados de esta categoria</Text>
                    ) : (
                        <LeagueTable league={selectedLeague} />
                    )}
                </View >
            )
            }
        </>
    )
}