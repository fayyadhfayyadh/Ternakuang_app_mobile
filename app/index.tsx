import { View, Text, Image, } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import Button from '@/components/button'

const index = () => {
  return (
    
    <View style={tw`bg-black flex-1 px-3`}>

    <SafeAreaView style={tw`justify-center items-center`}>
    <Image style={tw`w-87 h-65 ml-5 mt-20`} source={require('@/assets/images/g1.png')} />
     <View style={tw`mt-30 jusify-center items-center`}>
      <Text style={tw`text-white font-bold text-10`}>Belajar investasi & Keuangan Sendiri</Text>
      <Text style={tw`text-white`}>Belajar paling mudah praktis Dengan menonton vidio secara onlie dangan lebih 150++ lebih dari mentor yamg sudah ahli</Text>
      </View>
      <View style={tw`mt-10`}>
      <Button title="Mulai Belajar" bgbtn="[#97F69B]" rute="auth/register"/>
      <View style={tw`mt-3`}>
      <Button title="Login" bgtext="white" rute="auth/signin"/>
      </View>
      </View>
      </SafeAreaView>
    </View>
    
  )
}

export default index