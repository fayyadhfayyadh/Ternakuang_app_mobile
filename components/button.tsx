import { View, Text, TouchableOpacity, } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useRoute } from '@react-navigation/native'
import { useRouter } from 'expo-router'

const Button = ({title,bgbtn,bgtext,rute}:any ) => {
    const navigation = useRouter();
  return (
    <TouchableOpacity style={tw`border-green-300 border bg-${bgbtn} px-26 py-4 rounded-lg mx-12`} onPress={ () => navigation.navigate(rute)}>
    <Text style={tw`text-${bgtext} text-center`}>{title}</Text>
    </TouchableOpacity>
)
}

export default Button
