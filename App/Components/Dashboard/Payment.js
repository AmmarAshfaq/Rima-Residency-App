import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Dimensions, Image, TouchableOpacity, ToastAndroid, AsyncStorage } from 'react-native';
import { Input, Button, Spinner, Thumbnail } from "native-base";
const { height, width } = Dimensions.get('window');
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


class Payments extends Component {
    static navigationOptions = {
        title: 'Pay Now',
        headerStyle: {
            backgroundColor: "#8b6e4b",
        },
        headerTintColor: '#fff',
        headerTitleStyle: { alignSelf: 'center', textAlign: "center", flex: 1, marginLeft: -10, color: '#fff' },


    }
    submit = () => {
        ToastAndroid.show('Thank You, your payment has been processed.', ToastAndroid.SHORT);
        this.props.navigation.navigate('dashBoard')
    }
    render() {
        return (
            <ScrollView contentContainerStyle={{ height: height - 80, width, backgroundColor: "#eeeeee" }} keyboardDismissMode="interactive" keyboardShouldPersistTaps="handled" >
                <View style={{ flex: 1, padding: width / 20, justifyContent: "space-around" }}>
                    <View style={{ flex: 0.3, justifyContent: "center", alignItems: "center", backfaceVisibility: '#e9ebee' }}>

                        <View style={{ flex: 0.2, justifyContent: "center", alignItems: "center" }} >
                            <Text style={{ fontSize: width / 20, fontWeight: 'bold' }} >
                                Customer Account No: xxxxxxxx
                   </Text>
                        </View>
                        <View style={{ flex: 0.2, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ fontSize: width / 24, fontWeight: 'bold' }}>
                                Payment Against: Electricity
                         </Text>
                        </View>
                        <View style={{ flex: 0.4, justifyContent: "center", alignItems: "center" }}>

                            <Text style={{ fontSize: width / 20, fontWeight: 'bold' }}>
                                Amount: 150000 rs
</Text>

                        </View>
                    </View>
                    <View style={{ flex: 0.6, backgroundColor: '#f5f6f7', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View
                            style={{
                                flex: 0.2,
                                flexDirection: "row",
                                alignItems: "center",
                                borderColor: "#fff",
                                borderWidth: 1,
                                backgroundColor: "#fff",
                                height: width / 18,
                                margin: width / 36
                            }}
                        >
                            <MaterialCommunityIcons name="credit-card" size={25} color="#24516e" />
                            <Input
                                placeholderTextColor={"#24516e"}
                                placeholder={"Card Number"}
                                placeholder="Card Number"
                                style={{ color: "#24516e" }}
                                keyboardType={"email-address"}
                                onChangeText={name => this.setState({ name })}
                            />
                        </View>
                        <View
                            style={{
                                flex: 0.2,
                                flexDirection: "row",
                                alignItems: "center",
                                borderColor: "#fff",
                                borderWidth: 1,
                                backgroundColor: "#fff",
                                height: width / 18,
                                margin: width / 36
                            }}
                        >
                            <MaterialCommunityIcons name="calendar" size={25} color="#24516e" />
                            <Input
                                placeholderTextColor={"#24516e"}
                                placeholder={"MM / YY"}
                                placeholder="MM / YY"
                                style={{ color: "#24516e" }}
                                keyboardType={"email-address"}
                                onChangeText={email => this.setState({ email })}
                            />
                        </View>
                        <View
                            style={{
                                flex: 0.2,
                                flexDirection: "row",
                                alignItems: "center",
                                borderColor: "#fff",
                                borderWidth: 1,
                                backgroundColor: "#fff",
                                height: width / 18,
                                margin: width / 36
                            }}
                        >
                            <MaterialCommunityIcons name="lock" size={25} color="#24516e" />
                            <Input
                                placeholderTextColor={"#24516e"}
                                placeholder={"CVC"}
                                placeholder="CVC"
                                style={{ color: "#24516e" }}
                                onChangeText={password => this.setState({ password })}
                            />
                        </View>

                        <View
                            style={{
                                flex: 0.2,
                                justifyContent: "center",
                                alignItems: "center",

                            }}
                        >
                            <Button
                                style={{
                                    // marginTop: height / 10,
                                    height: width / 14,
                                    width: width * 0.9,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "#24516e",
                                    alignSelf: "center",
                                    // borderRadius: width / 12
                                }}
                                onPress={this.submit}
                            >
                                <Text style={{ color: "#fff" }}>PAY </Text>
                            </Button>
                        </View>
                    </View>


                </View>
            </ScrollView>
        )
    }
}
export default Payments;