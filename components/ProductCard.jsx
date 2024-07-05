import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function ProductCard({productName,image, price}) {
  return (
    <View style={syles.view1}>
      <View style={syles.view2}>
          <View style={syles.view3}>
             <Text style={syles.text1}>{productName}</Text>
             <Text style={syles.text1}>GHS {price}</Text>
          </View>
          <View style={syles.view4}>
              <Image source={image} style={syles.image}/>
          </View>
      </View>
    </View>
  )
}



const syles = StyleSheet.create({
    view1: {
        backgroundColor: "white",
        elevation: 4,
        shadowOpacity: 0.4,
        shadowColor: "black",
        margin: 5,
        width: 210,
        padding: 10,
    },
    view2:{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 0,
    },
    view3:{
        justifyContent: "space-between",
        width:110
    },
    text1:{
        fontSize: 15,
       color:"#43484d"
    },
    view4:{
      width:75
    },
    image:{
        height:65,
        width:75,
    },
})