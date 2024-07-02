import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ClientTabs from "../screens/ClientTabs";
import { Icon } from "react-native-elements";
import BusinessConsoleScreen from "../screens/BusinessConsoleScreen";
import DrawerContent from "../headers/DrawerContent";

const Drawer = createDrawerNavigator();

export default function MenuDrawerNavigatorScreen() {
	return (
		<Drawer.Navigator
            screenOptions={{
                headerShown: false,
            }}
            drawerContent={(props) => <DrawerContent {...props} />}
        >
			
        <Drawer.Screen name='ClientTabs' 
            component={ClientTabs} 
              options={{
                  title: "Client",
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
        <Drawer.Screen name='BusinessConsoleScreen' 
            component={BusinessConsoleScreen} 
              options={{
                  title: "Business Console",
                  drawerIcon: ({ focused, size, color }) => (
                    <Icon
                      name='business'
                      color={focused ? "#ff8c52" : "gray"}
                      size={size}
                      type='material'
                    />
                  ),
              }}
            />
		</Drawer.Navigator>
	);
}
