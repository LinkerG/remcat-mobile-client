// /competitions/[slug]
import React, { useEffect, useState } from "react";
import { ScrollPage } from "../../components/Pages";
import { useLocalSearchParams } from "expo-router";
import { getCompetitionBySlug } from "../../api/competitions";
import { Competition, Result } from "../../types/types";
import { Text, View } from "react-native";
import { getResultsFromCompetition } from "../../api/results";
import CompetitionResults from "../../components/CompetitionResults";

export default function CompetitionResume() {
    const { slug } = useLocalSearchParams();
    const [loading, setLoading] = useState<boolean>(true)
    const [competition, setCompetition] = useState<Competition>()
    const [results, setResults] = useState<Result[]>()

    useEffect(() => {
        const fetchData = async () => {
            const _competition = await getCompetitionBySlug(slug as string)
            setCompetition(_competition)
            setResults(await getResultsFromCompetition(_competition._id))
            setLoading(false)
        }
        fetchData();
    }, [slug])

    return (
        <ScrollPage>
            {(!loading && competition && results) ? (
                <>
                    <View
                        className="m-5 border"
                    >
                        <Text>{competition.name}</Text>
                    </View>
                    <View
                        className="m-5 border"
                    >
                        <Text>Resultados</Text>
                        <CompetitionResults results={results} />
                    </View>
                </>
            ) : (
                null // TODO: Añadir loader de página
            )}
        </ScrollPage>
    )
}