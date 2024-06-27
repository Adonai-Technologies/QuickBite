import {
	View,
	Text,
	TouchableOpacity,
	Image,
	StyleSheet,
	Dimensions,
} from "react-native";
import React from "react";
import { Icon } from "react-native-elements";

const screenWidth = Dimensions.get("window").width;

export default function FoodCard({
	onPressFoodCard,
	restaurantName,
	deliveryAvailable,
	discountAvailable,
	discountPercentage,
	numberOfReview,
	businessAddress,
	farAway,
	averageReview,
	images,
}) {
	return (
		<TouchableOpacity>
			<View style={{ ...styles.cardView, width:screenWidth }}>
				<Image
					source={images}
					style={{ ...styles.image, width: screenWidth-20 }}
				/>

             <View>
                <View>
                    <Text style={styles.restaurantName}>{restaurantName}</Text>
                </View>

                 <View style={{flex:1, flexDirection:"row" }}>
                       <View style={styles.distance}>
                           <Icon
                               name="place"
                               type="material"
                               color="#5e6977"
                               size={18}
                               iconStyle={{marginTop: 3}}
                           
                           />
                           <Text style={styles.min}>{farAway} Min</Text>
                       </View>
                       <View style={{flex:9, flexDirection:"row"}}>
                          <Text style={styles.address}>{businessAddress}</Text>
                       </View>
                 </View>

            </View>
			</View>


            


            <View style={styles.review}>
                <Text style={styles.averageReview}>{averageReview}</Text>
                <Text style={styles.numberOfReview}>{numberOfReview} Reviews</Text>
            </View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	cardView: {
		maginHorizontal: 9,
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
		borderwidth: 1,
		borderColor: "#bdc6cf",
		borderBottomRightRadius: 5,
	},

	image: {
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		height: 150,
	},

    restaurantName: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#43484d",
        marginTop: 5,
        marginLeft:10
    },

    distance: {
        flex:4,
        flexDirection: "row",
        borderRightColor:"#bdc6cf",
        paddingHorizontal: 5,
        borderRightWidth: 1,
    },

    min: {
        fontSize: 12,
        fontWeight: "bold",
        paddingTop: 5,
        color: "#86939e",
    },

    address: {
        fontSize: 12,
        paddingTop: 5,
        color: "#5e6977",
        paddingHorizontal: 5,
    },
    review:{
        position:"absolute",
        top:0,
        right:0,
        backgroundColor:"rgba(52,52,52,0.3)",
        // padding:10,
        alignItems:"center",
        justifyContent:"center",
        borderTopRightRadius:5,
        borderBottomLeftRadius:5,
        fontWeight:"bold",
        flexDirection:"row",
        shadowRadius:10,
        shadowOpacity:0.5,
        shadowColor:"black",
    },

    averageReview:{
        color:"white",
        fontWeight:"bold",
        fontSize:20,
        marginTop:3
    },
    numberOfReview:{
        color:"white",
        fontSize:12,
        marginRight:10,
        marginLeft:10
    }

});
