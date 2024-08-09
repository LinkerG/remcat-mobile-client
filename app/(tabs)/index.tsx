// /
import React, { useEffect, useState } from "react"
import { Text } from "react-native"
import { Page } from "../../components/Pages"
import { Competition } from "../../services/types/competition"
import { getNextCompetition } from "../../services/api/competitions"
import { CompetitionCard } from "../../components/CompetitionCard"

function isToday(date: Date) {
    const today = new Date()

    return (
        today.getDate() === date.getDate() &&
        today.getMonth() === date.getMonth() &&
        today.getFullYear() === date.getFullYear()
    )
}

function getDaysLeft(date: Date) {
    const today = new Date()

    today.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);

    const differenceInTime = date.getTime() - today.getTime();
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));

    return differenceInDays;
}

export default function Home() {
    const [loading, setLoading] = useState<boolean>(true)
    const [competition, setCompetition] = useState<Competition>()

    useEffect(() => {
        const fetchData = async () => {
            setCompetition(await getNextCompetition());
            setLoading(false)
        };
        fetchData();
    }, []);

    const isCompetitionToday = competition && isToday(competition.date)

    return (
        <Page>
            {(!loading && competition) && (
                <>
                    {(isCompetitionToday) ? (
                        <Text>La competición de hoy!!</Text>
                    ) : (
                        <Text>Proxima competicion, faltan {getDaysLeft(competition.date)} dias</Text>
                    )}
                    {competition ? (
                        <CompetitionCard competition={competition} />
                    ) : (
                        <Text>Mas competiciones proximamente</Text>
                    )}
                </>
            )}
        </Page>
    )
}