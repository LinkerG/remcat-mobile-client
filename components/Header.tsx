import React from "react";
import { View, Pressable } from "react-native";
import { useDispatch } from 'react-redux';
import { openModal } from '../store/reducers/selectYearModal';
import { AppLogo, ChangeIcon } from "./Icons";
import { Link } from "expo-router";

export default function Header() {
    const dispatch = useDispatch();

    return (
        <View className="w-100 bg-blue-400 ">

            <View className="flex h-16 flex-row justify-between items-center">
                <Link href="/" asChild>
                    <Pressable>
                        <AppLogo />
                    </Pressable>
                </Link>
                <Pressable
                    onPress={() => dispatch(openModal())}
                >
                    <ChangeIcon />
                </Pressable>
            </View>
            <View className="w-100 h-3 bg-orange-500" />
        </View >
    )
}