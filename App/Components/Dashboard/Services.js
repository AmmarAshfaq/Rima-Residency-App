import React, { Component } from "react";
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Dimensions,
    Image,
    TouchableOpacity,
    ToastAndroid,
    AsyncStorage
} from "react-native";
import { Input, Button, Spinner, Textarea, DatePicker, Picker, Item,Icon } from "native-base";
const { width, height, scale, fontScale } = Dimensions.get("window");
import Entypo from "react-native-vector-icons/Entypo";
import { connect } from 'react-redux';
import { signinFunc } from '../../Store/Actions/AuthAction'
import validator from "validator";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            loading: false,
            chosenDate: new Date(),
            serviceRequired:''
        };
    }
    static navigationOptions = {
        title: 'Service',
        headerStyle: {
            backgroundColor: "#8b6e4b",
        },
        headerTintColor: '#fff',
        headerTitleStyle: { alignSelf: 'center', textAlign: "center", flex: 1, marginLeft: -10, color: '#fff' },


    }
    replaceScreen = route => {
        this.props.navigation.dispatch({
            type: "ReplaceCurrentScreen",
            key: `${route}`,
            routeName: `${route}`
        });
    };
    submit = () => {
        ToastAndroid.show('Thank You', ToastAndroid.SHORT);
        this.props.navigation.navigate('dashBoard')
    };
    render() {
        return (
            <ScrollView
                contentContainerStyle={{
                    height: height,
                    width,
                    backgroundColor: "#eeeeee"
                }}
                keyboardDismissMode="interactive"
                keyboardShouldPersistTaps="handled"
            >
                <View
                    style={{
                        flex: 1,
                        padding: width / 20,
                        justifyContent: "space-around"
                    }}
                >
                    <View
                        style={{
                            flex: 0.2,
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <Image
                            source={require("../../../assets/logoB.png")}
                            style={{
                                width: width / 2,
                                height,
                                marginTop: 20,
                                resizeMode: "contain"
                                // color:'rgba(208, 164, 135, 1)'
                            }}
                        />
                    </View>
                    <View style={{ flex: 0.8, justifyContent: "space-around" }}>
                        <View
                            style={{
                                flex: 0.1,
                                flexDirection: "row",
                                alignItems: "center",
                                borderColor: "#fff",
                                borderWidth: 1,
                                backgroundColor: "#fff",
                                height: width / 18
                            }}
                        >
                            <MaterialCommunityIcons name="home" size={25} color="#24516e" />
                            <Input
                                placeholderTextColor={"#24516e"}
                                placeholder={"House No"}
                                placeholder="House No"
                                style={{ color: "#24516e" }}
                                onChangeText={email => this.setState({ email })}
                            />
                        </View>
                        <View
                            style={{
                                flex: 0.1,
                                flexDirection: "row",
                                alignItems: "center",
                                borderColor: "#fff",
                                borderWidth: 1,
                                backgroundColor: "#fff",
                                height: width / 18
                            }}
                        >
                            <MaterialCommunityIcons name="map-marker" size={25} color="#24516e" />
                            <Input
                                placeholderTextColor={"#24516e"}
                                placeholder={"Address"}
                                placeholder="Address"
                                style={{ color: "#24516e" }}
                                onChangeText={email => this.setState({ email })}
                            />
                        </View>
                        <View
                            style={{
                                flex: 0.1,
                                flexDirection: "row",
                                alignItems: "center",
                                borderColor: "#fff",
                                borderWidth: 1,
                                backgroundColor: "#fff",
                                height: width / 18
                            }}
                        >
                            <MaterialCommunityIcons name="email" size={25} color="#24516e" />
                            {/* <Input
                                placeholderTextColor={"#24516e"}
                                placeholder={"Service Required"}
                                placeholder="Service Required"
                                style={{ color: "#24516e" }}
                                keyboardType={"email-address"}
                                onChangeText={email => this.setState({ email })}
                            /> */}
                            <Item picker style={{ borderColor: "transparent" }}>
                                <Picker
                                    mode="dropdown"
                                    iosIcon={<Icon name="md-arrow-down" />}
                                    style={{ width: width / 2 }}
                                    selectedValue={
                                        this.state.country}
                                    onValueChange={
                                        event => this.setState({ country: event })
                                        // this.onInputChange(event, "country")
                                    }
                                >
                                    <Picker.Item label="Plumber" value="Plumber" />
                                    <Picker.Item label="Electrician" value="Electrician" />
                                    <Picker.Item label="House Cleaner" value="House Cleaner" />
                                    <Picker.Item label="Carpenter" value="Carpenter" />
                                </Picker>
                            </Item>
                        </View>
                        <View
                            style={{
                                flex: 0.1,
                                flexDirection: "row",
                                alignItems: "center",
                                borderColor: "#fff",
                                borderWidth: 1,
                                backgroundColor: "#fff",
                                height: width / 18
                            }}
                        >
                            <MaterialCommunityIcons name="calendar-range" size={25} color="#24516e" />
                            <DatePicker

                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Select date"
                                textStyle={{ color: "#24516e" }}
                                placeHolderTextStyle={{ color: "#24516e" }}
                                onDateChange={(newDate) => this.setState({ chosenDate: newDate })}
                                disabled={false}
                            />
                        </View>
                        <View
                            style={{
                                flex: 0.1,
                                flexDirection: "row",
                                alignItems: "center",
                                borderColor: "#fff",
                                borderWidth: 1,
                                backgroundColor: "#fff",
                                height: width / 18,

                            }}
                        >
                            <Entypo name={"phone"} size={25} color="#24516e" />
                            <Input
                                placeholderTextColor={"#24516e"}
                                placeholder={"Phone Number"}
                                placeholder="Phone Number"
                                style={{ color: "#24516e" }}
                                onChangeText={password => this.setState({ password })}
                            />
                        </View>

                        <Textarea rowSpan={5} bordered placeholder="Your Message" style={{ margin: width / 36, color: "#24516e", width: '95%', backgroundColor: "#fff" }} />
                        <View
                            style={{
                                flex: 0.1,
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
                                    backgroundColor: "#05527c",
                                    alignSelf: "center",
                                    // borderRadius: width / 12
                                }}
                                onPress={this.submit}
                            >
                                <Text style={{ color: "#fff" }}>Submit</Text>
                            </Button>
                        </View>



                    </View>

                </View>
            </ScrollView>
        );
    }
}

function mapStateToProps(state) {
    return {

    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Services)