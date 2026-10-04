import { View, Text, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function LoginScreen() {
  return (
    <SafeAreaView className='flex-1 bg-white'>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
        <ScrollView showsVerticalScrollIndicator={false} className='flex-1 px-6'>
          {/* Header */}
          <View className='mt-16'>
            <Text className='text-3xl font-poppins-bold text-gray-900 mb-2'>Welcome Back</Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
} 