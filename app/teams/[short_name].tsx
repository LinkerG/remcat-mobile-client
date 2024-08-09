import React, { useEffect, useState } from "react";
import { Page } from "../../components/Pages";
import { useLocalSearchParams } from "expo-router";
import { Team } from "../../services/types/team";
import { getTeam } from "../../services/api/teams";
import { TeamCard } from "../../components/TeamCard";

export default function TeamResume() {
    const { short_name } = useLocalSearchParams();
    const [loading, setLoading] = useState<boolean>(true)
    const [team, setTeam] = useState<Team>()

    useEffect(() => {
        const fetchData = async () => {
            const result = await getTeam(short_name as string);
            setTeam(result);
            setLoading(false)
        };
        fetchData();
    }, []);

    return (
        <Page>
            {!loading && team && (
                <TeamCard key={team._id} team={team} />
            )}
        </Page>
    )
}