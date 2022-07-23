import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';
import Colors from '../../constants/color';

interface InstructionText {
    style?: StyleProp<TextStyle> | undefined;
}

const InstructionText: React.FC<InstructionText> = ({ children, style }) => {
    return (
        <Text style={[styles.instructionText, style]}>{children}</Text>
    );
};

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        fontFamily: 'open-sans',
        color: Colors.accent500,
        fontSize: 24
    }
});
