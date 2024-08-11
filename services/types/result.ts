export type Result = {
    _id: string
    competition_id: string
    teamShortName: string
    category: string
    time: string
    isFinal: boolean
    isValid: boolean
}

function convertToMilliseconds(time: string): number {
    const [minutes, seconds, milliseconds] = time.split(':').map(Number);
    return (minutes * 60 * 1000) + (seconds * 1000) + milliseconds;
}

export function sortResults(results: Result[]): Result[] {
    // Filtrar los resultados válidos y no válidos
    const validResults = results.filter(result => result.isValid);
    const invalidResults = results.filter(result => !result.isValid);

    // Ordenar los resultados válidos por tiempo
    validResults.sort((a, b) => {
        const timeA = convertToMilliseconds(a.time);
        const timeB = convertToMilliseconds(b.time);
        return timeA - timeB;
    });

    // Combinar los resultados válidos ordenados con los no válidos al final
    return [...validResults, ...invalidResults];
}