import { apiClient } from "./apiClient"
import { Competition } from "../types/types"

export const getCompetitions = async () => {
    try {
        const response = await apiClient.get("/competitions")
        const competitions: Competition[] = response.data.competitions.map((competition: Competition) => ({
            ...competition,
            date: new Date(competition.date),
        }));
        console.log(competitions);

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
        const response = await apiClient.get(`/competitions/${_id}`)
        const competition: Competition = response.data.competition;
        competition.date = new Date(competition.date)
        console.log(competition);
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

export const getCompetitionBySlug = async (slug: string) => {
    try {
        const response = await apiClient.get(`/competitions/slug/${slug}`)
        const competition: Competition = response.data.competition;
        competition.date = new Date(competition.date)
        console.log(competition);
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

export const getCompetitionsBySeason = async (year: string) => {
    try {
        const response = await apiClient.get(`/competitions/years/${year}`)
        const competitions: Competition[] = response.data.map((competition: Competition) => ({
            ...competition,
            date: new Date(competition.date),
        }));
        console.log(competitions);

        return competitions
    } catch (error: any) {
        console.error("Error fetching data:", error.message)
        console.error(
            "Error details:",
            error.response ? error.response.data : "No response data",
        )

        return []
    }
}

export const getNextCompetitions = async () => {
    try {
        const response = await apiClient.get(`/competitions/upcoming`)

        const competitions: Competition[] = response.data.map((competition: Competition) => ({
            ...competition,
            date: new Date(competition.date),
        }));

        console.log(competitions)

        return competitions
    } catch (error: any) {
        console.error("Error fetching data:", error.message)
        console.error(
            "Error details:",
            error.response ? error.response.data : "No response data",
        )

        return []
    }
}

export const getYears = async () => {
    try {
        const response = await apiClient.get(`/competitions/years`)
        console.log(response.data);
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