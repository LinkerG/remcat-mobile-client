import React, { useEffect, useState } from "react";
import { Page } from "../../components/Pages";
import { CompetitionCard } from "../../components/CompetitionCard";
import { useLocalSearchParams } from "expo-router";
import { getCompetitionBySlug } from "../../services/api/competitions";
import { Competition } from "../../services/types/competition";

export default function CompetitionResume() {
    const { slug } = useLocalSearchParams();
    const [loading, setLoading] = useState<boolean>(true)
    const [competition, setCompetition] = useState<Competition>()

    useEffect(() => {
        const fetchData = async () => {
            setCompetition(await getCompetitionBySlug(slug as string));
            setLoading(false)
        };
        fetchData();
    }, [slug]);

    return (
        <Page>
            {!loading && competition && (
                <CompetitionCard key={competition._id} competition={competition} />
            )}
        </Page>
    )
}