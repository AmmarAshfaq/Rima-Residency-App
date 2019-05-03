import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
  AsyncStorage,
  FlatList,
  ImageBackground
} from "react-native";
import { Input, Button, Picker, Icon, Drawer, Thumbnail } from "native-base";

const { width, height, scale, fontScale } = Dimensions.get("window");
export default class Properties extends Component {
  static navigationOptions = {
    title: "PROPERTIES",
    headerStyle: {
      backgroundColor: "#fff"
    },
    headerTintColor: "#03517b",
    headerTitleStyle: {
      color: "#03517b",
      alignSelf: "center",
      textAlign: "center",
      flex: 1,
      marginLeft: -10
    }
  };

  render() {
    return (
      <ScrollView
        style={{ backgroundColor: "rgba(52, 33, 61, 1)" }}
        contentContainerStyle={{ height: height - 80, width }}
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="handled"
      >
        <View style={{ flex: 1, }}>
          <View style={{ flex: 0.4,backgroundColor: "#eeeeee", justifyContent: "center",
                alignItems: "center", }}>
            {/* <ImageBackground
              source={require("../../../assets/Header.png")}
              style={{
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                // opacity:0.5
              }}
            > */}

              <View style={{ flex: 0.8 }}>
                <Image
                  source={require("../../../assets/logoB.png")}
                  style={{
                    width: width/2 ,
                    height: width /2,
                    // opacity:0.5
                    resizeMode: "contain"
                  }}
                />
              </View>
              <View
                style={{
                  flex: 0.2,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 20
                }}
              >
                <Text
                  style={{
                    color: "#03517b",
                    fontSize: width / 20,
                    fontWeight: "bold"
                  }}
                >
                  PROPERTIES
                </Text>
                <Text
                  style={{
                    color: "#03517b",
                    fontSize: width / 36,
                    fontWeight: "bold"
                  }}
                >
            Explore properties via clicking the icons below
                </Text>
              </View>
            

              {/* <Thumbnail large source={{ uri: this.props.user.image_url }} /> */}
            {/* </ImageBackground> */}
          </View>
          <View
            style={{
              flex: 0.5,
              justifyContent: "space-around",
              backgroundColor: "#fff"
            }}
          >
            
            <View style={{ flex: 1 / 2, flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("flat")}
                style={{
                  width: width / 2,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Image
                  source={require("../../../assets/appartment.png")}
                  style={{ width: 80, height:80 }}
                />
                <Text style={{ color: "#f09291" }}>Flat</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("flat")}
                style={{
                  width: width / 2,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Image
                  source={require("../../../assets/mansion.png")}
                  style={{ width: 80, height:80 }}
                />
                <Text style={{ color: "#f09291" }}>House</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 0.1 ,backgroundColor: "#f16564"}} />
        </View>
      </ScrollView>
    );
  }
}
