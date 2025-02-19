import Button from '@/components/Button';
import Input from '@/components/Input'
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'

const ForgottenPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [isActive, setIsActive] = useState(false);

    useEffect(() => {
      // Check if both fields are filled
      if (email) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    }, [email]);
  

  return (
    <View>
      <View className='pb-5 flex flex-col gap-2 items-center justify-end px-[20px] h-[108px] bg-bgprimary text-white'>
        <Text className='text-[22px] text-white font-[600]'>Login</Text>
      </View>
      <View className='p-[20px]'>
        <Text className='text-[25px] font-[600] pb-[2px]'>Forgot Password</Text>
        <Text className='text-[#475467]'>Enter your email address to reset your password</Text>
      </View>
      <View className='w-full px-[20px] pt-[30px] flex flex-col'>
        <Input 
          classStyle='pl-[10px] w-full rounded-[4px] h-[56px]' 
          value={email}
          onChangeText={setEmail}
          placeholderText={'Enter email'}
        />
      </View>
      <Button 
        classStyle='text-white text-[16px] font-[600] bg-[#D9D9D9]' 
        title='Continue' 
        active={isActive} 
        onClick={()=>router.push('/forgotStep')}
      />
    </View>
  )
}

export default ForgottenPasswordPage
