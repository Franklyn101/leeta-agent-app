import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  ScrollView, 
  Platform,
  KeyboardAvoidingView
} from 'react-native';
import Header from '@/components/Header';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';

export default function AddVendorScreen({ navigation }) {
  const [vendorName, setVendorName] = useState('');
  const [vendorDescription, setVendorDescription] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // Request permissions
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }
    
    // Launch image picker
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [16, 10],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaProvider>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <View className="flex-1 bg-white">
          <Header title="Add new vendor" />
          
          <ScrollView className="flex-1 px-4 py-4">
            <Text className="text-lg font-semibold text-gray-800">Business Information</Text>
            
            <Text className="text-sm text-gray-500 mt-2">Upload Vendor Image</Text>
            <TouchableOpacity 
              className="mt-1 border border-gray-300 rounded-md bg-gray-100 h-32 items-center justify-center"
              onPress={pickImage}
            >
              {image ? (
                <Image 
                  source={{ uri: image }} 
                  className="w-full h-full rounded-md" 
                  resizeMode="cover"
                />
              ) : (
                <View className="items-center">
                  <Ionicons name="cloud-upload-outline" size={28} color="#6b7280" />
                  <Text className="font-medium text-gray-700 mt-1">Browse Images</Text>
                  <Text className="text-xs text-gray-400 mt-1">(Recommended Upload Size is 800×500)</Text>
                </View>
              )}
            </TouchableOpacity>
            
            <Text className="text-sm text-gray-500 mt-4">Vendor's Name</Text>
            <TextInput
              className="mt-1 border border-gray-300 rounded-md px-3 py-8"
              value={vendorName}
              onChangeText={setVendorName}
              placeholder=""
            />
            
            <Text className="text-sm text-gray-500 mt-4">Vendor's Description</Text>
            <TextInput
              className="mt-1 border border-gray-300 rounded-md px-3 py-6 h-24"
              value={vendorDescription}
              onChangeText={setVendorDescription}
              placeholder=""
              multiline
              textAlignVertical="top"
            />
            
            <Text className="text-sm text-gray-500 mt-4">Address</Text>
            <TextInput
              className="mt-1 border border-gray-300 rounded-md px-3 py-6"
              value={address}
              onChangeText={setAddress}
              placeholder=""
            />
            
            <Text className="text-sm text-gray-500 mt-4">Phone Number</Text>
            <TextInput
              className="mt-1 border border-gray-300 rounded-md px-3 py-6"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              placeholder=""
              keyboardType="phone-pad"
            />
            
            <TouchableOpacity 
              className="mt-6 bg-orange rounded-md py-4 items-center"
              onPress={() => {
                // Handle save logic here
                navigation.goBack();
              }}
            >
              <Text className="text-white font-bold">SAVE VENDOR</Text>
            </TouchableOpacity>
            
            <View className="h-6" />
          </ScrollView>
          
          <View className="items-center pb-8 pt-2">
            <View className="w-16 h-1 bg-gray-300 rounded-full" />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  );
}