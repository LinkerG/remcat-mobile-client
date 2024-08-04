// src/screens/HomeScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getTeams } from './services/api/teams';
import { Team } from './services/types/team';

const HomeScreen = () => {
    const [teams, setTeams] = useState<Team[]>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getTeams();
                setTeams(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {teams?.map((team) => (
                <View key={team.shortName}>
                    <Text>{team.name}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        marginVertical: 10,
        fontSize: 16,
    },
});

export default HomeScreen;