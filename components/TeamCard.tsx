import React from 'react';
import { Pressable, Text, Image } from 'react-native';
import { Team } from '../services/types/team';
import { Link } from 'expo-router';

interface TeamProps {
    team: Team;
}


export function TeamCard({ team }: TeamProps) {
    return (
        <Link
            className="shadow-md m-5 p-5 "
            href={`/teams/${team.shortName}`}
            asChild
        >
            <Pressable>
                <Image
                    source={{ uri: `data:image/jpeg;base64,${team.image}` }}
                    style={{ width: 100, height: 100 }}
                />
                <Text>{team.name}</Text>
                <Text>{team.shortName}</Text>
            </Pressable>
        </Link>
    );
}
