import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, TextInput, SafeAreaView, ScrollView } from "react-native";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import Categories from "./Categories";
import FeaturedRow from "./FeaturedRow";
import { featured } from "../constants";

const Home = () => {
	return (
		<SafeAreaView className='bg-white'>
			<StatusBar barStyle='dark-content' />
			{/* Search bar */}
			<View className='flex-row items-center space-x-2 pb-2'>
				<View className='flex-row flex-1 items-center p-3 rounded-full border border-gray-300 mr-2'>
					<Icon.Search stroke='gray' width='20' height='20' />
					<TextInput
						placeholder='Restaurants and cuisines'
						className='ml-2 flex-1'
					/>
					<View className='flex-row items-center space-x-1 border-0 border-1-2 pl-2 border-gray-300'>
						<Icon.MapPin
							Width='20'
							height='20'
							stroke='gray'
							strokeWidth={2.5}
						/>
						<Text className='text-gray-600'>Greater Accra, Ghana</Text>
					</View>
				</View>
				<View
					style={{ backgroundColor: themeColors.bgColor(1) }}
					className='p-3 bg-gray-300 rounded-full'>
					<Icon.Sliders
						strokeWidth={2.5}
						width='20'
						height='20'
						stroke='white'
					/>
				</View>
			</View>

			{/* Main */}

			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: 20 }}>
				{/* Categories */}
				<Categories />

				{/* featured */}

				<View className='mt-5'>
					{[featured, featured, featured].map((item, index) => {
						return (
							<FeaturedRow
								key={index}
								title={item.title}
								restaurants={item.restaurants}
								description={item.description}
							/>
						);
					})}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;
