import { View, Text, StatusBar, StyleSheet } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";


export default function Header({ title, type, navigation }) {
	return (
		<View className='h-20 bg-orange-400 flex-row'>
			<StatusBar barStyle='light-content' backgroundColor='#ff8c52' />
			<View className='flex-1'>
				<Text className='mt-4 ml-5'>
					<Icon.ArrowLeft
						size={28}
						color={"white"}
						type={"feather"}
						name={type}
						onPress={() => { navigation.goBack(); }}
					/>
					<View className='flex-row m-3'>
						<Text className='text-white ml-4 text-3xl font-bold'>{title}</Text>
					</View>
				</Text>
			</View>
		</View>
	);
}
