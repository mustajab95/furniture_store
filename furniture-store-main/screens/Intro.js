import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, Image, Button, Pressable, StyleSheet, Text, View } from 'react-native';
import tailwind from 'tailwind-rn';
import { useFonts } from 'expo-font';
import MyIcons from '../components/myIcons';


export default function Intro({ navigation }) {

  useFonts({
    'Helvetica-Neue': require('../assets/fonts/FreeSans.otf'),
  });

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../assets/background-images/chair-bg.png')} 
        style={tailwind('absolute w-full h-full')}  resizeMode="stretch" >
        <View  style={tailwind('px-12 pt-24')}>
          <Text style={[tailwind('text-xl font-semibold'),styles.textBlack]} >Find the best furniture for your home</Text>
          <Text style={[tailwind('text-sm font-normal text-gray-500 pt-2 opacity-60'),styles.textBlack]}>We have all the furniture you have need for your home. 
          Find various types of furniture ranging form kitchenware to bedrooms to recliners.</Text>
          <Pressable style={[tailwind('rounded-lg flex flex-row p-3 justify-center items-center w-1/2 mt-3'),styles.bgBlack]}
            onPress={() => navigation.navigate('Home')}>
            <Text style={tailwind('text-white text-xs mr-1')}>Start exploring</Text>
            <MyIcons name='right-arrow' width="12" height="13" />
          </Pressable>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textBlack: {
    color: '#1F2123',
  },
  bgBlack: {
    backgroundColor: '#1F2123',
  },
});
