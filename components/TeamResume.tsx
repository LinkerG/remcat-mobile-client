import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { BoatTypes } from '../types/consts';
import ResultBadge from './ResultBadge';
import { useYear } from '../hooks/useYear';

interface TeamSummary {
    competition_name: string;
    category: string;
    position: number;
}

interface Props {
    resume: { year: number; results: TeamSummary[] }[];
}

function groupByCompetitionName(results: TeamSummary[]) {
    return results.reduce((acc, result) => {
        if (!acc[result.competition_name]) {
            acc[result.competition_name] = [];
        }
        acc[result.competition_name].push(result);
        return acc;
    }, {} as Record<string, TeamSummary[]>);
}

function sortResults(resumes: { year: number; results: TeamSummary[] }[]) {
    return resumes.map(yearData => {
        return {
            year: yearData.year,
            results: groupByCompetitionName(yearData.results)
        };
    });
}

function getBoatTypeName(competitionName: string): string {
    const boatType = BoatTypes.find(type => competitionName.includes(type.key));
    return boatType ? `Lliga Catalana de ${boatType.name}` : competitionName;
}

export function TeamResumeComponent({ resume }: Props) {
    const year = useYear();
    const sortedResults = sortResults(resume);
    const yearData = sortedResults.find(data => data.year === year);

    if (!yearData) {
        return (
            <View className="flex-1 justify-center items-center">
                <Text className="text-lg">No hay datos disponibles para el año {year}.</Text>
            </View>
        );
    }

    return (
        <ScrollView>
            {Object.entries(yearData.results).map(([competitionName, results]) => {
                const displayName = getBoatTypeName(competitionName);
                return (
                    <View key={competitionName} className="mt-5">
                        <Text className="text-xl font-semibold">{displayName}</Text>
                        <View className="flex-row flex-wrap mt-2">
                            {results.map((result, index) => (
                                <View
                                    key={index}
                                    className="w-1/4 justify-center items-center"
                                >
                                    <ResultBadge
                                        category={result.category}
                                        position={result.position}
                                    />
                                </View>
                            ))}
                        </View>
                    </View>
                );
            })}
        </ScrollView>
    );
}
