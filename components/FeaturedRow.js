import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import RestaurantsCard from "./RestaurantsCard";

export default function FeaturedRow({ title, description, restaurants }) {
	return (
		<View>
			<View className='flex-row justify-between items-center px-4'>
				<View>
					<Text className='text-lg font-bold'>{title}</Text>
					<Text className='text-xs text-gray-500'>{description}</Text>
				</View>
				<TouchableOpacity>
					<Text style={{ color: themeColors.text }} className='font-semibold'>
						View All
					</Text>
				</TouchableOpacity>
			</View>
			<ScrollView
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{ paddingHorizontal: 15 }}
				className='overflow-visible py-5'>
				{restaurants.map((restaurant, index) => {
					return <RestaurantsCard item={restaurant} key={index} />;
				})}
			</ScrollView>
		</View>
	);
}
