import React from "react";
import { View, Text, Pressable } from "react-native";
import { useDispatch } from 'react-redux';
import { openModal } from '../store/reducers/selectYearModal';

export default function Header() {
    const dispatch = useDispatch();

    return (
        <View className="w-100 bg-blue-400 ">

            <View className="flex h-16 flex-row justify-between items-center">
                <Text className="ml-5">
                    RemCat
                </Text>
                <Pressable
                    className="mr-5"
                    onPress={() => dispatch(openModal())}
                >
                    <Text>
                        Cambiar año
                    </Text>
                </Pressable>
            </View>
            <View className="w-100 h-3 bg-orange-500" />
        </View >
    )
}