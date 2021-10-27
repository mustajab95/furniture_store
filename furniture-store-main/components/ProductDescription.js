import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tailwind from 'tailwind-rn';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import ProductColors from './ProductColors';
import GetFurnitures from './GetData';

export default function ProductDescription(props) {

    const data = GetFurnitures('product');
    const stars = [];

    for (var i = 0; i < data.ratings; i++) {
        stars.push(
            <FontAwesomeIcon style={[tailwind('text-sm'),styles.textOrange]} icon={ faStar } />
        )
    }
    
    return (
        <View style={tailwind('flex flex-col mt-3')}>
            <Text style={tailwind('text-lg font-semibold text-black')}>{data.name}</Text>
            <View style={tailwind('flex flex-row items-center mt-1')}>
                {stars}
                {/* <FontAwesomeIcon style={[tailwind('text-sm'),styles.textOrange]} icon={ faStarHalfAlt } /> */}
                <View style={tailwind('flex flex-row items-center pl-1')}>
                    <Text style={[tailwind('text-sm font-medium'),styles.textBlack]}>{data.ratings}</Text>
                    <Text style={[tailwind('pl-1 text-sm opacity-60'),styles.textBlack]}>({data.orders})</Text>
                </View>
            </View>
            <Text style={[tailwind('text-sm mt-1'),styles.textGray]}>{data.description}</Text>
            <ProductColors data={data} />
    </View>
    );
};

const styles = StyleSheet.create({
    textBlack: {
      color: '#1F2123',
    },
    textGray: {
        color: '#828282',
      },
    textOrange: {
      color: '#FF7324',
    },
  });
