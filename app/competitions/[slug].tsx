// /competitions/[slug]
import React, { useEffect, useState } from "react";
import { ScrollPage } from "../../components/Pages";
import { useLocalSearchParams } from "expo-router";
import { getCompetitionBySlug } from "../../services/api/competitions";
import { Competition } from "../../services/types/competition";
import { Text, View } from "react-native";
import { Result } from "../../services/types/result";
import { getResultsFromCompetition } from "../../services/api/results";
import CompetitionResults from "../../components/CompetitionResults";

export default function CompetitionResume() {
    const { slug } = useLocalSearchParams();
    const [loading, setLoading] = useState<boolean>(true)
    const [competition, setCompetition] = useState<Competition>()
    const [results, setResults] = useState<Result[]>()

    useEffect(() => {
        const fetchData = async () => {
            setCompetition(await getCompetitionBySlug(slug as string));
        };
        fetchData();
    }, [slug]);
    useEffect(() => {
        if (competition) {
            const fetchData = async () => {
                setResults(await getResultsFromCompetition(competition._id))
                setLoading(false)
            };
            fetchData();
        }
    }, [competition])

    return (
        <ScrollPage>
            {!loading && competition && results && (
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
            )}
        </ScrollPage>
    )
}