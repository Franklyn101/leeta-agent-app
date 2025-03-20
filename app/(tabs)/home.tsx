import { View, Text, ScrollView } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import CustomSafeAreaView from '@/components/CustomSafeAreaView'; 
import Header from '@/components/Header';
import Barchart from '@/components/barchart';

export default function HomeScreen() {
  return (
    <>
    
      <CustomSafeAreaView>
     <Header/>
     <ScrollView>
      <View className='flex items-center gap-4 flex-row pl-6 pt-10'>
        <Text className='text-xl font-semibold'>Welcome, Agent</Text>
        <HelloWave/>
      </View>
      <View>
        <Barchart />

      </View>
     </ScrollView>

        
        
      </CustomSafeAreaView>
    </>
  );
}


