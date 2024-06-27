import { View, Text, StatusBar } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { withBadge } from "react-native-elements";

export default function Header({ title, type, navigation }) {

   const BadgeIcon = withBadge(2)(Icon.ShoppingCart);

	return (
		<View className='h-20 bg-orange-400 flex-row items-center px-4'>
			<StatusBar barStyle='light-content' backgroundColor='#ff8c52' />
			<Icon.Menu
				size={28}
				color={"white"}
				onPress={() => {}}
			/>
			<View className='flex-1 items-center'>
				<Text className='text-white text-3xl font-bold'>{title}</Text>
			</View>


            <View className='mr-4'>
                <BadgeIcon
                    size={28}
                    color={"white"}
                    onPress={() => {}}
                    type={"feather"}
                   
                   
                />
            </View>
		</View>
	);
}
