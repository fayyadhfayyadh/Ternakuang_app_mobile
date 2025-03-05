import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'


import { useRouter } from 'expo-router'
import Button from '@/components/button'
import { AntDesign } from '@expo/vector-icons'


const signin = () => {
    const navigation = useRouter();
  return (
    <View style={tw`bg-black flex-1 px-3`}>
    <SafeAreaView>
    <View style={tw`items-center mt-38 px-7`}>
      <Text style={tw`text-white font-bold text-5 mr-50 `}>TERNAJUANG</Text>
      <TouchableOpacity style={tw`bg-gray-400 border-gray-300 border rounded-lg py-6 px-43 mt-7 mx-12`}></TouchableOpacity>
      <TouchableOpacity style={tw`bg-gray-400 border-gray-300 border rounded-lg py-6 px-43 mt-4 mx-12`}></TouchableOpacity>
      <View style={tw`flex-row justify-between mt-4`}>
      <Text style={tw`text-white`}>Ingat saya</Text>
      <Text style={tw`text-white`}>Lupa password?</Text>
      </View>
    </View>
    <View style={tw`mt-5`}>
      <Button title="Login" bgbtn="[#97F69B]" bgtext="black" rute="home"/>
      
    </View>
   
    <Text style={tw`text-center text-white mt-4`}>Dont have a Vidio account?<Text style={tw`text-blue-500`}onPress={ () => navigation.navigate("/auth/signin")}> Sign up</Text></Text>
    <View style={tw`bg-white w-full h-0.5 mt-7`}></View>

    <View style={tw`flex-row gap-5 justify-center `}>
    <View style={tw`bg-gray-600 w-17 h-17 mt-7 justify-center items-center border-2 rounded-lg`}>
  <AntDesign name="google" color={"white"} size={30} />
</View>

<View style={tw`bg-gray-600 w-17 h-17 mt-7 justify-center items-center border-2 rounded-lg`}>
  <AntDesign name="apple1" color={"white"} size={30} />
</View>


    </View>
    

    </SafeAreaView>
    </View>
  )
}

export default signin