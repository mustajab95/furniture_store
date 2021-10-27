import React from 'react';
import { Image, View } from 'react-native';
import tailwind from 'tailwind-rn';

export default function ProductImages({ item , key }) {

    // const {source} = props;
    
    return (
        <View style={tailwind('w-full h-64 rounded-md')}  >
            <Image key={key}
                style={tailwind('w-full h-full')}
                resizeMode="contain"
                // source={item.imgUrl}
                source={{uri: `${item.imgUrl}`}}
            />
        </View>
    );
};

