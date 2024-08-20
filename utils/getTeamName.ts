import { Team } from "../types/types";

export default function getTeamName(shortName: string, teams: Team[]) {
    const team = teams.filter((team) => team.shortName === shortName)[0]

    if (team) {
        return team.name;
    } else {
        return "Nombre desconocido";
    }
}