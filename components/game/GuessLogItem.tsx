import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/color';

interface GuessLogItem {
    roundsNumber: number;
    guess: number;
}

const GuessLogItem: React.FC<GuessLogItem> = ({ roundsNumber, guess }) => {
    return (
        <View style={styles.listItem}>
            <Text style={styles.itemText}>#{roundsNumber}</Text>
            <Text>Opponent's Guess: {guess}</Text>
        </View>
    );
};

export default GuessLogItem;

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.primary800,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.accent500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        export: 4,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3
    },
    itemText: {
        fontFamily: 'open-sans',
    }
});
