import React, { useEffect, useState } from "react"
import { Page } from "../../components/Pages"
import { Text } from "react-native"
import { useYear } from "../../hooks/useYear"
import { League } from "../../services/types/league"
import { getLeagueResults } from "../../services/api/league"
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
                <>
                    <Text>Datos de la liga {year}</Text>
                    <LeagueResults leagues={leagueResume as League[]} />
                </>
            )}
        </Page>
    )
}