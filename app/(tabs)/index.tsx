// /
import React, { useEffect, useState } from "react"
import { Text, View } from "react-native"
import { ScrollPage } from "../../components/Pages"
import { Competition } from "../../types/types"
import { getNextCompetitions } from "../../api/competitions"
import { CompetitionCard } from "../../components/CompetitionCard"
import { isToday, getDaysLeft } from "../../utils/functions";

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
            {(!loading) ? (
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
            ) : (
                null // TODO: Añadir loader de página
            )}
        </ScrollPage>
    )
}