import React from 'react';
import { Image, StyleSheet, Text, Dimensions, View } from 'react-native';
import tailwind from 'tailwind-rn';
import Carousel from 'react-native-snap-carousel';
import Recommendation from '../components/RecommProducts';
import GetFurnitures from './GetData';

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.68)


export default function RecommmProductCarousel () {

    const data = GetFurnitures('recommended');
    const isCarousel = React.useRef(null)
    const [index, setIndex] = React.useState(0);
    
    return (
        <View style={tailwind('w-full mt-1')}>
            <Carousel
                layout="stack"
                layoutCardOffset={170}
                ref={isCarousel}
                data={data}
                renderItem={Recommendation}
                onSnapToItem={ (index) => setIndex(index + 1) }
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                activeSlideAlignment={'start'}
                inactiveSlideShift={0}
                useScrollView={true}
                enableSnap={true}
            />
        </View>
    );
};
