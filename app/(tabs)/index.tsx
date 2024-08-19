// /
import React, { useEffect, useState } from "react"
import { Text, View } from "react-native"
import { ScrollPage } from "../../components/Pages"
import { Competition } from "../../types/types"
import { getNextCompetitions } from "../../api/competitions"
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
        <ScrollPage>
            {(!loading) && (
                <View className="m-5">
                    {(competitions.length === 0) ? (
                        <Text className="text-2xl font-semibold mb-2">¡Mas competiciones próximamente!</Text>
                    ) : (
                        <>
                            {isCompetitionToday ? (
                                <Text className="text-2xl font-semibold mb-2">¡La competición de hoy!</Text>
                            ) : (
                                <Text className="text-2xl font-semibold mb-2">Próxima competición, faltan {getDaysLeft(nextCompetition.date)} días</Text>
                            )}
                            <CompetitionCard competition={nextCompetition} />
                            {competitions.length > 1 ? (
                                <>
                                    <Text className="my-3 text-xl font-medium">Siguientes competiciones:</Text>
                                    {competitions.slice(1).map((competition) => (
                                        <CompetitionCard key={competition._id} competition={competition} />
                                    ))}
                                </>
                            ) : (
                                <Text className="my-3 text-xl font-medium">Más competiciones próximamente!</Text>
                            )}
                        </>
                    )}
                </View>
            )}
        </ScrollPage>
    )
}