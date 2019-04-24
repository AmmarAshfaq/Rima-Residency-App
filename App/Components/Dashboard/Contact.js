import React, { Component } from "react";
import { View, ScrollView, Dimensions, Image, Text } from "react-native";
const { width, height } = Dimensions.get("window");
import { Input, Textarea, Button, Form } from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default class Contact extends Component {
  static navigationOptions = {
    title: "CONTACT US",
    headerStyle: {
      backgroundColor: "#fff"
    },
    headerTintColor: "#28678d",
    headerTitleStyle: {
      alignSelf: "center",
      textAlign: "center",
      flex: 1,
      marginLeft: -10
    }
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
        <View style={{ flex: 1 }}>
          <View
            style={{
              flex: 0.2,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              source={require("../../../assets/logoB.jpg")}
              style={{
                width: width / 2,
                height: width,
                marginTop: 20,
                // resizeMode: "contain"
                // color:'rgba(208, 164, 135, 1)'
              }}
            />
          </View>
          <View
            style={{
              flex: 0.2,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={{ textAlign: 'center' }}>
              Your feedback is important to us and give us valuable {"\n"}
              insight to continuously improve and serve you better. {"\n"}
              For suggestions and feedback,fill the form below.
             </Text>
          </View>
          <View style={{ flex: 0.6, backgroundColor: '#eeeeee', justifyContent: 'space-between', alignItems: 'center' }}>
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
              <MaterialCommunityIcons name="account" size={25} color="#24516e" />
              <Input
                placeholderTextColor={"#24516e"}
                placeholder={"Full Name"}
                placeholder="Full Name"
                style={{ color: "#24516e" }}
                // keyboardType={"email-address"}
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
              <MaterialCommunityIcons name="email" size={25} color="#24516e" />
              <Input
                placeholderTextColor={"#24516e"}
                placeholder={"Your Email"}
                placeholder="Your Email"
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
              <MaterialCommunityIcons name="phone" size={25} color="#24516e" />
              <Input
                placeholderTextColor={"#24516e"}
                placeholder={"Contact No"}
                placeholder="Contact No"
                style={{ color: "#24516e" }}
                onChangeText={password => this.setState({ password })}
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
              <MaterialCommunityIcons name="pencil" size={25} color="#24516e" />
              <Input
                placeholderTextColor={"#24516e"}
                placeholder={"Subject"}
                placeholder="Subject"
                style={{ color: "#24516e" }}
                // secureTextEntry
                onChangeText={confirmPassword => this.setState({ confirmPassword })}
              />
            </View>
            {/* <View style={{marginRight:5}}> */}

            <Textarea rowSpan={5} bordered placeholder="Your Message" style={{ margin: width / 36, color: "#24516e", width: width, backgroundColor: "#fff" }} />

            {/* </View> */}


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
                onPress={this.signUp}
              >
                <Text style={{ color: "#fff" }}>SEND MESSAGE</Text>
              </Button>
            </View>
          </View>
          {/* <View style={{ flex: 0.4 }}>
            <Text>Get In Touch</Text>
          </View> */}
        </View>
      </ScrollView>
    );
  }
}
