import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ClientTabs from "../screens/HomeScreen";
import { Icon } from "react-native-elements";

const Drawer = createDrawerNavigator();

export default function MenuDrawerNavigatorScreen() {
	return (
		<Drawer.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
			<Drawer.Screen name='ClientTabs' 
            component={ClientTabs} 
              options={{
                  title: "client",
                  drawerIcon: ({ focused, size, color }) => (
                    <Icon
                      name='home'
                      color={focused ? "#ff8c52" : "gray"}
                      size={size}
                      type='material-community'
                    />
                  ),
              }}
            />
		</Drawer.Navigator>
	);
}
