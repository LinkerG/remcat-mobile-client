import { apiClient } from "./apiClient"
import { Result } from "../types/types"

export const getResultsFromCompetition = async (competition_id: string) => {
    try {
        const response = await apiClient.get(`/competitions/${competition_id}/results`)
        console.log(response.data.results);
        const results: Result[] = response.data.results;
        return results
    } catch (error: any) {
        console.error("Error fetching data:", error.message)
        console.error(
            "Error details:",
            error.response ? error.response.data : "No response data",
        )
        throw error
    }
}

//export const postResult = async (competition_id: string, resultData: object) => { }

//export const updateResultTime = async (competition_id: string, resultData: object) => { }

//export const processFinalResults = async (competition_id: string, category: object) => { }