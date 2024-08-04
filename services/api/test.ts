import { apiClient } from "./apiClient"

export const getTest = async () => {
    try {
        const response = await apiClient.get("/test")
        console.log(response.data)
        return response.data
    } catch (error: any) {
        console.error("Error fetching data:", error.message)
        console.error(
            "Error details:",
            error.response ? error.response.data : "No response data",
        )
        throw error
    }
}
