import React, { useEffect, useState } from 'react';
import { View, Text, Image, SafeAreaView, Animated } from 'react-native';
import { useRouter } from 'expo-router';

const Index: React.FC = () => {
  const router = useRouter();
  const [visibleImages, setVisibleImages] = useState<number[]>([]);
  const [animations, setAnimations] = useState<Animated.Value[]>([]);
  const [isMounted, setIsMounted] = useState(false); // Track mounting state
  const [isNavigationReady, setIsNavigationReady] = useState(false); // Ensure navigation is ready

  const images = [
    require('../assets/images/Vectorl.png'),
    require('../assets/images/Vector.png'),
    require('../assets/images/Vector.png'),
    require('../assets/images/Vectort.png'),
    require('../assets/images/Vectora.png'),
  ];

  useEffect(() => {
    const initialAnimations = images.map(() => new Animated.Value(0));
    setAnimations(initialAnimations);

    const interval = setInterval(() => {
      setVisibleImages((prev) => {
        if (prev.length < images.length) {
          return [...prev, prev.length]; // Show the next image
        }
        clearInterval(interval);
        return prev; // Return previous state
      });
    }, 1000); // Show next image every second

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    visibleImages.forEach((_, index) => {
      Animated.timing(animations[index], {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    });
  }, [visibleImages]);

  // Set mounted state to true
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Ensure navigation only happens when app is fully mounted & navigation is ready
  useEffect(() => {
    if (visibleImages.length === images.length && isMounted && isNavigationReady) {
      const isLoggedIn = false; // Replace with your actual login check

      const timer = setTimeout(() => {
        router.push( '/(auth)/sign-up');
      }, 3000); // Adjust the timeout duration as necessary

      return () => clearTimeout(timer);
    }
  }, [visibleImages, isMounted, isNavigationReady]);

  useEffect(() => {
    setTimeout(() => {
      setIsNavigationReady(true);
    }, 1000); // Ensure navigation is ready after a small delay
  }, []);

  return (
    <>
      <SafeAreaView className="flex-1 items-center justify-center">
        <View className="flex flex-row gap-3 items-center h-[70vh] justify-center p-4">
          <View className='flex justify-center h-full items-center'>
            <Image
              source={require('../assets/images/Group 842.png')}
              className="w-[49.65px] h-[59.99px]"
            />
          </View>
          <View className="flex-row">
            {visibleImages.map((index) => (
              <Animated.Image
                key={index}
                source={images[index]}
                style={{
                  opacity: animations[index],
                  transform: [{ scale: animations[index] }],
                }}
                className="w-[25.4px] h-[23.5px] mx-1"
              />
            ))}
          </View>
        </View>
        <View className='flex justify-center items-center'>
          <Text className='text-secondarytext text-[14px] font-medium'>
            Your reliable kitchen assistant.
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Index;
