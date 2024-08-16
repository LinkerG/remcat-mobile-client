export type League = {
    boatType: string
    category: string
    teamSummary: TeamSummary[]
}

export type TeamSummary = {
    teamName: string
    points: number
}

export type TeamResume = {
    year: number
    results: Position[]
}

export type Position = {
    competition_name: string
    category: string
    position: number
}