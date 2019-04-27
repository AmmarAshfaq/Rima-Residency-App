import React, { Component } from "react";
import { View, Image, Text, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import { DeckSwiper, Card, CardItem, Button } from "native-base";
const selectValue = {
  url: [
    {
      image:
        "https://tfc-sharetribe-files-prod.s3.amazonaws.com/images/listing_images/images/3019/original/dsc_0402.jpg"
    },
    {
      image:
        "http://www.maxviewrealty.com/img/2017-02-28/times-square-shanghai-apartment-rental-707*471-12403.jpg"
    },
    {
      image:
        "http://www.besteventrentals.net/images/stories/virtuemart/product/5-square-table-rental.jpg"
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJrKcAFxo2PAsnrxE_nt9Bc-47andj6pbxociiId5lQIoVt5TD"
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFHfk67op0P-ACeScc4j1UsiEBOzSJca1ACGPb67BoSqz7zDH4"
    },
    { image: "http://midtwn.com/wp-content/uploads/2014/05/photo-1.jpg" }
  ]
};
export default class About extends Component {
  static navigationOptions = {
    title: "ABOUT US",
    headerStyle: {
      backgroundColor: "#fff"
    },
    headerTintColor: "#28678d",
    headerTitleStyle: {
      alignSelf: "center",
      textAlign: "center",
      flex: 1,
      marginLeft: -20
    }
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#eeeeee" }}>
        <View
          style={{
            flex: 0.2,
            justifyContent: "center",
            alignItems: "center",
            // width:width/2
          }}
        >
          <Image
            source={require("../../../assets/logoB.png")}
            style={{
              width: width / 2,
              height: width / 2,
              // marginTop: 20,
              // marginBottom: 20,
              resizeMode: "contain"
            }}
          />

          {/* <Thumbnail large source={{ uri: this.props.user.image_url }} /> */}
        </View>
        <View style={{ flex: 0.3 }}>
          <DeckSwiper
            dataSource={selectValue.url}
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
        <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#f09291', textAlign: 'center' }}>
            "ALWAYS DELIVER {"\n"}
            MORE THAN EXPECTED"
</Text>
          <Text style={{ color: "#28678d" }}>
            --------------------------
          </Text>
        </View>
        <View
          style={{
            flex: 0.2,
            // padding: width / 20
          }}
        >
          <Text style={{ textAlign: "center", color: "#000", paddingLeft: width / 36, paddingRight: width / 36 }}>
            Dominion Properties is one of the world's faster- {"\n"}
            growing real-estate development firm.Admired for   {"\n"}
            its ingenuity and ultra-modern take on real-estate, {"\n"}
            Dominion Properties excelling in design,quality and  {"\n"}
            safety seek to continue building advance real-estate  {'&'}
            ranging from shopping malls retail and hospitality {'&'} leisure.
          </Text>
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
              marginTop:width/36
            }}
            onPress={this.signUp}
          >
            <Text style={{ color: "#fff", }}>DOWNLOAD OUR PROFILE</Text>
          </Button>
        </View>

      </View>
    );
  }
}
