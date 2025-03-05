import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { FontAwesome6 } from '@expo/vector-icons';
import { Link } from 'expo-router';
import tw from 'twrnc'
const Cartevent = ({ title, desc, img, tanggal }:any) => {
  return (
    <View
      style={tw`border border-2xl bg-gray-700 rounded-lg   w-70 h-30 p-10`}
      >    
      <Image source={{ uri: img }} style={ tw `w-163 h-150` } />
      <Text style={tw`text-green-500`}>{tanggal}</Text>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 5 }}>{title}</Text>
      <Text style={{ marginTop: 2 }}>{desc}</Text>
      
    </View>
  );
};

export default Cartevent;
