import React from 'react';
import { Image, StyleSheet, Text, View, Pressable } from 'react-native';
import tailwind from 'tailwind-rn';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


export default function PopularProduct({ item, navigation }) {

    return (
        <View style={tailwind('w-1/2 bg-white p-4 rounded-xl flex flex-col')}>
            <Pressable
                onPress={() => navigation.navigate('Details')} >
                <Image
                style={tailwind('w-28 h-24 self-center')}
                resizeMode="contain"
                // source={item.source}
                source={{uri: `${item.thumbnailImage}`}}
                />
                <Text style={[tailwind('pl-2 text-xs mt-2 font-normal'),styles.textBlack]} >{item.title}</Text>
                <View style={tailwind('pl-2 flex flex-row items-center mt-1')}>
                    <Text style={[tailwind('text-xs font-medium pr-4'),styles.textBlack]}>{item.price}</Text>
                    <FontAwesomeIcon style={[tailwind('w-3 h-3'),styles.textOrange]} icon={ faStar } />
                    <Text style={[tailwind('text-xs font-medium pl-1'),styles.textBlack]}>{item.ratings}</Text>
                </View>               
            </Pressable>
        </View>
    );
};



const styles = StyleSheet.create({
  textBlack: {
    color: '#1F2123',
  },
  textOrange: {
    color: '#FF7324',
  },
});
