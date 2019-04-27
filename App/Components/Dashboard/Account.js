import React, { Component } from 'react';
import { View } from 'react-native';
export default class Account extends Component {
    static navigationOptions ={
        title:'Account Details',
        headerStyle:{
            backgroundColor:"#fff",
        },
        headerTintColor:'#05527c',
        headerTitleStyle: { alignSelf: 'center' , textAlign:"center",flex:1,marginLeft:-10 },
        

    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#eee" }}>

            </View>
        )
    }
}