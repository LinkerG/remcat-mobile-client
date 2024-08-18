import React, { useEffect, useState } from "react";
import { Page } from "../../components/Pages";
import { TeamResumeComponent } from "../../components/TeamResume";
import { useLocalSearchParams } from "expo-router";
import { Team, TeamResume } from "../../types/types";
import { getTeam, getTeamResume } from "../../api/teams";
import { Image, Text, View } from "react-native";

export default function TeamDetail() {
    const { short_name } = useLocalSearchParams();
    const [loading, setLoading] = useState<boolean>(true)
    const [team, setTeam] = useState<Team>()
    const [resume, setResume] = useState<TeamResume[]>()

    useEffect(() => {
        const fetchData = async () => {
            setTeam(await getTeam(short_name as string));
            setResume(await getTeamResume(short_name as string));
            setLoading(false)
        };
        fetchData();
    }, [short_name]);

    return (
        <Page>
            {!loading && team && resume && (
                <View
                    className="m-10"
                >
                    <View
                        className=" flex-row"
                    >
                        <Image
                            source={{ uri: `data:image/jpeg;base64,${team.image}` }}
                            style={{ width: 100, height: 100 }}
                        />
                        <Text className="ml-5">{team.name}</Text>
                    </View>
                    <Text>Resumen</Text>
                    <TeamResumeComponent resume={resume} />
                </View>
            )}
        </Page>
    )
}