import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements"; // Corrected import
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import MyOrdersScreen from "../screens/MyOrdersScreen";
import MyAccountScreen from "../screens/MyAccountScreen"


const Tabs = createBottomTabNavigator();

export default function ClientTabs() {
    return (
        <Tabs.Navigator
            screenOptions={{
                tabBarActiveTintColor: "#ff8c52",
                tabBarInactiveTintColor: "gray",
            }}
        >
            <Tabs.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            name='home'
                            color={color}
                            size={size}
                            type='material-community'
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name='SearchScreen'
                component={SearchScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: "Search",
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            name='magnify'
                            color={color}
                            size={size}
                            type='material-community'
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name='My Orders'
                component={MyOrdersScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: "my orders",
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            name='view-list'
                            color={color}
                            size={size}
                            type='material-community'
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name='My Account'
                component={MyAccountScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: "Account",
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            name='account'
                            color={color}
                            size={size}
                            type='material-community'
                        />
                    ),
                }}
            />
            
        </Tabs.Navigator>
    );
}
