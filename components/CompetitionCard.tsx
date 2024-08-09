import React from 'react';
import { Pressable, Text } from 'react-native';
import { Competition } from '../services/types/competition';
import { Link } from 'expo-router';

interface CompetitionProps {
    competition: Competition;
}


export function CompetitionCard({ competition }: CompetitionProps) {
    return (
        <Link
            className="shadow-md m-5 p-5 "
            href={`/competitions/${competition._id}`}
            asChild
        >
            <Pressable>
                <Text>{competition.name}</Text>
                <Text>{competition.location}</Text>
                <Text>{competition.boatType}</Text>
                <Text>{competition.date.toString()}</Text>
            </Pressable>
        </Link>
    );
}
