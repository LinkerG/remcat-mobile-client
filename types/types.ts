export type Competition = {
    _id: string
    slug: string
    name: string
    date: Date
    location: string
    image: string
    boat_type: string
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
    slug: string
    logo: string
    isActive: boolean
}

export type Result = {
    _id: string;
    competition_id: string;
    team_slug: string;
    category: string;
    time: string;
    group: number;
    team_number: number;
    isFinal: boolean;
    isValid: boolean;
}

export type League = {
    boat_type: string
    category: string
    league_summary: LeagueSummary[]
}

export type LeagueSummary = {
    team_slug: string
    team_number: number
    points: number
}

export type TeamResume = {
    year: number
    results: TeamSummary[]
}

export type TeamSummary = {
    competition: string
    category: string
    position: number
}