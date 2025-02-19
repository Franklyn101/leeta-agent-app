import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const OTPInput: React.FC = () => {
    const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
    const inputRefs = useRef<(TextInput | null)[]>([]);

    const handleChange = (text: string, index: number) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        // Move focus to the next input if the current input is filled
        if (text && index < otp.length - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleBackspace = (index: number) => {
        if (index > 0 && !otp[index]) {
            // Move focus to the previous input if the current input is empty
            inputRefs.current[index - 1]?.focus();
        }
    };

    return (
        <View style={styles.container}>
            {otp.map((digit, index) => (
                <TextInput
                    key={index}
                    value={digit}
                    onChangeText={(text) => handleChange(text, index)}
                    onKeyPress={({ nativeEvent }) => {
                        if (nativeEvent.key === 'Backspace') {
                            handleBackspace(index);
                        }
                    }}
                    ref={(input) => (inputRefs.current[index] = input)}
                    style={[styles.input, index === 3 ? styles.inputWithMargin : null]} // Add margin after the 3rd input
                    maxLength={1}
                    keyboardType="numeric"
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
    },
    input: {
        width: 30,
        height: 44,
        borderBottomWidth: 2,
        borderBottomColor: '#ccc',
        fontSize: 24,
        textAlign: 'center',
        marginHorizontal: 5,
    },
    inputWithMargin: {
        marginLeft: 30, // Add margin to create a gap
    },
});

export default OTPInput;