// /competitions
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { getCompetitions } from '../services/api/competitions';
import { Competition } from '../services/types/competition';
import { CompetitionCard } from '../components/CompetitionCard';
import { Page } from '../components/Pages';

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
        <Page>
            {!loading && competitions?.map((competition) => (
                <CompetitionCard key={competition._id} competition={competition} />
            ))}
        </Page>
    );
};

export default Competitions;