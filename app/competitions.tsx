// /competitions
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { getCompetitions } from '../services/api/competitions';
import { Competition } from '../services/types/competition';
import { CompetitionCard } from '../components/CompetitionCard';

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
        <View className='w-100 h-100 flex flex-col bg-blue-100'>
            {!loading && competitions?.map((competition) => (
                <CompetitionCard key={competition._id} competition={competition} />
            ))}
        </View>
    );
};

export default Competitions;