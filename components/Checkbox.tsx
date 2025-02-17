// Checkbox.js
import React, { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
// import { tailwind } from 'tailwind-rn'; // Make sure to adjust this based on your setup

interface CheckboxProps {
    label: any;
}

const Checkbox: React.FC<CheckboxProps> = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <TouchableOpacity onPress={toggleCheckbox} className="flex-row items-center w-[90%] flex gap-[10px]">
      <View className={`w-5 h-5 border border-gray-400 rounded ${isChecked ? 'bg-orange' : 'bg-white'}`}>
        {isChecked && <View className="w-full h-full bg-orange" />}
      </View>
      <Text className="ml-2 w-[319px] text-[14px]">{label}</Text>
    </TouchableOpacity>
  );
};

export default Checkbox;