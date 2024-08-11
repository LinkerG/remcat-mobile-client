// /
import React, { useEffect, useState } from "react"
import { Text } from "react-native"
import { Page } from "../../components/Pages"
import { Competition } from "../../services/types/competition"
import { getNextCompetitions } from "../../services/api/competitions"
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
    const [competitions, setCompetitions] = useState<Competition[]>([])

    useEffect(() => {
        const fetchData = async () => {
            setCompetitions(await getNextCompetitions());
            setLoading(false)
        };
        fetchData();
    }, []);

    const nextCompetition = competitions[0];
    const isCompetitionToday = nextCompetition ? isToday(nextCompetition.date) : false;

    return (
        <Page>
            {(!loading) && (
                <>
                    {(competitions.length === 0) ? (
                        <Text>Mas competiciones proximamente</Text>
                    ) : (
                        <>
                            {isCompetitionToday ? (
                                <Text>¡La competición de hoy!</Text>
                            ) : (
                                <Text>Próxima competición, faltan {getDaysLeft(nextCompetition.date)} días</Text>
                            )}
                            <CompetitionCard competition={nextCompetition} />
                            <Text>Próximas competiciones</Text>
                            {(competitions.length > 1) &&
                                competitions.map((competition, i) => (
                                    i === 0 ? (
                                        null
                                    ) : (
                                        <CompetitionCard competition={competition} />
                                    )
                                ))
                            }
                        </>
                    )}
                </>
            )}
        </Page>
    )
}