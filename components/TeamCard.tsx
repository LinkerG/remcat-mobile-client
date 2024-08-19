import React from 'react';
import { Pressable, Text, Image, Animated, View } from 'react-native';
import { fadeIn, fadeOut } from './Animations';
import { Team } from '../types/types';
import { Link } from 'expo-router';

interface TeamProps {
    team: Team;
}


export function TeamCard({ team }: TeamProps) {
    const animated = new Animated.Value(1);

    const backgroundColor = animated.interpolate({
        inputRange: [0.4, 1],
        outputRange: ['#92ACCE', '#D0E0F5'],
    });

    return (
        <Link href={`/teams/${team.shortName}`} asChild key={team._id}>
            <Pressable onPressIn={() => fadeIn(animated)} onPressOut={() => fadeOut(animated)}>
                <Animated.View
                    className="my-3 p-5 rounded-lg flex-row justify-between"
                    style={{ backgroundColor }}
                >
                    <View className='ml-2 w-3/5 justify-center'>
                        <Text className='text-2xl font-semibold'>
                            {team.name}
                        </Text>
                    </View>
                    <Image
                        source={{ uri: `data:image/jpeg;base64,${team.image}` }}
                        className='w-24 h-24 object-contain rounded-lg'
                    />
                </Animated.View>
            </Pressable>
        </Link>
    );
}
