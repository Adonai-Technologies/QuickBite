import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import HomeScreen from "../components/HomeScreen";
import RestaurantScreen from "../components/RestaurantScreen";

import React from "react";

export default function Navigation() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='Home' component={HomeScreen} />
			<Stack.Screen name='Restaurant' component={RestaurantScreen} />
		</Stack.Navigator>
	);
}
