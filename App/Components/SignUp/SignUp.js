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
import { Input, Button, Spinner, Item } from "native-base";
const { width, height, scale, fontScale } = Dimensions.get("window");
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { signUpFunc } from "../../Store/Actions/AuthAction";
import { connect } from "react-redux";
import validator from "validator";
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loading: false,
      confirmPassword: "",
      name: ""
    };
  }
  static navigationOptions = {
    header: null
  };
  replaceScreen = route => {
    this.props.navigation.dispatch({
      type: "ReplaceCurrentScreen",
      key: `${route}`,
      routeName: `${route}`
    });
  };

  signUp = () => {
    const { email, password, confirmPassword, name } = this.state;
    console.log(this.state)
    if (!validator.isEmail(email)) {
      ToastAndroid.show("Please fill the email correctly", ToastAndroid.SHORT);
      return;
    } else if (password.toString().length < 8) {
      ToastAndroid.show("Password must be of 8 characters", ToastAndroid.SHORT);
      return;
    } else if (password !== confirmPassword) {
      ToastAndroid.show("Password mismatch", ToastAndroid.SHORT);
      return;
    } else if (!name || name.toString().length < 3) {
      ToastAndroid.show("please fill the name correctly", ToastAndroid.SHORT);
      return;
    }

    console.log(this.state)
    this.props.signUpAction(this.state, this.props.navigation);
  };

  _onPress = () => {
    this.props.navigation.navigate('signIn')
  }
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
          <View style={{ flex: 0.5, }}>
            <View style={{ flex: 0.7, justifyContent: 'center', alignItems: 'center' }}>
              <Image
                source={require('../../../assets/logoB.png')}
                style={{ width: width/2, height: height / 2 }}
                resizeMode='contain'
              />
            </View>
            <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'flex-start' }}>
              <Text style={{ fontSize: width / 36, textAlign: 'center', color: '#24516e' }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </Text>
            </View>
          </View>
          <View style={{ flex: 0.1, flexDirection: 'row' }}>
            <TouchableOpacity
              style={{ flex: 0.5, backgroundColor: '#05527c', justifyContent: 'center' }}
              onPress={this._onPress}>
              <Text style={{ textAlign: 'center',color:'#fff' }}>
                LOGIN
</Text>

            </TouchableOpacity>
            <TouchableOpacity
              style={{ flex: 0.5, backgroundColor: '#05527c', justifyContent: 'center' }}
              onPress={() => this.props.navigation.navigate('signUp')}>
              <Text style={{ textAlign: 'center', color:'#fff'}}>
                REGISTER
</Text>

            </TouchableOpacity>
          </View>
          <View style={{ flex: 0.4, backgroundColor: '#eeeeee', justifyContent: 'space-between', alignItems: 'center' }}>
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
                placeholder={"Username"}
                placeholder="Username"
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
              <MaterialCommunityIcons name="email" size={25} color="#24516e" />
              <Input
                placeholderTextColor={"#24516e"}
                placeholder={"Email"}
                placeholder="Email"
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
              <MaterialCommunityIcons name="lock-question" size={25} color="#24516e" />
              <Input
                placeholderTextColor={"#24516e"}
                placeholder={"Password"}
                placeholder="Password"
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
              <MaterialCommunityIcons name="lock-question" size={25} color="#24516e" />
              <Input
                placeholderTextColor={"#24516e"}
                placeholder={"Confirm Password"}
                placeholder="Confirm Password"
                style={{ color: "#24516e" }}
                secureTextEntry
                onChangeText={confirmPassword => this.setState({ confirmPassword })}
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
                onPress={this.signUp}
              >
                <Text style={{ color: "#fff" }}>SIGN UP</Text>
              </Button>
            </View>
          </View>
          {
            this.props.isProgress ? <Spinner /> : null
          }
        </View>

      </ScrollView>
    );

  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    isProgress: state.authReducer.isProgress
  };
}
function mapDispatchToProps(dispatch) {
  return {
    signUpAction: (obj, path) => dispatch(signUpFunc(obj, path))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);

