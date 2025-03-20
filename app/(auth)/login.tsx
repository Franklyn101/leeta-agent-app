import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Input from '../../components/Input'; 
import '../../global.css'; 
import Button from '@/components/Button';
import { useRouter } from 'expo-router';

const SignInPage: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Check if both fields are filled
    setIsActive(!!(email && password)); // More concise check
  }, [email, password]);

  return (
    <> 
      <ScrollView>
        <View className='pb-5 flex flex-col gap-2 items-center justify-end px-[20px] h-[108px] bg-bgprimary text-white'>
          <Text className='text-[22px] text-white font-[600]'>Login</Text>
        </View>
        <View className='gap-[4px] flex flex-col p-[20px] w-full h-fit items-start justify-start'>
          <Text className='text-3xl font-[600] '>Welcome Back</Text>
          <Text>Login to manage your account</Text>
        </View>
        <View className='w-full h-fit pt-[5px] flex flex-col gap-[15px] items-center justify-center'>
          <View className='w-[90%] gap-[8px] h-fit flex flex-col '>
            <Text className='text-[12px] text-[#98A2B3]'>Email Address</Text>
            <Input 
              classStyle='pl-[10px] rounded-[4px] h-[56px]' 
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View className='w-[90%] gap-[8px] h-fit flex flex-col '>
            <Text className='text-[12px] text-[#98A2B3]'>Password</Text>
            <Input 
              classStyle='pl-[10px] rounded-[4px] h-[56px]' 
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
          </View> 
        </View>
        <Text onPress={() => router.push('/(auth)/forgotten-password')} className='w-[90%] mx-auto pt-[15px] underline text-orange'>I forgot my password</Text>
        <View className='pt-[220px]'>
          <Button 
            classStyle='text-white text-[16px] font-[600] bg-[#D9D9D9]' 
            title='Log In' 
            active={isActive} 
            onClick={() => router.push('/(tabs)/home')} // Corrected here
          />
          <Text className='mx-auto font-semibold text-[16px] py-[15px]'>
            Don't have an account? <Text className='text-orange' onPress={() => router.push('/(auth)/sign-up')}>Sign Up</Text>
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default SignInPage;