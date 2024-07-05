import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  ImageBackground,
  Dimensions,
} from "react-native";
import SearchComponent from "./SearchComponent";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const filterData = [
  {
    id: "1",
    name: "Cup cake",
    image: require("../../assets/images/fastfood1.png"),
    price: 10,
  },
  {
    id: "2",
    name: "Burgers",
    image: require("../../assets/images/fastfood2.png"),
    price: 15,
  },
  {
    id: "3",
    name: "Spaghetti",
    image: require("../../assets/images/fastfood3.png"),
    price: 8,
  },
  {
    id: "4",
    name: "Pop Corn",
    image: require("../../assets/images/fastfood4.png"),
    price: 12,
  },
  {
    id: "5",
    name: "Wine",
    image: require("../../assets/images/fastfood5.png"),
    price: 5,
  },
  {
    id: "6",
    name: "Fish",
    image: require("../../assets/images/fastfood6.png"),
    price: 7,
  },
];

export default function SearchScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <SearchComponent />
      <FlatList
        style={{ flex: 1 }}
        data={filterData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("SearchResultScreen", { item: item.name })}
          >
            <View style={styles.imageView}>
              <ImageBackground
                style={styles.image}
                source={item.image}
              >
                <View style={styles.textView}>
                  <Text style={{ color: "white" }}>{item.name}</Text>
                </View>
              </ImageBackground>
            </View>
          </TouchableWithoutFeedback>
        )}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        numColumns={2}
        ListHeaderComponent={() => (
          <Text style={styles.listHeader}>Top Categories</Text>
        )}
        ListFooterComponent={<Footer/>}
      />
    </View>
  );
}


const Footer = ()=>{
  return (
    <View style={{marginTop:20}}>
    
    <FlatList
      style={{ flex: 1 }}
      data={filterData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("SearchResultScreen", { item: item.name })}
        
        >
          <View style={styles.imageView}>
            <ImageBackground
              style={styles.image}
              source={item.image}
            >
              <View style={styles.textView}>
                <Text style={{ color: "white" }}>{item.name}</Text>
              </View>
            </ImageBackground>
          </View>
        </TouchableWithoutFeedback>
      )}
      horizontal={false}
      showsHorizontalScrollIndicator={false}
      numColumns={2}
      ListHeaderComponent={() => (
        <Text style={styles.listHeader}>More Categories</Text>
      )}
    
    />
  </View>
  )
}







const styles = StyleSheet.create({
  imageView: {
    borderRadius: 10,
    justifyContent: "center",
    width: SCREEN_WIDTH * 0.4475,
    height: SCREEN_HEIGHT * 0.4475,
    marginLeft: SCREEN_WIDTH * 0.035,
    marginTop: SCREEN_HEIGHT * 0.01,
  },
  image: {
    width: "100%",
    height: "80%",
    borderRadius: 10,
    overflow: "hidden", 
  },
  listHeader: {
    fontSize: 16,
    color: "#5e6977",
    paddingBottom: 10,
    marginLeft: 12,
    marginTop: 10,
  },
  textView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(52, 52, 52, 0.3)", 
  },
});
