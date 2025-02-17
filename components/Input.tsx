import React, { useEffect, useState } from 'react';
import { TextInput, View, Text, Alert } from 'react-native';
import { Loader } from './phone';

interface InputProps {
  error?: string; // Optional error message
  classStyle: string;
  onChangeText: (text: string) => void;
  value: string;
  phoneNumber: boolean;
  secureTextEntry: boolean;
}

const Input: React.FC<InputProps> = ({ error, onChangeText, secureTextEntry, phoneNumber, classStyle, value }) => {
  const [state, setState] = useState(false);

  useEffect(() => {
    if (phoneNumber && value.length === 14) {
      setState(true);
      alert('aaaaaaa3')
    }
  }, [value, phoneNumber]);

  return (
    <View className="mb-4">
      <TextInput
        onChangeText={onChangeText}
        className={`${classStyle} ${error ? 'border-red-500' : 'border-gray-100 border-2'}`}
        value={value}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#999"
        keyboardType={phoneNumber ? 'phone-pad' : 'default'}
      />
      {error && <Text className="text-red-500 text-sm mt-1">{error}</Text>}
    </View>
  );
};

export default Input;
