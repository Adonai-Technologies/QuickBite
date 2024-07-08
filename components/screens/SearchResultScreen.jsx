import { View, Text, StyleSheet, Dimensions, FlatList } from "react-native";
import React from "react";
import SearchResultCard from "../SearchResultCard";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const restaurantData = [
	{
		id: 0,
		restaurantName: "Cafe Deadend",
		farAway: "4.6",
		businessAddress: "123 Oxford St, Ghana",
		image: require("../../assets/images/r1.png"),
		averageReview: "3.7",
		numberOfReview: "80",
		coordinates: {
			latitude: 1.534728,
			longitude: 110.35698,
		},
		discount: "100% OFF",
		deliveryTime: "40-50",
		collectTime: "15-20",
		foodType: "Western, Chinese, Japanese",
		productData: [
			{
				name: "Beef Burger",
				image: require("../../assets/images/r2.png"),
				price: "10.99",
			},
			{
				name: "Big Mac",
				image: require("../../assets/images/r3.png"),
				price: "12.99",
			},
			{
				name: "Cheese Burger",
				image: require("../../assets/images/r4.png"),
				price: "11.99",
			},
		],
	},
	{
		id: 0,
		restaurantName: "Cafe Deadend",
		farAway: "4.6",
		businessAddress: "123 Oxford St, Ghana",
		image: require("../../assets/images/r2.png"),
		averageReview: "3.7",
		numberOfReview: "80",
		coordinates: {
			latitude: 1.534728,
			longitude: 110.35698,
		},
		discount: "100% OFF",
		deliveryTime: "40-50",
		collectTime: "15-20",
		foodType: "Western, Chinese, Japanese",
		productData: [
			{
				name: "Beef Burger",
				image: require("../../assets/images/r2.png"),
				price: "10.99",
			},
			{
				name: "Big Mac",
				image: require("../../assets/images/r3.png"),
				price: "12.99",
			},
			{
				name: "Cheese Burger",
				image: require("../../assets/images/r4.png"),
				price: "11.99",
			},
		],
	},
	{
		id: 0,
		restaurantName: "Cafe Deadend",
		farAway: "4.6",
		businessAddress: "123 Oxford St, Ghana",
		image: require("../../assets/images/r3.png"),
		averageReview: "3.7",
		numberOfReview: "80",
		coordinates: {
			latitude: 1.534728,
			longitude: 110.35698,
		},
		discount: "100% OFF",
		deliveryTime: "40-50",
		collectTime: "15-20",
		foodType: "Western, Chinese, Japanese",
		productData: [
			{
				name: "Beef Burger",
				image: require("../../assets/images/r2.png"),
				price: "10.99",
			},
			{
				name: "Big Mac",
				image: require("../../assets/images/r3.png"),
				price: "12.99",
			},
			{
				name: "Cheese Burger",
				image: require("../../assets/images/r4.png"),
				price: "11.99",
			},
		],
	},
	{
		id: 0,
		restaurantName: "Cafe Deadend",
		farAway: "4.6",
		businessAddress: "123 Oxford St, Ghana",
		image: require("../../assets/images/r4.png"),
		averageReview: "3.7",
		numberOfReview: "80",
		coordinates: {
			latitude: 1.534728,
			longitude: 110.35698,
		},
		discount: "100% OFF",
		deliveryTime: "40-50",
		collectTime: "15-20",
		foodType: "Western, Chinese, Japanese",
		productData: [
			{
				name: "Beef Burger",
				image: require("../../assets/images/r2.png"),
				price: "10.99",
			},
			{
				name: "Big Mac",
				image: require("../../assets/images/r3.png"),
				price: "12.99",
			},
			{
				name: "Cheese Burger",
				image: require("../../assets/images/r4.png"),
				price: "11.99",
			},
		],
	},
	{
		id: 0,
		restaurantName: "Cafe Deadend",
		farAway: "4.6",
		businessAddress: "123 Oxford St, Ghana",
		image: require("../../assets/images/r5.png"),
		averageReview: "3.7",
		numberOfReview: "80",
		coordinates: {
			latitude: 1.534728,
			longitude: 110.35698,
		},
		discount: "100% OFF",
		deliveryTime: "40-50",
		collectTime: "15-20",
		foodType: "Western, Chinese, Japanese",
		productData: [
			{
				name: "Beef Burger",
				image: require("../../assets/images/r2.png"),
				price: "10.99",
			},
			{
				name: "Big Mac",
				image: require("../../assets/images/r3.png"),
				price: "12.99",
			},
			{
				name: "Cheese Burger",
				image: require("../../assets/images/r4.png"),
				price: "11.99",
			},
		],
	},
	{
		id: 0,
		restaurantName: "Cafe Deadend",
		farAway: "4.6",
		businessAddress: "123 Oxford St, Ghana",
		image: require("../../assets/images/r6.png"),
		averageReview: "3.7",
		numberOfReview: "80",
		coordinates: {
			latitude: 1.534728,
			longitude: 110.35698,
		},
		discount: "100% OFF",
		deliveryTime: "40-50",
		collectTime: "15-20",
		foodType: "Western, Chinese, Japanese",
		productData: [
			{
				name: "Beef Burger",
				image: require("../../assets/images/r2.png"),
				price: "10.99",
			},
			{
				name: "Big Mac",
				image: require("../../assets/images/r3.png"),
				price: "12.99",
			},
			{
				name: "Cheese Burger",
				image: require("../../assets/images/r4.png"),
				price: "11.99",
			},
		],
	},


	

];

export default function SearchResultScreen({ navigation, route }) {
	return (
		<View style={styles.container}>
			<View>
				<FlatList
					style={{ backgroundColor: "white" }}
					data={restaurantData}
					keyExtractor={(item, index) => index.toString()}
					renderItem={({ item }) => (
						<SearchResultCard
							screenWidth={SCREEN_WIDTH}
							images={item.image}
							averageReview={item.averageReview}
							numberOfReview={item.numberOfReview}
							farAway={item.farAway}
							restaurantName={item.restaurantName}
							bussinessAddress={item.businessAddress}
							productData={item.productData}
						/>
					)}
					ListHeaderComponent={
						<View>
							<Text style={styles.listHeader}>
								{restaurantData.length} Results for {route.params.item}
							</Text>
						</View>
					}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	listHeader: {
		fontSize: 20,
		fontWeight: "bold",
		paddingHorizontal: 10,
		paddingVertical: 10,
	},
});
