import React, { Component } from 'react';
import { View, ScrollView, Dimensions, Text } from 'react-native';
const { width, height } = Dimensions.get("window");
export default class Utilities extends Component {
    static navigationOptions = {
        title: 'Utilities',
        headerStyle: {
            backgroundColor: "#fff",
        },
        headerTintColor: '#05527c',
        headerTitleStyle: { alignSelf: 'center', textAlign: "center", flex: 1, marginLeft: -10 },


    }
    render() {
        return (
            <ScrollView
                contentContainerStyle={{
                    height: height,
                    width,
                    backgroundColor: "#eee"
                }}
                keyboardDismissMode="interactive"
                keyboardShouldPersistTaps="handled"
            >
                <View style={{ flex: 1, backgroundColor: "#eee" }}>
                    <View style={{ flex: 0.2, }}>
                        <View style={{ flex: 0.2 }}>
                        </View>
                        <View style={{ flex: 0.3 }}>
                            <Text style={{ textAlign: 'center', fontSize: width / 16 }}>
                                Electricity Invoice
            </Text>
                        </View>
                        <View style={{ flex: 0.5, padding: width / 36 }}>

                            <Text style={{ fontSize: width / 24 }}>
                                Name: Muhammad Ammar Ashfaq
            </Text>
                            <Text style={{ fontSize: width / 24 }}>
                                Phone Number: 03412828273
            </Text>
                            <Text style={{ fontSize: width / 24 }}>
                                Email: ammarashfaq1994@gmail.com
            </Text>
                            <Text style={{ fontSize: width / 24 }}>
                                Account No: xxxxxx222222
            </Text>

                        </View>
                    </View>
                    <View style={{ flex: 0.2 }}>
                        <View style={{ flex: 0.2 }}>
                        </View>
                        <View style={{ flex: 0.3 }}>
                            <Text style={{ textAlign: 'center', fontSize: width / 16 }}>
                                Gas Invoice
            </Text>
                        </View>
                        <View style={{ flex: 0.5, padding: width / 36 }}>

                            <Text style={{ fontSize: width / 24 }}>
                                Installment No: xxxxxxx
            </Text>
                            <Text style={{ fontSize: width / 24 }}>
                                Installment Due Date: 12/3/2019
            </Text>
                            <Text style={{ fontSize: width / 24 }}>
                                Installment Date: 12/3/2019
            </Text>
                            <Text style={{ fontSize: width / 24 }}>
                                Installment Paid: 30000rs
            </Text>


                        </View>
                    </View>
                    <View style={{ flex: 0.2 }}>
                        <View style={{ flex: 0.2 }}>
                        </View>
                        <View style={{ flex: 0.3 }}>
                            <Text style={{ textAlign: 'center', fontSize: width / 16 }}>
                                Water Invoice
            </Text>
                        </View>
                        <View style={{ flex: 0.5, padding: width / 36 }}>

                            <Text style={{ fontSize: width / 24 }}>
                                Installment No: xxxxxxx
            </Text>
                            <Text style={{ fontSize: width / 24 }}>
                                Installment Due Date: 12/3/2019
            </Text>
                            <Text style={{ fontSize: width / 24 }}>
                                Installment Date: 12/3/2019
            </Text>
                            <Text style={{ fontSize: width / 24 }}>
                                Installment Paid: 30000rs
            </Text>


                        </View>
                    </View>
                    <View style={{ flex: 0.2 }}>
                        <View style={{ flex: 0.2 }}>
                        </View>
                        <View style={{ flex: 0.3 }}>
                            <Text style={{ textAlign: 'center', fontSize: width / 16 }}>
                                Maintenance Invoice
            </Text>
                        </View>
                        <View style={{ flex: 0.5, padding: width / 36 }}>

                            <Text style={{ fontSize: width / 24 }}>
                                Installment No: xxxxxxx
            </Text>
                            <Text style={{ fontSize: width / 24 }}>
                                Installment Due Date: 12/3/2019
            </Text>
                            <Text style={{ fontSize: width / 24 }}>
                                Installment Date: 12/3/2019
            </Text>
                            <Text style={{ fontSize: width / 24 }}>
                                Installment Paid: 30000rs
            </Text>


                        </View>
                    </View>

                </View>
            </ScrollView>
        )
    }
}