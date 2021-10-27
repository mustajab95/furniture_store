import React from 'react';
import { Image, StyleSheet, Text, View, Pressable } from 'react-native';
import tailwind from 'tailwind-rn';
import MyIcons from './myIcons';


export default function Header( props ) {

    const {type, navigation} = props;

    if (type === 'home') {

        return (
            <View style={tailwind('flex flex-row justify-between items-center')}>
                <Pressable 
                    onPress={() => navigation.navigate('Home')}>
                    <MyIcons name='dashboard' width="20" height="20" />
                </Pressable>
                <Text style={[tailwind('text-base font-semibold'),styles.textBlack]}>Home</Text>
                <Image
                    style={tailwind('w-8 h-8')}
                    resizeMode="contain"
                    source={require('../assets/avatar.png')}        
                />
            </View>
        );
    }
    else if (type === 'details') {
        
        return (
            <View style={tailwind('flex flex-row justify-between items-center')}>
                <Pressable 
                    onPress={() => navigation.navigate('Home')}>
                    <MyIcons name='left-arrow' width="18" height="18" />
                </Pressable>
                <Text style={[tailwind('text-base font-semibold'),styles.textBlack]}>Details</Text>
                <Pressable >
                    <MyIcons name='heart' width="21" height="20" />
                </Pressable>
            </View>
        );

    }

}; 



const styles = StyleSheet.create({
  textBlack: {
    color: '#1F2123',
  },
});