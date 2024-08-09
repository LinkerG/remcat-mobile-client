// /competitions
import React, { useEffect, useState } from 'react';
import { getCompetitions } from '../../services/api/competitions';
import { Competition } from '../../services/types/competition';
import { CompetitionCard } from '../../components/CompetitionCard';
import { ScrollPage } from '../../components/Pages';

const Competitions = () => {
    const [competitions, setCompetitions] = useState<Competition[]>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getCompetitions();
            setCompetitions(result);
            setLoading(false)
        };
        fetchData();
    }, []);

    return (
        <ScrollPage>
            {!loading && competitions?.map((competition) => (
                <CompetitionCard key={competition._id} competition={competition} />
            ))}
        </ScrollPage>
    );
};

export default Competitions;