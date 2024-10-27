import { Result, Team } from "../types/types";

export function hasFinals(category: string, division: string, results: Result[]): boolean {
    const fullCategory = category + division;

    const filteredResults = results.filter(result => result.category === fullCategory);

    const hasFinals = filteredResults.some(result => result.isFinal);
    console.log("has finals", hasFinals)

    return hasFinals;
}

export function getTeamName(team_slug: string, teams: Team[]) {
    try {
        const team = teams.filter((team) => team.slug === team_slug)[0]

        if (team) {
            return team.name;
        } else {
            return team_slug;
        }
    } catch (err) {
        return "Nombre desconocido";
    }
}

export function convertToMilliseconds(time: string): number {
    if (time === "DNS" || time === "DNF") {
        // Se devuele un numero demasiado grande para que la función no lo clasifique
        return Number.MAX_SAFE_INTEGER;
    }

    const [minutes, seconds, milliseconds] = time.split(':').map(Number);
    return (minutes * 60 * 1000) + (seconds * 1000) + milliseconds;
}

export function sortResults(results: Result[]): Result[] {
    const validResults = results.filter(result => result.isValid && result.time !== "DNS" && result.time !== "DNF");
    const dnsOrInvalidResults = results.filter(result => !result.isValid || result.time === "DNS" || result.time === "DNF");

    validResults.sort((a, b) => {
        const timeA = convertToMilliseconds(a.time);
        const timeB = convertToMilliseconds(b.time);
        return timeA - timeB;
    });

    return [...validResults, ...dnsOrInvalidResults];
}

export function isToday(date: Date) {
    const today = new Date()

    return (
        today.getDate() === date.getDate() &&
        today.getMonth() === date.getMonth() &&
        today.getFullYear() === date.getFullYear()
    )
}

export function getDaysLeft(date: Date) {
    const today = new Date()

    today.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);

    const differenceInTime = date.getTime() - today.getTime();
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));

    return differenceInDays;
}