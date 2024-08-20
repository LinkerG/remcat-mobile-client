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
    const today = new Date()

    useEffect(() => {
        const fetchData = async () => {
            const _competition = await getCompetitionBySlug(slug as string)
            setCompetition(_competition)
            setResults(await getResultsFromCompetition(_competition._id))
            setLoading(false)
        };
        fetchData();
    }, [slug])

    return (
        <ScrollPage>
            {(!loading && competition) ? (
                <>
                    <View className="m-5">
                        <Text
                            className="text-2xl font-semibold mb-5"
                        >
                            {competition.name}
                        </Text>
                        {!results || results.length === 0 || competition.date > today ? (
                            null // TODO: Mostrar detalles de la competición
                        ) : (
                            <CompetitionResults results={results} />
                        )}
                    </View>
                </>
            ) : (
                null // TODO: Añadir loader de página
            )}
        </ScrollPage>
    )
}