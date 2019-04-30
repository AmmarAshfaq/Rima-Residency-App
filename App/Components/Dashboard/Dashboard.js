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
  FlatList
} from "react-native";
import firebase from 'react-native-firebase'
import { Input, Button, Picker, Icon, Drawer, Thumbnail } from "native-base";
const { width, height, scale, fontScale } = Dimensions.get("window");
import { connect } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";
import validator from "validator";
// import {signOut} from ''
const drawerDataArray = [
  {
    name: "Create Profile",
    icon: require("../../../assets/user.png"),
    route: ref => ref.props.navigation.navigate("userProfile")
  },
  {
    name: "About Us",
    icon: require("../../../assets/about-us.png"),
    route: ref => ref.props.navigation.navigate("about")
  }

  // { name: "Payment Term",  icon: require("../../assets/images/term.png"),route:(ref)=>ref.props.navigation.navigate("paymentTerm")},
];
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "DASHBOARD",
      headerLeft: (
        <TouchableOpacity onPress={navigation.getParam("openDrawer")}>
          <Ionicons
            name="md-menu"
            size={width / 10}
            color="#28678d"
            style={{ marginLeft: 10 }}
          />
        </TouchableOpacity>
      ),
      headerTitleStyle: {
        color: "#28678d",
        alignSelf: "center",
        textAlign: "center",
        flex: 1,
        marginLeft: -10
      },
      headerStyle: { backgroundColor: "#fff" }
    };
    headerRight: <View />;
  };
  openDrawer = () => {
    if (this.drawer) this.drawer._root.open();
  };
  closeDrawer = () => {
    if (this.drawer) this.drawer._root.close();
  };
  componentDidMount() {
    this.props.navigation.setParams({ openDrawer: this.openDrawer });
  }
  componentWillMount() {
    firebase.auth().onAuthStateChanged(async function (user) {
      console.log(user,"current user")
      // console.log(error)

      if (user) {
        await AsyncStorage.setItem('User', user._auth._user._user.uid)

        // ...
      } else {
        // ...
        console.log('error')
      }
    });
  }
  signOutUser = () => {
    firebase.auth().signOut().then(async () => {
      console.log('SIgn out successfull')

      await AsyncStorage.removeItem('User', (err => {
        console.log(err)
      }))
      this.props.navigation.navigate('signIn');
    }).catch((err) => {
      console.log(err)
    })
  }

  render() {
    return (
      <Drawer
        panOpenMask={20}
        panCloseMask={40}
        ref={ref => {
          this.drawer = ref;
        }}
        content={
          <View style={{ flex: 1, backgroundColor: "#05527c" }}>
            <View style={{ flex: 0.25, padding: 10 }}>
              <View style={{ alignItems: "center" }}>
                {/* <Thumbnail large source={{ uri: this.props.user.image_url }} /> */}
                <Ionicons
                  name="md-person"
                  size={width / 5}
                  color="#fff"
                  style={{ alignSelf: "center" }}
                />
              </View>

              <View style={{ marginTop: "auto" }}>
                <Text
                  style={{
                    fontFamily: "OpenSans-Bold",
                    color: "#fff",
                    fontSize: fontScale * 20,
                    textAlign: "center"
                  }}
                >
                  {/* {this.props.user && this.props.user.name}  */}
                  John Dee
                </Text>
                <Text
                  style={{
                    fontFamily: "OpenSans-Regular",
                    color: "#b85d6c",
                    fontSize: fontScale * 13,
                    textAlign: "center"
                  }}
                >
                  {/* {this.props.user && this.props.user.email}  */}
                  Business Man
                </Text>
              </View>
            </View>
            <View style={{ flex: 0.65 }}>
              <FlatList
                data={drawerDataArray}
                renderItem={({ item, index }) => (
                  <TouchableOpacity
                    onPress={() => item.route && item.route(this)}
                    activeOpacity={0.6}
                    key={index}
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 10,
                      padding: 10,
                      backgroundColor: "#069dd4"
                    }}
                  >
                    <Image
                      source={item.icon}
                      style={{
                        width: width / 12,
                        height: width / 12,
                        marginRight: 17
                      }}
                      resizeMode="contain"
                    />
                    <Text
                      style={{
                        fontFamily: "OpenSans-Regular",
                        fontSize: fontScale * 18,
                        marginRight: "auto",
                        color: "#fff"
                      }}
                    >
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
            <View style={{ flex: 0.1, marginTop: "auto" }}>
              <Button
                onPress={this.signOutUser}
                style={{
                  borderRadius: width / 9,
                  width: width * 0.4,
                  justifyContent: "center",
                  backgroundColor: "#2FCC71",
                  alignSelf: "center"
                }}
              >
                <Text style={{ color: "#fff", fontFamily: "OpenSans-Regular" }}>
                  Logout
                </Text>
              </Button>
            </View>
          </View>
        }
        onClose={() => this.closeDrawer()}
      >
        <ScrollView
          style={{ backgroundColor: "#eeeeee" }}
          contentContainerStyle={{ height: height - 80, width }}
          keyboardDismissMode="interactive"
          keyboardShouldPersistTaps="handled"
        >
          <View style={{ flex: 1, backgroundColor: "#eeeeee" }}>
            <View
              style={{
                flex: 0.4,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Image
                source={require("../../../assets/logoB.png")}
                style={{
                  width: width/2,
                  height,
                  marginTop: 20,
                  marginBottom: 20,
                  resizeMode: "contain"
                }}
              />

              {/* <Thumbnail large source={{ uri: this.props.user.image_url }} /> */}
            </View>
            <View
              style={{
                flex: 0.5,
                justifyContent: "space-around",
                backgroundColor: "#eeeeee"
              }}
            >
              <View style={{ flex: 1 / 2, flexDirection: "row" }}>
                <TouchableOpacity
                  style={{
                    width: width / 2,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                  onPress={() => {
                    this.props.navigation.navigate("properties");
                  }}
                >
                  <Image
                    source={require("../../../assets/appartment.png")}
                    style={{ width: 60, height: 60 }}
                  />
                  <Text style={{ color: "#f09291" }}>
                    Properties
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: width / 2,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                  onPress={() => {
                    this.props.navigation.navigate("account");
                  }}
                >
                  <Image
                    source={require("../../../assets/account.png")}
                    style={{ width: 60, height: 60 }}
                  />
                  <Text style={{ color: "#f09291" }}>
                    Account
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1 / 2, flexDirection: "row" }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("utilities")}
                  style={{
                    width: width / 2,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Image
                    source={require("../../../assets/utilities.png")}
                    style={{ width: 60, height: 60 }}
                  />
                  <Text style={{ color: "#f09291" }}>
                    Utilities
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("contact")}
                  style={{
                    width: width / 2,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Image
                    source={require("../../../assets/contact.png")}
                    style={{ width: 60, height: 60 }}
                  />
                  <Text style={{ color: "#f09291" }}>Contact</Text>
                </TouchableOpacity>
              </View>
             
            </View>
            <View style={{ flex: 0.1 }} />
          </View>
        </ScrollView>
      </Drawer>
    );
  }
}
