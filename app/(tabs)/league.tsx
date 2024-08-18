import React, { useEffect, useState } from "react"
import { Page } from "../../components/Pages"
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
        <Page>
            {!loading && (
                <View className="m-5">
                    <Text>Datos de la liga {year}</Text>
                    <LeagueResults leagues={leagueResume as League[]} />
                </View>
            )}
        </Page>
    )
}