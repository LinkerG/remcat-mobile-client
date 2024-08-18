export type Competition = {
    _id: string
    slug: string
    name: string
    date: Date
    location: string
    image: string
    boatType: string
    lines: number
    line_distance: number
    isCancelled: boolean
    isLeague: boolean
    isChampionship: boolean
    isActive: boolean
}

export type Team = {
    _id: string
    name: string
    shortName: string
    image: string
    isActive: boolean
}

export type Result = {
    _id: string;
    competition_id: string;
    teamShortName: string;
    category: string;
    time: string;
    isFinal: boolean;
    isValid: boolean;
}

export type League = {
    boatType: string
    category: string
    leagueSummary: LeagueSummary[]
}

export type LeagueSummary = {
    teamName: string
    points: number
}

export type TeamResume = {
    year: number
    results: TeamSummary[]
}

export type TeamSummary = {
    competition_name: string
    category: string
    position: number
}