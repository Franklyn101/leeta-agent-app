import React, { useState, useEffect, useContext } from 'react';
import { ActivityIndicator, Text, View, TouchableOpacity } from 'react-native';
import { MyContext } from '../context/globalContext';
import OTPInput from './otpinput';

interface LoaderProps {
    state: boolean;
}

interface PhoneProps {
    phone: string;
    open: boolean;
    onClose: () => void;
    onVerify: () => void;
}

interface PhoneVerifyProps {
    phone: string;
    open: boolean;
}

const Phone: React.FC<PhoneProps> = ({ phone, open, onClose, onVerify }) => {
    return (
        <>
            {open && (
                <View className='w-full h-screen z-[100] flex items-center justify-center absolute bg-[rgba(0,0,0,0.23)] top-0 left-0'>
                    <View className="flex flex-col h-[200px] gap-4 w-[90%] p-6 justify-start items-start text-2xl bg-white">
                        <Text className='text-2xl'>Verify phone number</Text>
                        <Text className='text-xl pb-[49px]'>+234 {phone}</Text>
                        <View className='flex flex-row w-full items-end text-center h-[30px] justify-between'>
                            <TouchableOpacity onPress={onClose}>
                                <Text className='text-orange text-2xl'>EDIT</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onVerify}>
                                <Text className='text-orange text-2xl'>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )}
        </>
    );
};

const formatPhoneNumber = (phone: string) => {
    return phone.replace(/(.{3})/g, '$1 ').trim();
};

const PhoneVerify: React.FC<PhoneVerifyProps> = ({ phone, open }) => {
    const formattedPhone = formatPhoneNumber(phone);
    const [timer, setTimer] = useState(120); // Initialize timer with 30 seconds

    useEffect(() => {
        if (open && timer > 0) {
            const interval = setInterval(() => {
                setTimer((prev) => {
                    if (prev <= 1) {
                        clearInterval(interval);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [open, timer]);

    // Hide PhoneVerify when timer reaches 0
    if (timer === 0) {
        return null;
    }

    return (
        <>
            {open && (
                <View className='w-full h-screen z-[100] flex items-center justify-center absolute bg-[rgba(0,0,0,0.23)] top-0 left-0'>
                    <View className="flex flex-col h-fit py-[40px] px-[15px] gap-4 w-[90%] justify-between items-start text-2xl bg-white">
                        <Text className='text-[22px] font-[700]'>Verify +234 {formattedPhone}</Text>
                        <View className='w-full flex flex-col items-center justify-center'>
                            <OTPInput />
                            <Text className='text-[18px] text-orange py-8'>enter 6 digit code</Text>
                        </View>
                        <View className='flex flex-row w-full items-end text-center h-[30px] justify-between'>
                            <TouchableOpacity>
                                <Text className='font-normal text-2xl'>Resend SMS</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text className='font-normal text-2xl'>{timer}S</Text> {/* Display timer */}
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )}
        </>
    );
};

const Loader: React.FC<LoaderProps> = ({ state }) => {
    const [showPhone, setShowPhone] = useState(false);
    const [showPhoneVerify, setShowPhoneVerify] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const { userNum, setState } = useContext(MyContext)!;

    useEffect(() => {
        if (state) {
            setShowPhone(true);
        } else {
            setShowPhone(false);
            setShowPhoneVerify(false);
        }
    }, [state]);

    const handleClose = () => {
        setShowPhone(false);
        setShowPhoneVerify(false);
        setState(false);
    };

    const handleVerify = () => {
        setShowLoader(true);
        setShowPhone(false);
        // Show PhoneVerify after 1 second
        setTimeout(() => {
            setShowLoader(false);
            setShowPhoneVerify(true); // Show phone verification modal
        }, 1000);
    };

    return (
        <>
            {showLoader && (
                <View className='w-full h-screen z-[100] flex items-center justify-center absolute bg-[rgba(0,0,0,0.23)] top-0 left-0'>
                    <View className="flex flex-row gap-4 h-[100px] w-[90%] justify-center items-center bg-white">
                        <ActivityIndicator size="large" color="red" />
                        <Text className='text-black text-xl font-semibold'>
                            Connecting........
                        </Text>
                    </View>
                </View>
            )}
            <Phone phone={userNum} open={showPhone} onClose={handleClose} onVerify={handleVerify} />
            <PhoneVerify phone={userNum} open={showPhoneVerify} />
        </>
    );
};

export { Loader, Phone, PhoneVerify };