import React, { Component } from 'react';
import { View } from 'react-native';
export default class Account extends Component {
    static navigationOptions ={
        title:'Account Details',
        headerStyle:{
            backgroundColor:"#353b48",
        },
        headerTintColor:'#fff',
        headerTitleStyle: { alignSelf: 'center' , textAlign:"center",flex:1,marginLeft:-10 },
        

    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#272727" }}>

            </View>
        )
    }
}