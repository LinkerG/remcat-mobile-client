import { Result, Team } from "../types/types";

export function hasFinals(category: string, division: string, results: Result[]): boolean {
    const fullCategory = category + division;

    const filteredResults = results.filter(result => result.category === fullCategory);

    const hasFinals = filteredResults.some(result => result.isFinal);
    console.log(hasFinals)

    return hasFinals;
}

export function getTeamName(shortName: string, teams: Team[]) {
    const team = teams.filter((team) => team.shortName === shortName)[0]

    if (team) {
        return team.name;
    } else {
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