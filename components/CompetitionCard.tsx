import React from 'react';
import { Pressable, Text, Animated, View } from 'react-native';
import { fadeIn, fadeOut } from './Animations';
import { Competition } from '../types/types';
import { BoatTypes } from '../types/consts';
import { Link } from 'expo-router';

interface CompetitionProps {
    competition: Competition;
}

export function CompetitionCard({ competition }: CompetitionProps) {
    const animated = new Animated.Value(1);

    const backgroundColor = animated.interpolate({
        inputRange: [0.4, 1],
        outputRange: ['#e6e6e6', '#F5F5F5'],
    });

    const textColor = animated.interpolate({
        inputRange: [0.4, 1],
        outputRange: ['#85B4E6', '#94C8FF'],
    });

    const cancelledColor = animated.interpolate({
        inputRange: [0.4, 1],
        outputRange: ['#E64635', '#FF4E3B'],
    });

    const date = `${competition.date.getDate()}/${competition.date.getMonth() + 1}/${competition.date.getFullYear()}`;
    const boatType = BoatTypes.find(boatType => boatType.key === competition.boat_type)?.name;

    const today = new Date();
    const competitionHasFinished = competition.date <= today && !competition.isCancelled;

    return (
        <Link href={`/competitions/${competition.slug}`} asChild>
            <Pressable onPressIn={() => fadeIn(animated)} onPressOut={() => fadeOut(animated)}>
                <Animated.View
                    className="my-3 p-5 rounded-lg"
                    style={{
                        backgroundColor,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.3,
                        shadowRadius: 6,
                        elevation: 8, // Para Android
                    }}
                >
                    <View className='flex-row flex-wrap'>
                        <Animated.Text
                            className='text-center w-24 mb-1 rounded-2xl p-1 px-2 text-blue-900 font-bold mr-2'
                            style={{ backgroundColor: textColor }}
                        >
                            {date}
                        </Animated.Text>
                        {competition.isCancelled && (
                            <Animated.Text
                                className='text-center w-28 mb-1 rounded-2xl p-1 px-2 text-white font-bold'
                                style={{ backgroundColor: cancelledColor }}
                            >
                                CANCELADA
                            </Animated.Text>
                        )}
                    </View>
                    <Text className='text-xl font-semibold mb-1'>
                        {competition.name}
                    </Text>
                    <Text className='text-md text-gray-400'>
                        Embarcación: {boatType}
                    </Text>
                    <Text className='text-md text-gray-400'>
                        Ubicación: {competition.location}
                    </Text>
                    <View className='flex-row-reverse'>
                        <Text className='underline text-blue-600 font-semibold'>
                            {competitionHasFinished ? "Ver resultados" : "Ver detalles"}
                        </Text>
                    </View>
                </Animated.View>
            </Pressable>
        </Link>
    );
}
