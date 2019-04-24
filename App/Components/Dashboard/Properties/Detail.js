import React, { Component } from "react";
import { Dimensions, ScrollView, Image, Text, View } from "react-native";
import { Card, CardItem, DeckSwiper, Left, Right, Button } from "native-base";

const { height, width } = Dimensions.get("window");
export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: {
        url: [
          {
            image: "https://tfc-sharetribe-files-prod.s3.amazonaws.com/images/listing_images/images/3019/original/dsc_0402.jpg"
          },
          {
            image: "http://www.maxviewrealty.com/img/2017-02-28/times-square-shanghai-apartment-rental-707*471-12403.jpg"
          },
          {
            image: "http://www.besteventrentals.net/images/stories/virtuemart/product/5-square-table-rental.jpg"
          },
          {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJrKcAFxo2PAsnrxE_nt9Bc-47andj6pbxociiId5lQIoVt5TD"
          },
          {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFHfk67op0P-ACeScc4j1UsiEBOzSJca1ACGPb67BoSqz7zDH4"
          },
          { image: "http://midtwn.com/wp-content/uploads/2014/05/photo-1.jpg" }
        ],
        price: " 2 lACS",
        location: "DHA Defence, Karachi, Sindh",
        purpose: "For Rent",
        area: "8.9 Marla",
        bath: "-",
        bedroom: "-",
        added: "18 hours ago",
        description:
          "Defence Phase VI 920 Square Feet office For Rent very prime location fully tiled flooring one hall one b"
      }
    };
  }

  static navigationOptions = {
    title: "RETAL SQUARE",
    headerStyle: {
      backgroundColor: "#fff"
    },
    headerTintColor: "#05527c",
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
          backgroundColor: "#eee"
        }}
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="handled"
      >
        <View style={{ flex: 1 }}>
          <View style={{ flex: 0.3 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                padding: 5
              }}
            >
              <View
                style={{
                  width: width / 2,
                  alignItems: "flex-start",
                  paddingLeft: width / 36
                }}
              >
                <Text style={{ color: "#000", fontSize: width / 32 }}>
                  {this.state.selectValue.location}
                </Text>
              </View>
              <View
                style={{
                  width: width / 2,
                  alignItems: "flex-end",
                  paddingRight: width / 36
                }}
              >
                <Text style={{ color: "#000", fontSize: width / 32 }}>
                  Added {this.state.selectValue.added}
                </Text>
              </View>
            </View>
            <DeckSwiper
              dataSource={this.state.selectValue.url}
              // style={{}}
              renderItem={item => (
                <Card
                  style={{
                    elevation: 3,
                    height: height / 4,
                    backgroundColor: "orange"
                  }}
                >
                  <CardItem cardBody>
                    <Image
                      source={{ uri: item.image }}
                      style={{ width: width, height: height / 4 }}
                    />
                  </CardItem>
                </Card>
              )}
            />
          </View>
          <View style={{ flex: 0.6 }}>
            <View
              style={{
                flex: 0.1,
                flexDirection: "row",
                justifyContent: "center",
                // marginTop: width / 16,
                backgroundColor: "#05527c",
                paddingTop: width / 36,
                paddingBottom: width / 26
              }}
            >
              <View
                style={{
                  width: width / 2,
                  alignItems: "flex-start",
                  paddingLeft: width / 36
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: width / 22,
                    fontWeight: "bold"
                  }}
                >
                  RENTAL SQUARE
                </Text>
              </View>
              <View
                style={{
                  width: width / 2,
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  paddingRight: width / 36
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: width / 26,
                    height: height / 20
                  }}
                >
                  PKR
                </Text>
                <Text
                  style={{
                    color: "#fff",
                    fontSize: width / 22,
                    height: height / 20
                  }}
                >
                  {this.state.selectValue.price}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                flex: 0.4,
                marginBottom: width / 36
              }}
            >
              <View style={{ flex: 0.5, justifyContent: "space-between" }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: width / 20,
                    borderColor: "#fff",
                    borderBottomWidth: 0.3,
                    borderRightWidth: 0.3,
                    borderTopWidth: 0.3,
                    paddingTop: width / 20,
                    paddingBottom: width / 20
                  }}
                >
                  <Image
                    source={require("../../../../assets/bed.png")}
                    resizeMode="contain"
                    style={{ width: width / 8, height: height / 16 }}
                  />
                  <View
                    style={{ marginLeft: width / 36, alignItems: "flex-end" }}
                  >
                    <Text style={{ color: "#000" }}>Beds</Text>
                    <Text style={{ color: "#eaa8a9" }}>03</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    borderColor: "#fff",
                    borderBottomWidth: 0.3,
                    paddingTop: width / 20,
                    borderRightWidth: 0.3,
                    paddingBottom: width / 20
                  }}
                >
                  <Image
                    source={require("../../../../assets/parking.png")}
                    resizeMode="contain"
                    style={{ width: width / 8, height: height / 16 }}
                  />
                  <View
                    style={{ marginLeft: width / 36, alignItems: "flex-end" }}
                  >
                    <Text style={{ color: "#000" }}>Parking</Text>
                    <Text style={{ color: "#eaa8a9" }}>02</Text>
                  </View>
                </View>
              </View>
              <View style={{ flex: 0.5, justifyContent: "space-between" }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: width / 20,
                    borderColor: "#fff",
                    borderBottomWidth: 0.3,
                    borderTopWidth: 0.3,
                    paddingTop: width / 20,
                    paddingBottom: width / 20
                  }}
                >
                  <Image
                    source={require("../../../../assets/bathtub.png")}
                    resizeMode="contain"
                    style={{ width: width / 8, height: height / 16 }}
                  />
                  <View
                    style={{ marginLeft: width / 36, alignItems: "flex-end" }}
                  >
                    <Text style={{ color: "#000" }}>Baths</Text>
                    <Text style={{ color: "#eaa8a9" }}>03</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    borderColor: "#fff",
                    borderBottomWidth: 0.3,
                    paddingTop: width / 20,
                    paddingBottom: width / 20
                  }}
                >
                  <Image
                    source={require("../../../../assets/dimensions.png")}
                    resizeMode="contain"
                    style={{ width: width / 10, height: height / 16 }}
                  />
                  <View
                    style={{ marginLeft: width / 36, alignItems: "flex-end" }}
                  >
                    <Text style={{ color: "#000" }}>Sqft</Text>
                    <Text style={{ color: "#eaa8a9" }}>2,890</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{ flex: 0.2, marginTop: width / 8, padding: 20 }}>
              <Text
                style={{
                  fontSize: width / 20,
                  fontWeight: "bold",
                  color: "#d1a588",
                  padding: 5,
                  marginTop: width / 10
                }}
              >
                About Project
              </Text>
              <Text style={{ color: "#000", fontSize: width / 36 }}>
                Lorem ipsum dolor sit amet, ei vix prima affert lobortis, et
                eius debet per. Modo laudem gloriatur quo ut. No oblique
                epicurei sea, vis movet laboramus sadipscing ad, quo at alia
                ferri. Graeci numquam eum ad, ei duo zril docendi forensibus,
                pro vivendo voluptua torquatos ad. Quot erat nec no, placerat
                perpetua no has, graece viderer inciderint ei sed.
              </Text>
              <Text
                style={{
                  fontSize: width / 32,
                  fontWeight: "bold",
                  color: "#000",
                  padding: 5
                }}
              >
                Retal Square,DHA Phase 6,Karachi Pakistan
              </Text>
            </View>
            <View
              style={{
                flex: 0.3,
                marginTop: width / 4,
                paddingTop: width / 10
              }}
            >
              <View style={{ flexDirection: "row", paddingLeft: width / 10 }}>
                <View>
                  <Image
                    source={require("../../../../assets/bathtub.png")}
                    resizeMode="contain"
                    style={{ width: width / 6, height: height / 20 }}
                  />
                </View>
                <View>
                  <Text style={{ color: "#15577a", fontSize: width / 30 }}>
                    Agent
                  </Text>
                  <Text style={{ color: "#000", fontSize: width / 24 }}>
                    JOHN DOE
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignSelf: "center",
                  paddingTop: width / 20,
                }}
              >
                <Button
                  rounded
                  style={{
                    backgroundColor: "#05527c",
                    width: width / 4,
                    height: height / 20,
                    marginRight: width / 36,
                    // alignSelf:'center'
                    justifyContent: 'center',
                  }}
                >
                  <Text style={{color:'#fff',fontWeight:'bold'}}>CALL</Text>
                </Button>
                <Button
                  rounded
                  style={{
                    backgroundColor: "#05527c",
                    width: width / 4,
                    height: height / 20,
                    marginLeft: width / 36,
                    justifyContent: 'center',
                  }}
                >
                  <Text style={{color:'#fff',fontWeight:'bold'}}>MESSAGE</Text>
                </Button>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
