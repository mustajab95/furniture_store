import React from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';
import tailwind from 'tailwind-rn';
import Header from '../components/Header';
import PopularProductCarousel from '../components/PopularProductCarousel';
import RecommmProductCarousel from '../components/RecommmProductCarousel';
import CategoryCarousel from '../components/CategoryCarousel';
import BottomMenu from '../components/BottomMenu';
import MyIcons from '../components/myIcons';


export default function Home({ navigation }) {

  return (
    <View style={styles.container}>
        <View  style={tailwind('px-8 pt-10 pb-8 w-full h-full')}>
            <View  style={tailwind('relative w-full h-full')}>
                <Header type='home' navigation={navigation} />
                <View style={tailwind('mb-4')}>
                    <TextInput
                        style={tailwind('w-full h-10 bg-white p-6 rounded-xl mt-4 pl-12')}
                        placeholder="Search a product" />
                    <MyIcons name='search' width="16" height="16" />
                    <MyIcons name='filter' width="20" height="17" />
                </View>
                <CategoryCarousel />
                <View style={tailwind('mt-8')}>
                    <View style={tailwind('flex flex-row justify-between items-center mb-5')}>
                        <Text style={[tailwind('text-sm font-medium opacity-60'),styles.textBlack]}>Popular Products</Text>
                        <Text style={tailwind('text-sm text-black opacity-40')}>View All</Text>
                    </View>
                    <PopularProductCarousel navigation={navigation}/>
                </View>
                <View style={tailwind('mt-8')}>
                    <View style={tailwind('flex flex-row justify-between items-center mb-5')}>
                        <Text style={[tailwind('text-sm font-medium opacity-60'),styles.textBlack]}>Recommendations for you</Text>
                        <Text style={tailwind('text-sm text-black opacity-40')}>View All</Text>
                    </View>
                    <RecommmProductCarousel />
                </View>
                <BottomMenu  navigation={navigation} />
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
  textBlack: {
    color: '#1F2123',
  },
  textOrange: {
    color: '#FF7324',
  },
  bgBlack: {
    backgroundColor: '#1F2123',
  },
});

















// <Category source={require('../assets/chair.png')} name={'Chairs'} />
// <PopularProduct source={require('../assets/sofa.png')} name={'Execute Sofa Chair'} price={'$12.4'} ratings={'5.0'} />
{/* <Recommendation source={require('../assets/chair.png')} name={'Chairs'} price={'$12.4'} ratings={'5.0'} /> */}
                    