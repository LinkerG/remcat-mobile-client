import React, { useEffect, useState } from "react"
import { Page } from "../../components/Pages"
import { Text } from "react-native"
import { useYear } from "../../hooks/useYear"
import { League, TeamSummary } from "../../services/types/league"
import { getLeagueResults } from "../../services/api/league"

export default function LeagueResume() {
    const year = useYear()
    const [leagueResume, setLeagueResume] = useState<League>()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const result = await getLeagueResults(year.toString())
            setLeagueResume(result)
            setLoading(false)
        }
        fetchData();
    }, [])

    return (
        <Page>
            <Text>Datos de la liga {year}</Text>

        </Page>
    )
}