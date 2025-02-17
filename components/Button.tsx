import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface ButtonProps {
  title: string;
  onClick: () => void;
  classStyle: string;
  active: boolean;
}

const Button: React.FC<ButtonProps> = ({ title, onClick, active, classStyle }) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      className={`${classStyle} ${active ? "!bg-orange !text-white" : ""} flex items-center justify-center mx-auto mt-10 rounded-md w-[90%] h-[44px]`}
    >
      <Text className={`${classStyle} ${active ? "!bg-orange !text-white" : ""}`}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;