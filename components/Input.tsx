import React, { useEffect, useContext, useState } from 'react';
import { TextInput, View, Text, Alert } from 'react-native';
import { Loader } from './phone';
import { MyContext } from '../context/globalContext';

interface InputProps {
  error?: string; // Optional error message
  placeholderText: string;
  classStyle: string;
  onChangeText: (text: string) => void;
  value: string;
  phoneNumber: boolean;
  secureTextEntry: boolean;
}

const Input: React.FC<InputProps> = ({ error, placeholderText, onChangeText, secureTextEntry, phoneNumber, classStyle, value }) => {
  const [stated, setStated] = useState(false);

  const { setState, setUserNum } = useContext(MyContext)!;
  useEffect(() => {
    if (phoneNumber && value.length === 11) {
      setStated(true);
      setState(true);
    }
  }, [value, phoneNumber]);

  return (
    <View className="mb-4">
      <TextInput
        onChangeText={onChangeText}
        className={`${classStyle} ${error ? 'border-red-500' : 'border-gray-100 placeholder:text-xl border-2'}`}
        value={value}
        placeholder={placeholderText}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#999"
        keyboardType={phoneNumber ? 'phone-pad' : 'default'}
      />
      {error && <Text className="text-red-500 text-sm mt-1">{error}</Text>}
    </View>
  );
};

export default Input;
