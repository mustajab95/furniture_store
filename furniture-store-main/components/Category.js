import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import tailwind from 'tailwind-rn';


export default function Category({ item }) {


    return (
        <View style={tailwind('w-1/3 bg-white p-4 rounded-xl flex flex-col items-center')}>
            <Image
                style={tailwind('w-14 h-10')}
                resizeMode="contain"
                // source={item.source}
                source={{uri: `${item.thumbnail}`}}
                />
            <Text style={[tailwind('text-xs font-medium mt-1 opacity-60'),styles.textBlack]}>{item.name}</Text>
        </View>
    );
};



const styles = StyleSheet.create({
  textBlack: {
    color: '#1F2123',
  },
});
