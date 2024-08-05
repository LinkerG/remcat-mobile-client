import React from 'react';
import { View, Text } from 'react-native';
import { Competition } from '../services/types/competition';

interface CompetitionProps {
    competition: Competition;
}

export function CompetitionCard({ competition }: CompetitionProps) {
    return (
        <View
            className="border border-black m-5"
        >
            <Text>{competition.name}</Text>
            <Text>{competition.location}</Text>
            <Text>{competition.boat_type}</Text>
        </View>
    );
}
