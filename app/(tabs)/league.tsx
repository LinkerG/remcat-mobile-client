import React, { useEffect, useState } from "react"
import { ScrollPage } from "../../components/Pages"
import { Text, View } from "react-native"
import { useYear } from "../../hooks/useYear"
import { League } from "../../types/types"
import { getLeagueResults } from "../../api/league"
import LeagueResults from "../../components/LeagueResults"

export default function LeagueResume() {
    const year = useYear()
    const [leagueResume, setLeagueResume] = useState<League[]>()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const result = await getLeagueResults(year.toString())
            setLeagueResume(result)
            setLoading(false)
        }
        fetchData();
    }, [year])

    return (
        <ScrollPage>
            {!loading ? (
                <View className="m-5">
                    <Text className="text-2xl font-semibold mb-2">Datos de la liga {year}</Text>
                    <LeagueResults leagues={leagueResume as League[]} />
                </View>
            ) : (
                null // TODO: Añadir loader de pagina
            )}
        </ScrollPage>
    )
}