import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { ScrollPage } from "../../components/Pages";
import { Competition } from "../../types/types";
import { getNextCompetitions } from "../../api/competitions";
import { CompetitionCard } from "../../components/CompetitionCard";
import { isToday, getDaysLeft } from "../../utils/functions";

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [competitions, setCompetitions] = useState<Competition[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getNextCompetitions();
            setCompetitions(data);
            setLoading(false);
        };
        fetchData();
    }, []);

    if (loading) return <LoadingScreen />;

    return (
        <ScrollPage>
            <View className="m-5">
                {competitions.length === 0 ? (
                    <NoCompetitionsMessage />
                ) : (
                    <CompetitionsList competitions={competitions} />
                )}
            </View>
        </ScrollPage>
    );
}

const LoadingScreen = () => (
    <ScrollPage>
        <Text>Loading...</Text>
    </ScrollPage>
);

const NoCompetitionsMessage = () => (
    <Text className="text-2xl font-semibold mb-2">
        ¡Más competiciones próximamente!
    </Text>
);

interface CompetitionsListProps {
    competitions: Competition[];
}

const CompetitionsList: React.FC<CompetitionsListProps> = ({ competitions }) => {
    const nextCompetition = competitions[0];
    const isCompetitionToday = isToday(nextCompetition.date);

    return (
        <>
            <Text className="text-2xl font-semibold mb-2">
                {isCompetitionToday
                    ? "¡La competición de hoy!"
                    : `Próxima competición, faltan ${getDaysLeft(nextCompetition.date)} días`}
            </Text>
            <CompetitionCard competition={nextCompetition} />
            {competitions.length > 1 ? (
                <UpcomingCompetitions competitions={competitions.slice(1)} />
            ) : (
                <Text className="my-3 text-xl font-medium">
                    Más competiciones próximamente!
                </Text>
            )}
        </>
    );
};

interface UpcomingCompetitionsProps {
    competitions: Competition[];
}

const UpcomingCompetitions: React.FC<UpcomingCompetitionsProps> = ({ competitions }) => (
    <>
        <Text className="my-3 text-xl font-medium">Siguientes competiciones:</Text>
        {competitions.map((competition) => (
            <CompetitionCard key={competition._id} competition={competition} />
        ))}
    </>
);
