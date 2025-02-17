import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';
import Input from '../../components/Input'; 
import '../../global.css'; 
import Checkbox from '@/components/Checkbox';
import Button from '@/components/Button';
import { useRouter } from 'expo-router';
import { Loader } from '@/components/phone';

const SignUpPage: React.FC = () => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Check if all fields are filled
    if (fullName && email && phoneNumber && password) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [fullName, email, phoneNumber, password]);

  return (
    <> 
      <ScrollView>
      <Loader state={true} />
        <View className='pt-5 flex flex-col gap-2 items-start justify-center px-[20px] h-[143px] bg-bgprimary text-white'>
          <Text className='text-[22px] text-white font-[600]'>Create an account</Text>
          <Text className='text-[13px] text-white '>Let's get you started</Text>
        </View>
        <View className='w-full h-fit pt-[50px] flex flex-col gap-[15px] items-center justify-center'>
          <View className='w-[90%] gap-[8px] h-fit flex flex-col '>
            <Text className='text-[12px] text-[#98A2B3]'>Full Name</Text>
            <Input 
              classStyle='pl-[10px] rounded-[4px] h-[56px]' 
              value={fullName}
              onChangeText={setFullName}
            />
          </View>
          <View className='w-[90%] gap-[8px] h-fit flex flex-col '>
            <Text className='text-[12px] text-[#98A2B3]'>Email Address</Text>
            <Input 
              classStyle='pl-[10px] rounded-[4px] h-[56px]' 
              value={email}
              onChangeText={setEmail}
            />
          </View> 
          <View className='w-[90%] gap-[8px] h-fit flex flex-col '>
            <Text className='text-[12px] text-[#98A2B3]'>Phone Number</Text>
            <Input 
              classStyle='pl-[10px] rounded-[4px] h-[56px]' 
              value={phoneNumber}
              phoneNumber={true}
              onChangeText={setPhoneNumber}
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
        <View className='w-[90%] flex items-center justify-center'>
          <Checkbox label={
            <Text>
              I have read and I agree to Leeta’s <Text className='text-orange underline'>Privacy Policy</Text>, <Text className='text-orange underline'>Terms and conditions.</Text>
            </Text>
          }/>
        </View>
        <Button 
          active={isActive} 
          classStyle='text-white text-[16px] font-[600] bg-[#D9D9D9]' 
          title='Create Account' 
        />
        <Text className='mx-auto text-[16px] py-[15px]'>
          Already have an account? <Text className='text-orange' onPress={() => router.push('/(auth)/login')}>Sign In</Text>
        </Text>
      </ScrollView>
    </>
  );
};

export default SignUpPage;