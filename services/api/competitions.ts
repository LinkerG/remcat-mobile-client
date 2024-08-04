import { apiClient } from "./apiClient"
import { Competition } from "../types/competition"

export const getCompetitions = async () => {
    try {
        const response = await apiClient.get("/competitions")
        console.log(response.data.competitions);
        const competitions: Competition[] = response.data.competitions;
        return competitions
    } catch (error: any) {
        console.error("Error fetching data:", error.message)
        console.error(
            "Error details:",
            error.response ? error.response.data : "No response data",
        )
        throw error
    }
}

export const getCompetitionById = async (_id: string) => {
    try {
        const response = await apiClient.get("/competitions/${_id}")
        console.log(response.data.competition);
        const competition: Competition = response.data.competition;
        return competition
    } catch (error: any) {
        console.error("Error fetching data:", error.message)
        console.error(
            "Error details:",
            error.response ? error.response.data : "No response data",
        )
        throw error
    }
}

export const getCompetitionsBySeason = async (season: string) => {
    try {
        const response = await apiClient.get(`/competitions/season/${season}`)
        console.log(response.data.competitions);
        const competitions: Competition[] = response.data.competitions;
        return competitions
    } catch (error: any) {
        console.error("Error fetching data:", error.message)
        console.error(
            "Error details:",
            error.response ? error.response.data : "No response data",
        )
        throw error
    }
}

export const getYears = async () => {
    try {
        const response = await apiClient.get(`/competitions/years`)
        console.log(response.data.competitions);
        const years: number[] = response.data;
        return years
    } catch (error: any) {
        console.error("Error fetching data:", error.message)
        console.error(
            "Error details:",
            error.response ? error.response.data : "No response data",
        )
        throw error
    }
}

//export const getCompetitionsWithQuery = async (teamData: object) => { }

//export const postCompetition = async (teamData: object) => { }

//export const patchCompetition = async (teamData: object) => { }