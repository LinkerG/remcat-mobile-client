import React, { useEffect, useState } from "react";
import { ScrollPage } from "../../components/Pages";
import { TeamResumeComponent } from "../../components/TeamResume";
import { useLocalSearchParams } from "expo-router";
import { Team, TeamResume } from "../../types/types";
import { getTeam, getTeamResume } from "../../api/teams";
import { Image, Text, View } from "react-native";
import { useYear } from "../../hooks/useYear";
import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon, WebIcon } from "../../components/Icons";

export default function TeamDetail() {
    const year = useYear()
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
        <ScrollPage>
            {(!loading && team && resume) ? (
                <View
                    className="m-5"
                >
                    <View
                        className=" flex-row"
                    >
                        <Image
                            source={{ uri: `data:image/jpeg;base64,${team.image}` }}
                            className='w-2/5 min-h-40 h-40 max-h-40 object-contain rounded-lg'
                        />
                        <View className="ml-3 w-3/5">
                            <Text className="text-xl mb-5 font-semibold">{team.name}</Text>
                            <Text className="">Club de xxxxxx fundado en el año XXXX en la ciudad de XXXXXXXXX donde ha sido blablablabla durante XXXXX años y ha ganado multiples XXXXXX</Text>
                            {/* <Text>{team.description}</Text>*/}
                        </View>
                    </View>
                    <View className="mt-5">
                        <Text className="text-2xl font-semibold">Redes sociales</Text>
                        <View className="flex-row mt-2">
                            <FacebookIcon className="mx-2" color="black" />
                            <InstagramIcon className="mx-2" color="black" />
                            <TwitterIcon className="mx-2" color="black" />
                            <LinkedInIcon className="mx-2" color="black" />
                            <WebIcon className="mx-2" color="black" />
                        </View>
                    </View>
                    <View className="mt-5">
                        <Text className="text-2xl font-semibold">Palmarés {team.name} {year}</Text>
                        <TeamResumeComponent resume={resume} />
                    </View>
                </View>
            ) : (
                null // TODO: Añadir loader de página
            )}
        </ScrollPage>
    )
}