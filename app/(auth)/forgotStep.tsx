import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import image from '@/assets/images/mail-box.png'
import ForInput from '@/components/forgototp'
import Button from '@/components/Button'
import { router } from 'expo-router'

const forgotStep = () => {
  const [email, setEmail] = useState('beckyamsssssssasoma@yankee.com')
  const maskEmail = (email: string) => {
    const [localPart, domain] = email.split('@');

    if (localPart.length <= 5) {
        return email; // Return unchanged if local part is 5 or fewer characters
    }

    const maskedLocalPart = localPart.slice(0, 5) + '*'.repeat(localPart.length - 5);
    return `${maskedLocalPart}@${domain}`;
  };

  const maskedEmail = maskEmail(email);
  return (
    <>
      <View className='pb-5 flex drop-shadow-2xl flex-col gap-2 items-center justify-end px-[20px] h-[108px] bg-bgprimary text-white'>
      </View>
      <View className='w-full h-fit flex flex-col items-center gap-[8px] text-center justify-center py-[30px]'>
        <Image source={image || "@/assets/images/mail-box.png"}
          className='w-[160px] h-[160px]'
        />
        <View className='text-center w-full h-fit flex flex-col items-center justify-center gap-[0px]'>
          <Text className='text-[25px] font-[600] pb-[5px] pt-[20px]'>Check your Email</Text>
          <Text className='text-[13px] text-[#475467]'> we’ve sent an OTP to </Text>
          <Text className='text-[#475467]'>{maskedEmail}</Text>
        </View>
        <ForInput />
        <Text className='text-[20px] font-[600] text-orange underline'>Resend OTP</Text>
        <Text className='text-[15px] text-[#475467] pb-[160px]'>Time Remaining 2:00</Text>
        <Button 
          classStyle='text-white text-[16px] font-[600] bg-[#D9D9D9]' 
          title='Verify Now' 
          active={true} 
          onClick={()=>router.push('/(auth)/newpassword')}
        />
      </View>
    </>
  )
}

export default forgotStep