import React from 'react';
import firebase from "firebase";

export const data = [
    {
        source: require('../assets/chair.png'),
        name: "Chairs",
        price: '$12.4',
        ratings: '5.0'
    }
]

export default function GetFurnitures ( type ) {

    const [mydata, setmydata] = React.useState(data);

    React.useEffect(() => {
        if (type === 'categories'){
            firebase.database().ref('Categories/').on('value', (snapshot) => {
                setmydata(snapshot.val()); 
            });
        } else if (type === 'product'){
            firebase.database().ref('furnitures/1/').on('value', (snapshot) => {
                setmydata(snapshot.val()); 
            });
        }
        else {
            firebase.database().ref('furnitures/').on('value', (snapshot) => {
                setmydata(snapshot.val()); 
            });
        }
    }, []);


    var data_array = Object.entries(mydata);
    var data_set = [];

    if ( type === 'popular' ) {

        data_array.forEach( (item) => {
            item.shift();
            if (item[0].popular === 'yes') {
                data_set.push(item[0]);
            }
        });

        return data_set;
    }

    if ( type === 'recommended' ) {

        data_array.forEach( (item) => {
            item.shift();
            if (item[0].recommended === 'yes') {
                data_set.push(item[0]);
            }
        });
        
        return data_set;
    }

    if ( type === 'categories' ) {

        var data_array = Object.entries(mydata);
        var data_set = [];
        data_array.forEach( (item) => {
            item.shift();
            data_set.push(item[0]);
        });
        
        return data_set;
    }

    if ( type === 'product' ) {
        
        return mydata;
    }

};
