// /competitions
import React, { useEffect, useState } from 'react';
import { getCompetitionsBySeason } from '../../services/api/competitions';
import { Competition } from '../../services/types/competition';
import { CompetitionCard } from '../../components/CompetitionCard';
import { ScrollPage } from '../../components/Pages';
import { useYear } from '../../hooks/useYear';

const Competitions = () => {
    const [competitions, setCompetitions] = useState<Competition[]>();
    const [loading, setLoading] = useState(true);
    const year = useYear()

    useEffect(() => {
        const fetchData = async () => {
            const result = await getCompetitionsBySeason(year.toString());
            setCompetitions(result);
            setLoading(false)
        };
        fetchData();
    }, [year]);

    return (
        <ScrollPage>
            {!loading && competitions?.map((competition) => (
                <CompetitionCard key={competition._id} competition={competition} />
            ))}
        </ScrollPage>
    );
};

export default Competitions;