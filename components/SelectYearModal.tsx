import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { closeModal } from '../store/reducers/selectYearModal';
import { Text, StyleSheet, Modal, Animated, Easing, TouchableWithoutFeedback, Pressable } from 'react-native';
import { useSetYear, useYear } from '../hooks/useYear';
import { getYears } from '../api/competitions';

export default function SelectYearModal() {
    const actualYear = useYear();
    const setYear = useSetYear();
    const handleSetYear = (year: number) => {
        setYear(year)
        dispatch(closeModal())
    }

    const [years, setYears] = useState<number[]>([])
    useEffect(() => {
        const fetchData = async () => {
            const result = await getYears();
            setYears(result)
        };
        fetchData();
    }, [])

    console.log(years)
    console.log(actualYear)

    const dispatch: AppDispatch = useDispatch();
    const isOpen = useSelector((state: RootState) => state.modal.isOpen);

    const fadeAnim = useRef(new Animated.Value(0)).current;
    const slideAnim = useRef(new Animated.Value(-300)).current;

    useEffect(() => {
        if (isOpen) {
            Animated.parallel([
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                    easing: Easing.inOut(Easing.ease),
                }),
                Animated.timing(slideAnim, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                    easing: Easing.inOut(Easing.ease),
                }),
            ]).start();
        } else {
            Animated.parallel([
                Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                    easing: Easing.inOut(Easing.ease),
                }),
                Animated.timing(slideAnim, {
                    toValue: -300,
                    duration: 300,
                    useNativeDriver: true,
                    easing: Easing.inOut(Easing.ease),
                }),
            ]).start();
        }
    }, [isOpen, fadeAnim, slideAnim]);

    return (
        <Modal
            visible={isOpen}
            transparent
            animationType="none"
            onRequestClose={() => dispatch(closeModal())}
        >
            <TouchableWithoutFeedback onPress={() => dispatch(closeModal())}>
                <Animated.View style={[styles.overlay, { opacity: fadeAnim }]}>
                    <TouchableWithoutFeedback>
                        <Animated.View style={[styles.modal, { transform: [{ translateY: slideAnim }] }]}>
                            {years.map((year) => (
                                <Pressable
                                    key={year}
                                    onPress={() => {
                                        if (year !== actualYear) {
                                            handleSetYear(year);
                                        }
                                    }}
                                    style={({ pressed }) => [
                                        styles.button,
                                        { opacity: year === actualYear ? 0.5 : 1 }, // Cambia la opacidad si es el año actual
                                        pressed && styles.pressed,
                                    ]}
                                    disabled={year === actualYear} // Desactiva el botón si es el año actual
                                >
                                    <Text style={styles.text}>{year}</Text>
                                </Pressable>
                            ))}
                        </Animated.View>
                    </TouchableWithoutFeedback>
                </Animated.View>
            </TouchableWithoutFeedback>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modal: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    button: {
        padding: 10,
        margin: 5,
        backgroundColor: 'blue',
        borderRadius: 5,
    },
    text: {
        color: 'white',
        textAlign: 'center',
    },
    pressed: {
        backgroundColor: 'darkblue',
    },
});
