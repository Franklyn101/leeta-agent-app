import React, { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { View, Text } from 'react-native';
import { Slot } from 'expo-router';
import 'react-native-reanimated';
import '../global.css';

SplashScreen.preventAutoHideAsync(); // Prevent splash screen from hiding automatically

export default function RootLayout() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try { 
        // Load resources or data here
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        await SplashScreen.hideAsync(); // Hide the splash screen
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-3xl font-bold text-blue-700">Loading...</Text>
      </View>
    );
  }

  return <Slot />;
}
