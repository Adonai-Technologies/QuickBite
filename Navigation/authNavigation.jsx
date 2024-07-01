import React from "react";
import {
	createStackNavigator,
	TransitionPresets,
} from "@react-navigation/stack";
import SignInWelcomeScreen from "../components/authScreens/SignInWelcomeScreen";
import SignInScreen from "../components/authScreens/SignInScreen";
import HomeScreen from "../components/screens/HomeScreen";
import ClientTabs from "../components/screens/ClientTabs";
import RestaurantMapScreen from "../components/screens/restaurantMapScreen";
import MenuDrawerNavigatorScreen from "../components/screens/MenuDrawerNavigatorScreen";

const AuthStack = createStackNavigator();

export default function AuthNavigation() {
	return (
		<AuthStack.Navigator>
			<AuthStack.Screen
				name='SignInWelcomeScreen'
				component={SignInWelcomeScreen}
				options={{ headerShown: false, ...TransitionPresets.SlideFromRightIOS }}
			/>
			<AuthStack.Screen
				name='SignInScreen'
				component={SignInScreen}
				options={{ headerShown: false, ...TransitionPresets.SlideFromRightIOS }}
			/>

			<AuthStack.Screen
				name='MenuDrawerNavigatorScreen'
				component={MenuDrawerNavigatorScreen}
				options={{ headerShown: false, ...TransitionPresets.SlideFromRightIOS }}
			/>

			<AuthStack.Screen
				name='RestaurantMapScreen'
				component={RestaurantMapScreen}
				options={{ headerShown: false, ...TransitionPresets.SlideFromRightIOS }}
			/>
		</AuthStack.Navigator>
	);
}
