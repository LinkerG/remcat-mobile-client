import React, { useEffect, useState } from "react";
import { Page } from "../../components/Pages";
import { useLocalSearchParams } from "expo-router";
import { Team } from "../../types/types";
import { getTeam } from "../../api/teams";
import { TeamCard } from "../../components/TeamCard";

export default function TeamResume() {
    const { short_name } = useLocalSearchParams();
    const [loading, setLoading] = useState<boolean>(true)
    const [team, setTeam] = useState<Team>()

    useEffect(() => {
        const fetchData = async () => {
            setTeam(await getTeam(short_name as string));
            setLoading(false)
        };
        fetchData();
    }, [short_name]);

    return (
        <Page>
            {!loading && team && (
                <TeamCard key={team._id} team={team} />
            )}
        </Page>
    )
}