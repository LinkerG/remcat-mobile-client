export type League = {
    boatType: string
    category: string
    teamSummary: TeamSummary[]
}

export type TeamSummary = {
    teamName: string
    points: number
}