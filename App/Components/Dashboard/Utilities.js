import React, { Component } from 'react';
import { View, ScrollView, Dimensions, Text, Image } from 'react-native';
const { width, height } = Dimensions.get("window");
import { Card, CardItem, Body, Icon } from 'native-base';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export default class Utilities extends Component {
    static navigationOptions = {
        title: 'Utilities',
        headerStyle: {
            backgroundColor: "#8b6e4b",
        },
        headerTintColor: '#fff',
        headerTitleStyle: { alignSelf: 'center', textAlign: "center", flex: 1, marginLeft: -10 },


    }
    render() {
        return (
            <ScrollView
                contentContainerStyle={{
                    // height: height,
                    width,
                    backgroundColor: "#eee"
                }}
                keyboardDismissMode="interactive"
                keyboardShouldPersistTaps="handled"
            >
                <View style={{ flex: 1, backgroundColor: "#eee" }}>

                    <Card style={{ flex: 0.3, }}>

                        <CardItem header bordered style={{ flex: 0.1, backgroundColor: '#282828' }}>
                            <MaterialCommunityIcons name="flash" size={25} color="#fff" />
                            <Text style={{ textAlign: 'center', fontSize: width / 20, color: "#fff" }}>
                                Electricity
            </Text>
                        </CardItem>
                        <CardItem bordered style={{ flex: 0.8, padding: width / 36 }}>
                            <Body>
                                <Text style={{ fontSize: width / 24 }}>
                                    Customer ID: xxxxxxxx
            </Text>
                                <Text style={{ fontSize: width / 24 }}>
                                    Account No: xxxxxxxxxxx
            </Text>
                                <Text style={{ fontSize: width / 24 }}>
                                    Billing Month: May
            </Text>
                                <Text style={{ fontSize: width / 24 }}>
                                    Previous reading: 1000 unit
            </Text>
                                <Text style={{ fontSize: width / 24 }}>
                                    Present reading: 300 unit
            </Text>
                                <Text style={{ fontSize: width / 24 }}>
                                    Total unint consume this month: 400 unit
            </Text>
                                <Text style={{ fontSize: width / 24 }}>
                                    Due Date: 9/2/2019
            </Text>
                                <Text style={{ fontSize: width / 24 }}>
                                    Amount within due date: 50000 rs
            </Text>
                                <Text style={{ fontSize: width / 24 }}>
                                    Amount After due date: 55000 rs
            </Text>
                            </Body>
                        </CardItem>
                        <CardItem style={{ flex: 0.1, backgroundColor: '#d6d6d6' }} button onPress={() => this.props.navigation.navigate('payment')}>
                            <Image
                                source={require("../../../assets/riyal.png")}
                                style={{
                                    width: width / 8,
                                    // height,
                                    height:height/28,

                                    // marginTop: 20,
                                    resizeMode: "contain"
                                    // color:'rgba(208, 164, 135, 1)'
                                }}
                            />
                            {/* <Icon active name="cash" style={{ color: '#282828' }} /> */}
                            <Text style={{ color: '#282828',marginLeft:5 }}>
                                Pay now
</Text>
                        </CardItem>
                        {/* <View></View> */}

                    </Card>

                    <Card style={{ flex: 0.3, }}>

                        <CardItem header bordered style={{ flex: 0.1, backgroundColor: "#282828" }}>
                            <MaterialCommunityIcons name="gas-cylinder" size={25} color="#fff" />

                            <Text style={{ textAlign: 'center', fontSize: width / 20, color: "#fff" }}>
                                Gas
</Text>
                        </CardItem>
                        <CardItem bordered style={{ flex: 0.8, padding: width / 36 }}>
                            <Body>
                                <Text style={{ fontSize: width / 24 }}>
                                    Customer ID: xxxxxxxx
</Text>
                                <Text style={{ fontSize: width / 24 }}>
                                    Account No: xxxxxxxxxxx
</Text>
                                <Text style={{ fontSize: width / 24 }}>
                                    Billing month: May
</Text>
                                <Text style={{ fontSize: width / 24 }}>
                                    Previous reading : 2000 unit
</Text>
                                <Text style={{ fontSize: width / 24 }}>
                                    Present reading: 200 unit
</Text>
                                <Text style={{ fontSize: width / 24 }}>
                                    Total unint consume this month: 400 unit
</Text>
                            </Body>
                        </CardItem>
                        <CardItem style={{ flex: 0.1, backgroundColor: '#d6d6d6' }} button onPress={() => this.props.navigation.navigate('payment')}>
                            <Image
                                source={require("../../../assets/riyal.png")}
                                style={{
                                    width: width / 8,
                                    // height,
                                    height:height/28,

                                    // marginTop: 20,
                                    resizeMode: "contain"
                                    // color:'rgba(208, 164, 135, 1)'
                                }}
                            />
                            {/* <Icon active name="cash" style={{ color: '#282828' }} /> */}
                            <Text style={{ color: '#282828',marginLeft:5 }}>
                                Pay now
</Text>
                        </CardItem>

                    </Card>
                    <Card style={{ flex: 0.3, }}>

                        <CardItem header bordered style={{ flex: 0.1, backgroundColor: '#282828' }}>
                            <MaterialCommunityIcons name="water" size={25} color="#fff" />
                            <Text style={{ textAlign: 'center', fontSize: width / 20, color: "#fff" }}>
                                Water
</Text>
                        </CardItem>
                        <CardItem bordered style={{ flex: 0.8, padding: width / 36 }}>
                            <Body>
                                <Text style={{ fontSize: width / 24 }}>
                                    Customer ID: xxxxxxxx
</Text>
                                <Text style={{ fontSize: width / 24 }}>
                                    Account No: xxxxxxxxxxx
</Text>
                                <Text style={{ fontSize: width / 24 }}>
                                    Billing Month: May
</Text>
                                <Text style={{ fontSize: width / 24 }}>
                                    Due Date: 5/9/2019
</Text>
                                <Text style={{ fontSize: width / 24 }}>
                                    Amount within due date: 30000 rs
</Text>
                                <Text style={{ fontSize: width / 24 }}>
                                    Amount After due date: 35000 rs
</Text>
                            </Body>
                        </CardItem>
                        <CardItem style={{ flex: 0.1, backgroundColor: '#d6d6d6' }} button onPress={() => this.props.navigation.navigate('payment')}>
                            <Image
                                source={require("../../../assets/riyal.png")}
                                style={{
                                    width: width / 8,
                                    // height,
                                    height:height/28,

                                    // marginTop: 20,
                                    resizeMode: "contain"
                                    // color:'rgba(208, 164, 135, 1)'
                                }}
                            />
                            {/* <Icon active name="cash" style={{ color: '#282828' }} /> */}
                            <Text style={{ color: '#282828',marginLeft:5 }}>
                                Pay now
</Text>
                        </CardItem>

                    </Card>
                    <Card style={{ flex: 0.3, }}>

                        <CardItem header bordered style={{ flex: 0.1, backgroundColor: '#282828' }}>
                            <MaterialCommunityIcons name="domain" size={25} color="#fff" />
                            <Text style={{ textAlign: 'center', fontSize: width / 20, color: '#fff' }}>
                                Maintenance
</Text>
                        </CardItem>
                        <CardItem bordered style={{ flex: 0.8, padding: width / 36 }}>
                            <Body>
                                <Text style={{ fontSize: width / 24 }}>
                                    Customer ID: xxxxxxxx
</Text>
                                <Text style={{ fontSize: width / 24 }}>
                                    Account No: xxxxxxxxxxx
</Text>
                                <Text style={{ fontSize: width / 24 }}>
                                    Amount: 50000rs
</Text>
                                <Text style={{ fontSize: width / 24 }}>
                                    Due Date: 5/11/2019
</Text>
                                <Text style={{ fontSize: width / 24 }}>
                                    Amount within due date: 50000 rs
</Text>
                                <Text style={{ fontSize: width / 24 }}>
                                    Amount After due date: 55000 rs
</Text>
                            </Body>
                        </CardItem>
                        <CardItem style={{ flex: 0.1, backgroundColor: '#d6d6d6' }} button onPress={() => this.props.navigation.navigate('payment')}>
                            <Image
                                source={require("../../../assets/riyal.png")}
                                style={{
                                    width: width / 8,
                                    // height,
                                    height:height/28,

                                    // marginTop: 20,
                                    resizeMode: "contain"
                                    // color:'rgba(208, 164, 135, 1)'
                                }}
                            />
                            {/* <Icon active name="cash" style={{ color: '#282828' }} /> */}
                            <Text style={{ color: '#282828',marginLeft:5 }}>
                                Pay now
</Text>
                        </CardItem>

                    </Card>
                    <Card style={{ flex: 0.3, }}>

                        <CardItem header bordered style={{ flex: 0.1, backgroundColor: '#282828' }}>
                            <MaterialCommunityIcons name="phone" size={25} color="#fff" />
                            <Text style={{ textAlign: 'center', fontSize: width / 20, color: "#fff" }}>
                                Telephone/Internet/TV
</Text>
                        </CardItem>
                        <CardItem bordered style={{ flex: 0.8, padding: width / 36 }}>
                            <Body>
                                <Text style={{ fontSize: width / 24 }}>
                                    Customer ID: xxxxxxxx
</Text>
                                <Text style={{ fontSize: width / 24 }}>
                                    Account No: xxxxxxxxxxx
</Text>
                                <Text style={{ fontSize: width / 24 }}>
                                    Billing Month: May
</Text>
                                <Text style={{ fontSize: width / 24 }}>
                                    Due Date: 5/11/2019
</Text>
                                <Text style={{ fontSize: width / 24 }}>
                                    Amount within due date: 23000 rs
</Text>
                                <Text style={{ fontSize: width / 24 }}>
                                    Amount After due date: 25000 rs
</Text>
                            </Body>
                        </CardItem>
                        <CardItem style={{ flex: 0.1, backgroundColor: '#d6d6d6' }} button onPress={() => this.props.navigation.navigate('payment')}>
                            <Image
                                source={require("../../../assets/riyal.png")}
                                style={{
                                    width: width / 8,
                                    height:height/28,
                                    // marginTop: 20,
                                    resizeMode: "contain"
                                    // color:'rgba(208, 164, 135, 1)'
                                }}
                            />
                            {/* <Icon active name="cash" style={{ color: '#282828' }} /> */}
                            <Text style={{ color: '#282828',marginLeft:5 }}>
                                Pay now
</Text>
                        </CardItem>
                    </Card>


                </View>
            </ScrollView>
        )
    }
}