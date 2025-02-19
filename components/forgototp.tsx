import React, { useRef, useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const ForInput: React.FC = () => {
    const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
    const inputs = useRef<(TextInput | null)[]>([]);

    const handleInputChange = (index: number, value: string) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < inputs.current.length - 1) {
            inputs.current[index + 1]?.focus();
        }
    };

    const handleKeyPress = (index: number) => {
        if (index > 0 && otp[index].length === 0) {
            inputs.current[index - 1]?.focus();
        }
    };

    return (
        <View style={styles.container}>
            {Array(6).fill(0).map((_, index) => (
                <TextInput
                    key={index}
                    ref={(ref) => (inputs.current[index] = ref)}
                    style={styles.input}
                    maxLength={1}
                    keyboardType="numeric"
                    value={otp[index]}
                    onChangeText={(value) => handleInputChange(index, value)}
                    onKeyPress={() => handleKeyPress(index)}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    input: {
        width: 48,
        height: 54,
        borderRadius: 2,
        backgroundColor: '#D0D5DD',
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 600,
        marginHorizontal: 5,
    },
});

export default ForInput;