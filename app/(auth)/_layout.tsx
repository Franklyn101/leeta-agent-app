import React from 'react';
import { Slot } from 'expo-router';
import { View, Text, Image } from 'react-native';
import '../../global.css'; 

const OnboardingLayout = () => {
  return (
    <View>
      <Slot screenOptions={{ headerShown: true }} />
    </View>
  );
};

export default OnboardingLayout;