import { apiClient } from "./apiClient"
import { Team, TeamResume } from "../types/types"

export const getTeams = async () => {
    try {
        const response = await apiClient.get("/teams")
        console.log(response.data);
        const teams: Team[] = response.data;
        return teams
    } catch (error: any) {
        console.error("Error fetching data:", error.message)
        console.error(
            "Error details:",
            error.response ? error.response.data : "No response data",
        )
        throw error
    }
}

export const getTeam = async (teamName: string) => {
    try {
        const response = await apiClient.get(`/teams/slug/${teamName}`)
        console.log(response.data);
        const team: Team = response.data;
        return team
    } catch (error: any) {
        console.error("Error fetching data:", error.message)
        console.error(
            "Error details:",
            error.response ? error.response.data : "No response data",
        )
        throw error
    }
}

export const getTeamResume = async (teamName: string) => {
    try {
        const response = await apiClient.get(`/teams/resume/${teamName}`)
        console.log(response.data);
        const resume: TeamResume[] = response.data;
        return resume
    } catch (error: any) {
        console.error("Error fetching data:", error.message)
        console.error(
            "Error details:",
            error.response ? error.response.data : "No response data",
        )
        throw error
    }
}

//export const postTeam = async (teamData: object) => { }