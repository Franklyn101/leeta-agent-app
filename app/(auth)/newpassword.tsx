import Button from '@/components/Button';
import Input from '@/components/Input'
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'

const Newpassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isActive, setIsActive] = useState(false);

    useEffect(() => {
      // Check if both fields are filled
      if (password && confirmPassword && password == confirmPassword) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    }, [password, confirmPassword]);
  

  return (
    <View>
      <View className='pb-5 flex flex-col gap-2 items-center justify-end px-[20px] h-[108px] bg-bgprimary text-white'>
      </View>
      <View className='p-[20px]'>
        <Text className='text-[25px] font-[600] pb-[3px]'>Create new password</Text>
        <Text className='text-[#475467] text-[15px]'>A strong password must contain a mixture of uppercase  and lower case, specials characters and numeric</Text>
      </View>
      <View className='w-full px-[20px] pt-[20px] flex flex-col'>
        <Input 
          classStyle='pl-[10px] w-full rounded-[4px] h-[56px]' 
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          placeholderText={'Enter a six digit password'}
        />
        <Input 
          classStyle='pl-[10px] w-full rounded-[4px] h-[56px]' 
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
          placeholderText={'Confirm password'}
        />
      </View>
      <Button 
        classStyle='text-white text-[16px] font-[600] bg-[#D9D9D9]' 
        title='Create Password' 
        active={isActive} 
        onClick={()=>router.push('/(auth)/resetsuccess')}
      />
    </View>
  )
}

export default Newpassword
