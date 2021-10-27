import React from 'react';
import { Image, StyleSheet, Text, Dimensions, View, FlatList } from 'react-native';
import tailwind from 'tailwind-rn';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import ProductImages from './ProductImages';
import GetFurnitures from './GetData';

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.68)

export default function ProductImageCarousel () {

    const isCarousel = React.useRef(null)
    const [index, setIndex] = React.useState(0);
    const data = GetFurnitures('product');
    const data_set = [
        {
            imgUrl: `${data.carouselImage1}`
          },
          {
            imgUrl: `${data.carouselImage2}`
          },
          {
            imgUrl: `${data.carouselImage3}`
          }
    ]
    
    return (
        <View style={tailwind('w-full h-64 rounded-md mt-3')}>
            <Carousel
                layout="stack"
                layoutCardOffset={1}
                ref={isCarousel}
                data={data_set}
                renderItem={ProductImages}
                onSnapToItem={ (index) => setIndex(index + 1) }
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                activeSlideAlignment={'start'}
                inactiveSlideShift={0}
                useScrollView={true}
                enableSnap={true}
            />
            <View style={tailwind('absolute -bottom-2 left-1/3')}>
                <Pagination
                    dotsLength={data.length}
                    activeDotIndex={index}
                    carouselRef={isCarousel}
                    dotStyle={{
                    width: 5,
                    height: 5,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.92)'
                    }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                    tappableDots={true}
                />
            </View>
        </View>
    );
};



{/* <FlatList 
                data={data}
                keyExtractor = {(item, index) => 'key' + index}
                horizontal
                pagingEnabled
                scrollEnabled
                snapToAlignment = 'center'
                scrollEventThrottle = {16}
                decelerationRate = {"fast"}
                showsHorizontalScrollIndicator = {false}
                renderItem={({item}) => {
                    return <ProductImages item={item} />
                }}
            /> */}



 {/* <View style={tailwind('')}>
                <Pagination
                    dotsLength={data.length}
                    activeDotIndex={index}
                    carouselRef={isCarousel}
                    dotStyle={{
                    width: 5,
                    height: 5,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.92)'
                    }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                    tappableDots={true}
                />
            </View> */}