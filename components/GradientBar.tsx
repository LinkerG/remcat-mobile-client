import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function GradientBar() {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#db5500', '#FFA500', '#FFFF00', '#FFA500', '#db5500']}
                locations={[0, 0.5, 0.65, 0.8, 1]}
                start={{ x: 0, y: 0 }} // Inicia desde la izquierda
                end={{ x: 1, y: 0 }}   // Termina en la derecha
                style={styles.gradient}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 12,
        overflow: 'hidden',
    },
    gradient: {
        flex: 1,
    },
});
