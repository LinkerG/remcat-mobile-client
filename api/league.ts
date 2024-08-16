import { apiClient } from "./apiClient"
import { League } from "../types/types"

export const getLeagueResults = async (year: string) => {
    try {
        const response = await apiClient.get(`/league/${year}`)
        const leagues: League[] = response.data.leagues
        console.log(leagues);

        return leagues
    } catch (error: any) {
        console.error("Error fetching data:", error.message)
        console.error(
            "Error details:",
            error.response ? error.response.data : "No response data",
        )
        throw error
    }
}
