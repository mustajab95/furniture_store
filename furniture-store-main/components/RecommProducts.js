import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import tailwind from 'tailwind-rn';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


export default function Recommendation({ item }) {


    return (
        <View style={tailwind('w-3/5 bg-white py-2 pl-4 rounded-xl flex flex-row items-center')}>
            <Image
                style={tailwind('w-14 h-10')}
                resizeMode="contain"
                source={{uri: `${item.thumbnailImage}`}}
            />
            <View style={tailwind('pl-2 pb-2 flex flex-col')}>
                <Text style={[tailwind('text-xs mt-2 font-normal'),styles.textBlack]}>{item.title}</Text>
                    <View style={tailwind('flex flex-row items-center')}>
                        <Text style={[tailwind('text-xs font-medium pr-2'),styles.textBlack]}>{item.price}</Text>
                        <FontAwesomeIcon style={[tailwind('w-3 h-3'),styles.textOrange]} icon={ faStar } />
                        <Text style={[tailwind('text-xs font-medium pl-1'),styles.textBlack]}>{item.ratings}</Text>
                    </View>
            </View>
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
