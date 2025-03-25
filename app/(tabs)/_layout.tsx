import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import Header from '@/components/Header';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <><Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FD671E",
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }} />
      <Tabs.Screen
        name="vendor-list"
        options={{
          title: 'Vendor List',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="briefcase" color={color} />,
        }} />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <Icon name="cog" size={28} color={color} />,
        }} />
    </Tabs></>
  );
}