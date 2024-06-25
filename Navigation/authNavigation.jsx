import React from "react";
import {
	createStackNavigator,
	TransitionPresets,
} from "@react-navigation/stack";
import SignInWelcomeScreen from "../components/authScreens/SignInWelcomeScreen";
import SignInScreen from "../components/authScreens/SignInScreen";
import { NavigationContainer } from "@react-navigation/native";

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
		</AuthStack.Navigator>
	);
}
