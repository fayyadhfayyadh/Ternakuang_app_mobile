import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Entypo } from '@expo/vector-icons'
const Bordericon = ({icon,title}:any) => {
  return (
    <View style={tw`border-l-8 border-green-600 p-4 rounded-lg flex-row bg-neutral-900 gap-3 w-44 `}>
      <Entypo name={icon} size={22} style={tw`text-white`}/>
      <Text style={tw`text-white text-center`}>{title}</Text>
    </View>
  )
}

export default Bordericon