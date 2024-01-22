import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTailwind } from "tailwind-rn";
import { useNavigation } from "@react-navigation/native";

import images from '../../../assets/images'

export default function WelcomeScreen() {

  const tailwind = useTailwind();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tailwind('flex-1 bg-[#877dfa]')}>
      <View style={tailwind("flex-1 flex justify-around my-4")}>
        <Text style={tailwind('text-white font-bold text-4xl text-center')}>
          Chào mừng đến với Multi-Library
        </Text>
        <View style={tailwind('flex-row justify-center')}>
            <Image source={images.welcome}
              style={{width: 350, height:350}}
            />
        </View>
          <View style={tailwind('space-y-4')}>
            <TouchableOpacity onPress={()=> navigation.navigate('SignUp')} style={tailwind('py-3 bg-yellow-400 mx-7 rounded-xl')}>
              <Text style={tailwind('text-xl font-bold text-center text-gray-700')}>Sign Up</Text>
            </TouchableOpacity>
            <View style={tailwind('flex-row justify-center')}>
              <Text style={tailwind('text-white font-semibold')}>
                  Already have an account?
              </Text>
              <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
              <Text style={tailwind('font-semibold text-yellow-400')}>Login</Text>
            </TouchableOpacity>
            </View>
          </View>
      </View>
    </SafeAreaView>
  )
}