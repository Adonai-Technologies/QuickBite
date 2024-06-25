import { View } from "react-native";
import React from "react";
import { StatusBar, StyleSheet } from "react-native";
import AuthNavigation from "../Navigation/authNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
	return (
		<SafeAreaProvider>
			<View style={styles.container}>
				<StatusBar barStyle='light-content' backgroundColor='#ff8c52' />
				<AuthNavigation />
			</View>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
