import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, FontAwesome5, Ionicons } from '@expo/vector-icons';
import Bordericon from '@/components/bordericon';
import Cartevent from '@/components/cartevent';

const Home = () => {
  return (
    <ScrollView>
    <View style={tw`bg-black flex-1 px-3`}>
      <SafeAreaView>
        <View style={tw`flex-row justify-between items-center`}>
          <Text style={tw`text-white font-bold text-lg`}>Hai, Calon Sultan!</Text>
          <View style={tw`flex-row gap-6`}>
            <Ionicons name="chatbubble-ellipses-outline" color={"white"} size={25} />
            <FontAwesome5 name="user-circle" color={"white"} size={25} />
          </View>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`mt-5`}>
          <View style={tw`flex-row`}> 
            <Image style={tw`w-87 h-65 ml-5`} source={require('@/assets/images/poster.jpg')} />
            <Image style={tw`w-87 h-65 ml-5`} source={require('@/assets/images/poster2.jpg')} />
            <Image style={tw`w-87 h-65 ml-5`} source={require('@/assets/images/poster3.jpg')} />
          </View>
        </ScrollView>

        <View style={tw`flex-row justify-between mt-5`}>
          <Bordericon icon="graduation-cap" title="Modul Akademi" />
          <Bordericon icon="users" title="Komunitas" />
        </View>
        <View style={tw`flex-row justify-between mt-3`}>
          <Bordericon icon="ticket" title="Event Live" />
          <Bordericon icon="chat" title="Grup Diskusi" />
        </View>

        <View style={tw`flex-row bg-gray-800 p-3 rounded-lg shadow-lg mt-5 items-center`}>
          <Image style={tw`w-20 h-25`} source={require('@/assets/images/lucu.png')} />
          <View style={tw`flex-1 ml-3`}> 
            <View style={tw`flex-row`}> 
              <Text style={tw`text-white text-lg`}>Yuk, Ikuti </Text>
              <Text style={tw`text-green-500 text-lg`}>Tes Finansial</Text>
            </View>
            <Text style={tw`text-white text-sm`}>Dapatkan saran & rekomendasi belanjamu</Text>
          </View>
          <View style={tw`rounded-full bg-green-400 w-9 h-9 flex items-center justify-center ml-3`}>
            <AntDesign name="right" size={20} color="white" />
          </View>
        </View>

        <View style={tw`flex-row justify-between items-center pt-4`}>
          <View style={tw`flex-row gap-2 items-center`}>
            <Ionicons name="calendar-number" color={'white'} size={25} />
            <Text style={tw`text-neutral-400 text-lg`}>Ikuti Live Event Terdekat</Text>
          </View>
          <View style={tw`items-center`}>
            <Text style={tw`text-white`}>Lihat Semua</Text>
          </View>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`mt-5`}>
        <View style={tw`flex-row gap-3`}>
        <Cartevent img={"source={require('@/assets/images/poster.jpg')}"} title={"halo"} desc={"halo halo ai"}  tanggal={"Hari ini,26 januari"}/>
        <Cartevent title={"halo"} desc={"halo halo ai"}  tanggal={"Hari ini,26 januari"}/>
        </View>
        </ScrollView>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`mt-5`}>
        <View style={tw`flex-row gap-3`}>
        <Cartevent title={"halo"} desc={"halo halo ai"}  tanggal={"Hari ini,26 januari"}/>
        <Cartevent title={"halo"} desc={"halo halo ai"}  tanggal={"Hari ini,26 januari"}/>
        </View>
          </ScrollView>
       
      </SafeAreaView>
    </View>
    </ScrollView>
  );
};

export default Home;