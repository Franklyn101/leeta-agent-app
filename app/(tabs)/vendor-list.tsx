import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  FlatList, 
  Modal,
  Pressable
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import Header from '@/components/Header';

type Vendor = {
  id: string;
  name: string;
  status: 'Verified' | 'Rejected' | 'Pending' | 'Completed';
};

type FilterTab = 'All' | 'Verified' | 'Cancelled' | 'Rejected';

export default function VendorListScreen() {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState<FilterTab>('All');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedVendorId, setSelectedVendorId] = useState<string | null>(null);
  
  // Sample vendor data
  const vendors: Vendor[] = [
    { id: '1', name: 'Jane lpg store', status: 'Verified' },
    { id: '2', name: 'Jane lpg store', status: 'Rejected' },
    { id: '3', name: 'Jane lpg store', status: 'Pending' },
    { id: '4', name: 'Jane lpg store', status: 'Completed' },
    { id: '5', name: 'Jane lpg store', status: 'Completed' },
  ];

  const filteredVendors = selectedTab === 'All' 
    ? vendors 
    : vendors.filter(vendor => {
        if (selectedTab === 'Cancelled') return false; // No cancelled vendors in our sample
        return vendor.status === selectedTab;
      });

  const getStatusColor = (status: Vendor['status']): string => {
    switch (status) {
      case 'Verified':
      case 'Completed':
        return 'text-green-500';
      case 'Rejected':
        return 'text-red-500';
      case 'Pending':
        return 'text-amber-500';
      default:
        return 'text-gray-500';
    }
  };

  const handleMenuPress = (vendorId: string) => {
    setSelectedVendorId(vendorId);
    setModalVisible(true);
  };

  const handleActionSelect = (action: 'view' | 'edit' | 'delete') => {
    // Handle the selected action
    if (selectedVendorId) {
      console.log(`${action} vendor with id: ${selectedVendorId}`);
      
      // Here you would navigate or perform the action
      if (action === 'edit') {
        router.push(`/vendors/${selectedVendorId}/edit`);
      } else if (action === 'view') {
        router.push(`/vendors/${selectedVendorId}`);
      } else if (action === 'delete') {
        // Handle delete logic
      }
    }
    
    // Close the modal
    setModalVisible(false);
  };

  const renderVendorItem = ({ item }: { item: Vendor }) => (
    <View className="px-4">
      <View className="flex-row items-center justify-between py-4">
        <View className="flex-row items-center">
          <View className="bg-amber-100 p-2 rounded-md">
            <Ionicons name="cube-outline" size={24} color="#f59e0b" />
          </View>
          <Text className="ml-3 text-base font-medium">{item.name}</Text>
        </View>
        <TouchableOpacity onPress={() => handleMenuPress(item.id)}>
          <Ionicons name="ellipsis-vertical" size={20} color="#6b7280" />
        </TouchableOpacity>
      </View>
      
      <View className="flex-row items-center mb-4">
        <Text className="text-gray-500 text-sm">Status : </Text>
        <Text className={`text-sm font-medium ${getStatusColor(item.status)}`}>
          {item.status}
        </Text>
      </View>
      
      <View className="h-px bg-gray-200" />
    </View>
  );

  return (
    <View className="flex-1 bg-white">
      <Header title="Vendors list" />
      
      {/* Filter tabs */}
      <View className="flex-row bg-gray-100 mx-4 my-4 rounded-full p-1">
        {(['All', 'Verified', 'Cancelled', 'Rejected'] as FilterTab[]).map((tab) => (
          <TouchableOpacity
            key={tab}
            className={`flex-1 py-2 px-3 rounded-full ${
              selectedTab === tab ? 'bg-white' : ''
            }`}
            onPress={() => setSelectedTab(tab)}
          >
            {tab === 'All' && selectedTab === 'All' && (
              <View className="absolute left-2 top-1/2 -mt-1 w-2 h-2 rounded-full bg-green-500" />
            )}
            <Text
              className={`text-center text-sm ${
                selectedTab === tab ? 'font-medium' : 'text-gray-500'
              }`}
            >
              {tab === 'All' ? '  All' : tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      
      {/* Vendor list */}
      <FlatList
        data={filteredVendors}
        renderItem={renderVendorItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
      
      {/* Action menu modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable 
          className="flex-1 bg-black/50 justify-center items-center"
          onPress={() => setModalVisible(false)}
        >
          <View className="bg-white rounded-lg w-11/12 max-w-sm overflow-hidden">
            <View className="flex-row justify-between items-center p-4 border-b border-gray-200">
              <Text className="text-lg font-medium text-gray-700">Select Action</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Ionicons name="close" size={24} color="#6b7280" />
              </TouchableOpacity>
            </View>
            
            <TouchableOpacity 
              className="p-4 border-b border-gray-100"
              onPress={() => handleActionSelect('view')}
            >
              <Text className="text-base text-gray-700">View</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              className="p-4 border-b border-gray-100"
              onPress={() => handleActionSelect('edit')}
            >
              <Text className="text-base text-gray-700">Edit</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              className="p-4"
              onPress={() => handleActionSelect('delete')}
            >
              <Text className="text-base text-gray-700">Delete</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
      
      {/* Floating Action Button */}
      <TouchableOpacity 
        className="absolute bottom-20 right-6 w-14 h-14 rounded-full bg-orange-500 items-center justify-center shadow-lg"
        onPress={() => router.push('/vendor-list/add')}
      >
        <Ionicons name="add" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}