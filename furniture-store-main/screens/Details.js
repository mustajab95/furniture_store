import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import tailwind from 'tailwind-rn';
import ProductImageCarousel from '../components/ProductImageCarousel';
import ProductDescription from '../components/ProductDescription';
import Header from '../components/Header';
import MyIcons from '../components/myIcons';
import GetFurnitures from '../components/GetData';
import firebase from "firebase";

function addToCart(quantity, product, navigation) {
    firebase
      .database().ref('cart/1/').set({
        productName: product.title,
        productId: product.id,
        quantity: quantity,
        color: product.activeColor.activeColor,
      });
      
      navigation.navigate('Home');
}

export default function Details( { navigation } ) {

    const product = GetFurnitures('product');
    const [quantity, setQuantity] = React.useState(1);

    return (
    <View style={styles.container}>
        <View  style={tailwind('px-8 pt-10 pb-6 w-full h-full')}>
            <View  style={tailwind('relative w-full h-full')}>
                <Header type='details' navigation={navigation}/>
                <ProductImageCarousel />
                <ProductDescription />
                <View style={tailwind('flex flex-row items-center justify-between mt-4')}>
                    <Text style={tailwind('text-base font-medium text-black')}>Quantity</Text>
                    <View style={tailwind('flex flex-row items-center')}>
                        <Pressable
                            onPress={() => {quantity > 1 ? setQuantity(quantity-1):setQuantity(1)}}>
                            <View style={[tailwind('rounded-lg p-2 mr-2'), styles.bgBlackLight]} >
                                <MyIcons name='minus' width="12" height="12" />
                            </View> 
                        </Pressable>   
                        <Text style={tailwind('text-base font-medium text-black')}>{quantity}</Text>
                        <Pressable
                            onPress={() => {setQuantity(quantity+1)}}>
                            <View style={[tailwind('rounded-lg p-2 ml-2'), styles.bgBlackLight]} >
                                <MyIcons name='plus' width="12" height="12" />
                            </View> 
                        </Pressable>
                    </View>
                </View>
                <Pressable style={[tailwind('rounded-lg flex flex-row p-3 justify-center items-center w-full absolute bottom-0'),styles.bgBlack]}
                    onPress={() => {addToCart(quantity, product, navigation)}}>
                    <MyIcons name='Bag-alt' width="16" height="18" />
                    <Text style={tailwind('text-white text-xs')}>Add to Cart</Text>
                </Pressable> 
            </View>
        </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8F8',
  },
  bgBlack: {
    backgroundColor: '#1F2123',
  },
  bgBlackLight: {
    backgroundColor: '#333333',
  },
});
