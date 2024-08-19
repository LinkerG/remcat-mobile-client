import React from 'react';
import { Pressable, Text, Animated } from 'react-native';
import { Competition } from '../types/types';
import { BoatTypes } from '../types/consts';
import { Link } from 'expo-router';

interface CompetitionProps {
    competition: Competition;
}

export function CompetitionCard({ competition }: CompetitionProps) {
    const animated = new Animated.Value(1);

    const fadeIn = () => {
        Animated.timing(animated, {
            toValue: 0.4,
            duration: 100,
            useNativeDriver: false,
        }).start();
    };

    const fadeOut = () => {
        Animated.timing(animated, {
            toValue: 1,
            duration: 200,
            useNativeDriver: false,
        }).start();
    };

    const backgroundColor = animated.interpolate({
        inputRange: [0.4, 1],
        outputRange: ['#92ACCE', '#D0E0F5'],
    });

    const textColor = animated.interpolate({
        inputRange: [0.4, 1],
        outputRange: ['#4F81BA', '#93c5fd'],
    });

    const date = `${competition.date.getDate()}/${competition.date.getMonth() + 1}/${competition.date.getFullYear()}`;
    const boatType = BoatTypes.find(boatType => boatType.key === competition.boatType)?.name;

    return (
        <Link href={`/competitions/${competition.slug}`} asChild>
            <Pressable onPressIn={fadeIn} onPressOut={fadeOut}>
                <Animated.View
                    className="my-3 p-5 rounded-lg"
                    style={{ backgroundColor }}
                >
                    <Animated.Text
                        className='text-center bg-blue-300 p-1 w-20 mb-1 rounded-md'
                        style={{ backgroundColor: textColor }}
                    >
                        {date}
                    </Animated.Text>
                    <Text className='text-xl font-semibold'>
                        {competition.name}
                    </Text>
                    <Text className='text-lg text-gray-600'>
                        Embarcación: {boatType}
                    </Text>
                    <Text className='text-lg text-gray-600'>
                        Ubicación: {competition.location}
                    </Text>
                </Animated.View>
            </Pressable>
        </Link>
    );
}
