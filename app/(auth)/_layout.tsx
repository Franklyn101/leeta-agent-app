import React from 'react';
import { Slot } from 'expo-router';
import { View, Text, Image } from 'react-native';
import '../../global.css'; 
import { MyProvider } from '../../context/globalContext';


const OnboardingLayout = () => {
  return (
    <MyProvider>
      <View>
        <Slot screenOptions={{ headerShown: true }} />
      </View>
    </MyProvider>
  );
};

export default OnboardingLayout;