import React from 'react'
import { Image, Text, View } from 'react-native'
import image from '@/assets/images/good.png'
import Button from '@/components/Button'
import { router } from 'expo-router'

const resetsuccess = () => {
  return (
    <>
      <View>
        <View className='pb-5 flex flex-col gap-2 items-center justify-end px-[20px] h-[108px] bg-bgprimary text-white'>
        </View>
        <View className='w-full h-fit flex flex-col items-center pb-[230px] justify-center pt-[50px]'>
            <Image source={image} className='w-[180px] h-[180px] object-cover' />
            <Text className='text-[27px] font-[600] pt-[30px]'>Password reset</Text>
            <Text className='w-[235px] text-center text-[15px] text-[#475467] pt-[6px] leading-[22px]'>Your Pasword has been successfully reset. Click below to Log in with new password.</Text>
        </View>
        <Button title='Back to login' onClick={()=>router.push('/(auth)/login')} active={true} />
      </View>
    </>
  )
}

export default resetsuccess
