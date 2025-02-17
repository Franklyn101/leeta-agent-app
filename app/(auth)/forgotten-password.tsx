import React, { useState } from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';

const ForgottenPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleResetPassword = () => {
    // Example validation
    if (!email.includes('@')) {
      setError('Please enter a valid email.');
      return;
    }
    setError('');
    // Handle reset password logic (e.g., API call)
    console.log('Reset password for:', email);
  };

  return (
    <SafeAreaView className="flex-1 justify-center items-center p-4">
      <Text className="text-2xl font-bold mb-4">Reset Password</Text>
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        error={error.includes('valid email') ? error : ''}
      />
      <Button title="Reset Password" onClick={handleResetPassword} />
    </SafeAreaView>
  );
};

export default ForgottenPasswordPage;

