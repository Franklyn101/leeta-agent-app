import React from 'react'
import { ActivityIndicator, Text, View  } from 'react-native'
interface LoaderProps {
    state: boolean;
}

const Phone = () => {
  return (
    <>

    </>
  )
}


const Loader: React.FC<LoaderProps> = ({ state }) => {
  return (
    <>
    {
        state ? <View className='w-full h-screen z-[100] flex items-center justify-center absolute bg-[rgba(0,0,0,0.23)] top-0 left-0'>
        <View className="flex flex-row gap-4 h-[100px] w-[90%] justify-center items-center bg-white">
            <ActivityIndicator size="large" color="#00BFFF" />
            <Text className='text-black text-xl font-semibold   '>
                Connecting........
            </Text>
        </View>
      </View> : ''
    }
    </>
  )
}

export {Loader, Phone}
