import { View, Text, ScrollView } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import CustomSafeAreaView from '@/components/CustomSafeAreaView'; 
import Header from '@/components/Header';
import Barchart from '@/components/barchart';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import StatCard from '@/components/statcard';
export default function HomeScreen() {
  return (
    <>
    <Header title="Dashboard"/>
      <CustomSafeAreaView>
     <ScrollView>
      <View className='flex items-center gap-4 flex-row pl-6 pt-2'>
        <Text className='text-xl font-semibold'>Welcome, Agent</Text>
        <HelloWave/>
      </View>
      <View>
        <Barchart />

      </View>
      <TouchableOpacity 
      className="absolute bottom-[-2rem]  right-20 w-14 h-14 rounded-full bg-orange items-center justify-center "
    >
      <Ionicons name="add" size={30} color="white" />
    </TouchableOpacity>
    <View className="flex-row pl-10 items-center my-4">
              <Ionicons name="chevron-back-circle" size={24} color="#fbbf24" />
              <Text className="text-[#CFCFCF] ml-2">Scroll down to manage</Text>
            </View>
            
            <View className="flex-row flex-wrap -mx-2">
              <View className="w-1/2 px-2 mb-4">
                <StatCard 
                  title="Total Vendors Managed" 
                  value="1" 
                  iconName="briefcase-outline" 
                  iconColor="white" 
                  bgColor="bg-indigo-900" 
                />
              </View>
              
              <View className="w-1/2 px-2 mb-4">
                <StatCard 
                  title="Pending verification request" 
                  value="1" 
                  iconName="time-outline" 
                  iconColor="white" 
                  bgColor="bg-indigo-900" 
                />
              </View>
              
              <View className="w-1/2 px-2 mb-4">
                <StatCard 
                  title="Total verified vendors" 
                  value="0" 
                  iconName="checkmark-circle-outline" 
                  iconColor="white" 
                  bgColor="bg-indigo-900" 
                />
              </View>
              
              <View className="w-1/2 px-2 mb-4">
                <StatCard 
                  title="Unverified verification" 
                  value="1" 
                  iconName="alert-circle-outline" 
                  iconColor="white" 
                  bgColor="bg-indigo-900" 
                />
              </View>
            </View>
     </ScrollView>

        
        
      </CustomSafeAreaView>
    </>
  );
}


