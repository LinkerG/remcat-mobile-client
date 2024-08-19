// /competitions
import React, { useEffect, useState } from 'react';
import { getCompetitionsBySeason } from '../../api/competitions';
import { Competition } from '../../types/types';
import { CompetitionCard } from '../../components/CompetitionCard';
import { ScrollPage } from '../../components/Pages';
import { useYear } from '../../hooks/useYear';
import { Text, View } from 'react-native';

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
            <View className="m-5">
                <Text className="text-2xl font-semibold mb-2">Competiciones temporada {year}</Text>
                {!loading && competitions?.map((competition) => (
                    <CompetitionCard key={competition._id} competition={competition} />
                ))}
            </View>
        </ScrollPage>
    );
};

export default Competitions;