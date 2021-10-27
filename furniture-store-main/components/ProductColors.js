import React from 'react';
import { View, Pressable } from 'react-native';
import tailwind from 'tailwind-rn';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import firebase from "firebase";
    
function selectColor(color) {
    firebase
      .database().ref('furnitures/1/activeColor/').set({
        activeColor: color,
      });
}

export default function ProductColors(props) {

    const {data} = props;
    const activeColor = data.activeColor;
    const colors = data.colors;
    const furnitureColors = [];
    for (const color in colors) {
            furnitureColors.push(
                <Pressable
                    onPress={() => {selectColor(colors[color])}}
                    >
                    <View style={tailwind(`p-1 mr-2 rounded-full ${colors[color] === activeColor.activeColor ? "bg-white":""}`)} >
                        <FontAwesomeIcon style={tailwind(`text-${colors[color]}-500 w-6 h-6`)} icon={ faCircle } />
                    </View>
                </Pressable>
            )
    }
    
    return (
        <View style={tailwind('flex flex-row items-center mt-4')}>
            {furnitureColors}
        </View>
    );
};