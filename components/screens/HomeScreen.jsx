import {
	View,
	Text,
	TouchableOpacity,
	ScrollView,
	FlatList,
	Pressable,
	Image,
	Dimensions,
    StyleSheet
} from "react-native";
import React, { useState } from "react";
import HomeHeader from "../headers/HomeHeader";
import { Icon } from "react-native-elements";
import FoodCard from "../FoodCard";

const data = [
	{
		id: 1,
		name: "Cup cake",
		image: require("../../assets/images/fastfood1.png"),
		price: 10,
	},
	{
		id: 2,
		name: "Burgers",
		image: require("../../assets/images/fastfood2.png"),
		price: 15,
	},
	{
		id: 3,
		name: "Spaghetti",
		image: require("../../assets/images/fastfood3.png"),
		price: 8,
	},
	{
		id: 4,
		name: "Pop Corn",
		image: require("../../assets/images/fastfood4.png"),
		price: 12,
	},
	{
		id: 5,
		name: "Wine",
		image: require("../../assets/images/fastfood5.png"),
		price: 5,
	},
	{
		id: 6,
		name: "Fish",
		image: require("../../assets/images/fastfood6.png"),
		price: 7,
	},
];

const restaurantData = [
	{
		id: 0,
		restaurantName: "Cafe Deadend",
		farAway: "4.6",
		businessAddress: "123 Oxford St, Ghana",
		image: require("../../assets/images/food1.png"),
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
				image: require("../../assets/images/food1.png"),
				price: "$10.99",
			},
			{
				name: "Big Mac",
				image: require("../../assets/images/food1.png"),
				price: "$12.99",
			},
			{
				name: "Cheese Burger",
				image: require("../../assets/images/food1.png"),
				price: "$11.99",
			},
		],
	},
	{
		id: 1,
		restaurantName: "Mc Donalds",
		farAway: "4.6",
		businessAddress: "123 Oxford St, Ghana",
		image: require("../../assets/images/food2.png"),
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
				image: require("../../assets/images/food1.png"),
				price: "$10.99",
			},
			{
				name: "Big Mac",
				image: require("../../assets/images/food1.png"),
				price: "$12.99",
			},
			{
				name: "Cheese Burger",
				image: require("../../assets/images/food1.png"),
				price: "$11.99",
			},
		],
	},
	{
		id: 2,
		restaurantName: "KFC",
		farAway: "4.6",
		businessAddress: "123 Oxford St, Ghana",
		image: require("../../assets/images/food4.png"),
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
				image: require("../../assets/images/food1.png"),
				price: "$10.99",
			},
			{
				name: "Big Mac",
				image: require("../../assets/images/food1.png"),
				price: "$12.99",
			},
			{
				name: "Cheese Burger",
				image: require("../../assets/images/food1.png"),
				price: "$11.99",
			},
		],
	},
];

const screenWidth = Dimensions.get("window").width;

export default function HomeScreen({ navigation }) {
	const [delivery, setDelivery] = useState(true);
	const [indexCheck, setIndexCheck] = useState(0);

	return (
		<View className='flex-1'>
			<HomeHeader title={"QuickBite"} type={"home"} />

			<ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={true}>
				<View className='mt-2 flex-row justify-center items-center gap-3'>
					<TouchableOpacity onPress={() => setDelivery(true)}>
						<View
							className={`pt-2 pb-2 rounded-3xl mt-5 items-center justify-center pr-10 pl-10 font-bold text-xl ${
								delivery ? "bg-orange-400" : "bg-slate-200"
							}`}>
							<Text
								className={`font-bold ${
									delivery ? "text-white" : "text-black"
								}`}>
								Delivery
							</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => setDelivery(false)}>
						<View
							className={`pt-2 pb-2 rounded-3xl mt-5 items-center justify-center pr-10 pl-10 font-bold text-xl ${
								!delivery ? "bg-orange-400" : "bg-slate-200"
							}`}>
							<Text
								className={`font-bold ${
									!delivery ? "text-white" : "text-black"
								}`}>
								Pick Up
							</Text>
						</View>
					</TouchableOpacity>
				</View>

				<View className='flex-row items-center justify-center gap-3'>
					<View className='flex-row items-center justify-center mt-6 ml-10 gap-3 rounded-3xl mr-7 bg-slate-200 pr-10 pl-5'>
						<View className='flex-row items-center justify-end mt-2 '>
							<Icon
								type='material-community'
								name='map-marker-outline'
								size={28}
								style={{ padding: 2 }}
							/>
							<Text className='font-bold pb-1 text-xl text-gray-400'>
								123 Oxford St, Ghana
							</Text>
						</View>
						<View className='flex-row items-center justify-end rounded-3xl bg-white pl-2 pr-3'>
							<Icon
								type='material-community'
								name='clock-time-four'
								size={28}
								style={{ padding: 2 }}
							/>
							<Text className='font-bold pb-1 text-xl'>Now</Text>
						</View>
					</View>

					<View className='flex items-center justify-center mt-6 pr-10'>
						<Icon type='material-community' name='tune' size={30} />
					</View>
				</View>

				<View className='mt-6 bg-slate-200 pt-2'>
					<Text className='text-3xl font-bold ml-5 text-gray-500'>
						Categories
					</Text>
				</View>
				<View>
					<FlatList
						showsHorizontalScrollIndicator={false}
						data={data}
						keyExtractor={(item) => item.id.toString()}
						extraData={indexCheck}
						horizontal={true} // This prop makes the list horizontal
						renderItem={({ item, index }) => (
							<Pressable onPress={() => setIndexCheck(index)}>
								<View
									className={`pt-2 pb-2 rounded-3xl mt-5 items-center ml-4 justify-center pr-5 pl-2 font-bold text-xl ${
										index === indexCheck
											? "bg-orange-400 text-white"
											: "bg-slate-200 text-slate-300"
									}`}>
									<Image source={item.image} className='w-20 h-20' />
									<View>
										<Text
											className={`font-bold text-lg ${
												index === indexCheck ? "text-white" : "text-slate-300"
											}`}>
											{item.name}
										</Text>
									</View>
								</View>
							</Pressable>
						)}
					/>
				</View>

				<View className='mt-6 bg-slate-200 pt-2'>
					<Text className='text-3xl font-bold ml-5 text-gray-500 mb-2'>
						Free Delivery Now
					</Text>
				</View>

				<View>
					<FlatList
						style={{ marginTop: 10, marginBottom: 10 }}
						horizontal={true} // This prop makes the list horizontal
						showsHorizontalScrollIndicator={false}
						data={restaurantData}
						keyExtractor={(item, index) => index.toString()}
						renderItem={({ item }) => (
							<View className='ml-3 pb-2 mr-2.5 border-b-1  border-slate-500 rounded-t-lg'>
								<FoodCard
									screenWidth={screenWidth * 0.8}
									onPressFoodCard={() =>
										navigation.navigate("FoodDetails", { item })
									}
									images={item.image}
									restaurantName={item.restaurantName}
									deliveryAvailable={item.deliveryAvailable}
									discountAvailable={item.discountAvailable}
									discountPercentage={item.discountPercentage}
									numberOfReview={item.numberOfReview}
									businessAddress={item.businessAddress}
									farAway={item.farAway}
									averageReview={item.averageReview}
								/>
							</View>
						)}
					/>
				</View>

				<View className='mt-6 bg-slate-200 pt-2'>
					<Text className='text-3xl font-bold ml-5 text-gray-500 mb-2'>
						Promotions Available
					</Text>
				</View>

				<View>
					<FlatList
						style={{ marginTop: 10, marginBottom: 10 }}
						horizontal={true} // This prop makes the list horizontal
						showsHorizontalScrollIndicator={false}
						data={restaurantData}
						keyExtractor={(item, index) => index.toString()}
						renderItem={({ item }) => (
							<View className='ml-3 pb-2 mr-2.5  border-b-gray-400  rounded-t-lg'>
								<FoodCard
									screenWidth={screenWidth * 0.8}
									onPressFoodCard={() =>
										navigation.navigate("FoodDetails", { item })
									}
									images={item.image}
									restaurantName={item.restaurantName}
									deliveryAvailable={item.deliveryAvailable}
									discountAvailable={item.discountAvailable}
									discountPercentage={item.discountPercentage}
									numberOfReview={item.numberOfReview}
									businessAddress={item.businessAddress}
									farAway={item.farAway}
									averageReview={item.averageReview}
								/>
							</View>
						)}
					/>
				</View>

				<View className='mt-6 bg-slate-200 pt-2'>
					<Text className='text-3xl font-bold ml-5 text-gray-500 mb-2'>
						Restaurants in your area
					</Text>
				</View>

               
              
				<View style={{ paddingTop: 10 }}>
					{restaurantData.map((item) => (
						<View key={item.id} style={{ paddingBottom: 20 }}
                            className='ml-3 pb-2 mr-2.5 border-b-1 mb-2 border border-slate-500 rounded-t-lg'
                         >
                            
							<FoodCard
                                screenWidth={screenWidth-10}
								onPressFoodCard={() =>
									navigation.navigate("FoodDetails", { item })
								}
								images={item.image}
								restaurantName={item.restaurantName}
								deliveryAvailable={item.deliveryAvailable}
								discountAvailable={item.discountAvailable}
								discountPercentage={item.discountPercentage}
								numberOfReview={item.numberOfReview}
								businessAddress={item.businessAddress}
								farAway={item.farAway}
								averageReview={item.averageReview}
                                
							/>
						</View>
					))}
				</View>


			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
    image: {
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		height: 150,
	},
})