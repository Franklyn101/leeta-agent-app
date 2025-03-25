import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Header from '../components/Header';
import { Ionicons } from '@expo/vector-icons';

export default function EmptyDashboard({ }) {
  return (
    <SafeAreaProvider>
      <View className="flex-1 bg-white">
        
        <View className="flex-1 items-center justify-center px-6">
          <View className="bg-blue-100 p-6 rounded-lg mb-4">
            <Ionicons name="document-text-outline" size={60} color="#93c5fd" />
          </View>
          
          <Text className="text-center font-bold mb-1">YOU DON'T HAVE ANY VENDOR LISTED YET.</Text>
          <Text className="text-center text-gray-500 mb-6">your vendor list will appear here.</Text>
          
          <TouchableOpacity 
            className="bg-orange w-full py-4 rounded-lg items-center"
          >
            <Text className="text-white font-bold">VENDOR LIST</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </SafeAreaProvider>
  );
}