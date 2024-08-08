import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { Competition } from '../services/types/competition';
import { Link } from 'expo-router';

interface CompetitionProps {
    competition: Competition;
}


export function CompetitionCard({ competition }: CompetitionProps) {
    const link = `/competitions/${competition._id}`

    return (
        <Link
            className="shadow-md m-5 p-5 h-20 "
            href={link}
            asChild
        >
            <Pressable>
                <Text>{competition.name}</Text>
                <Text>{competition.location}</Text>
                <Text>{competition.boatType}</Text>
            </Pressable>
        </Link>
    );
}
