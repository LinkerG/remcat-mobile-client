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
        outputRange: ['#e6e6e6', '#F5F5F5'],
    });

    return (
        <Link href={`/teams/${team.slug}`} asChild key={team.slug}>
            <Pressable onPressIn={() => fadeIn(animated)} onPressOut={() => fadeOut(animated)}>
                <Animated.View
                    className="my-3 p-5 rounded-lg flex-row justify-between"
                    style={{
                        backgroundColor,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.3,
                        shadowRadius: 6,
                        elevation: 8, // Para Android
                    }}
                >
                    <View className='ml-2 w-3/5 justify-center'>
                        <Text className='text-2xl font-semibold'>
                            {team.name}
                        </Text>
                    </View>
                    <Image
                        source={{ uri: `data:image/jpeg;base64,${team.logo}` }}
                        className='w-24 h-24 object-contain rounded-lg'
                    />
                </Animated.View>
            </Pressable>
        </Link>
    );
}
