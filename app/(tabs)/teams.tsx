import React, { useState, useEffect } from "react";
import { Page } from "../../components/Pages";
import { Team } from "../../services/types/team";
import { TeamCard } from "../../components/TeamCard";
import { getTeams } from "../../services/api/teams";

export default function Teams() {
    const [teams, setTeams] = useState<Team[]>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getTeams();
            setTeams(result);
            setLoading(false)
        };
        fetchData();
    }, []);

    return (
        <Page>
            {!loading && teams?.map((team) => (
                <TeamCard key={team._id} team={team} />
            ))}
        </Page>
    );
}