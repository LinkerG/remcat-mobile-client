import React from "react";
import { View, Pressable } from "react-native";
import { useDispatch } from 'react-redux';
import { openModal } from '../store/reducers/selectYearModal';
import { AppLogo, ChangeIcon } from "./Icons";
import { Link } from "expo-router";
import GradientBar from "./GradientBar";

export default function Header() {
    const dispatch = useDispatch();

    return (
        <View className="w-100 bg-blue-600 ">

            <View className="flex h-16 flex-row justify-between items-center mb-2 pt-2">
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
            <GradientBar />
        </View >
    )
}