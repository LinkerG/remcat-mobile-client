import React, { useEffect, useState } from "react";
import { useBoatType, useSetBoatType } from "../hooks/useBoatType";
import { useCategory, useDivision, useSetCategory, useSetDivision } from "../hooks/useCategory";
import { Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { League } from "../types/types";
import { Categories, Divisions, BoatTypes } from "../types/consts";
import LeagueTable from "./tables/LeagueTable";
import { LeaguePickerStyle, UnderlineStyle } from "./Styles";
import Constants from "expo-constants";

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

    const isWeb: boolean = Constants.expoConfig?.web?.shortName ? true : false;

    const [loading, setLoading] = useState(true)
    const [selectedLeague, setSelectedLeague] = useState<League>()
    useEffect(() => {
        const fullCategory = category + division
        console.log(leagues);

        const league = leagues.find(
            (league) => league.boat_type === boatType && league.category === fullCategory
        );

        setSelectedLeague(league)
        setLoading(false)
    }, [boatType, category, division, leagues])

    return (
        <>
            {!loading && (
                <View className="bg-gray-100 px-5 rounded-lg mt-5"
                    style={{
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.3,
                        shadowRadius: 6,
                        elevation: 8, // Para Android
                    }}
                >
                    <View
                        className={
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
                    <View
                        className={
                            !isWeb ? "border-b-2 mb-5" : ""
                        }
                        style={UnderlineStyle.underline}
                    >
                        <Picker
                            style={LeaguePickerStyle.full}
                            selectedValue={boatType}
                            onValueChange={(itemValue, itemIndex) =>
                                setBoatType(itemValue)
                            }
                        >
                            {BoatTypes.map((boatType) => (
                                <Picker.Item key={boatType.key} label={boatType.name} value={boatType.key} />
                            ))}
                        </Picker>
                    </View>
                    {!selectedLeague ? (
                        <Text className="my-10">No hay resultados de esta categoría</Text>
                    ) : (
                        <LeagueTable league={selectedLeague} />
                    )}
                </View >
            )
            }
        </>
    )
}