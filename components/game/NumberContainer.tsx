import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/color';

const NumberContainer: React.FC = ({ children }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
};

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: deviceWidth < 380 ? 12 : 23,
        margin: deviceWidth < 380 ? 12 : 23,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: Colors.accent500,
        fontSize: deviceWidth < 380 ? 12 : 36,
        fontFamily: 'open-sans-bold',
    }
})
