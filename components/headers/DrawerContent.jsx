import {
	View,
	Text,
	StyleSheet,
	Linking,
	Pressable,
	Alert,
	Switch,
} from "react-native";
import React, { useContext, useState, useEffect } from "react";
import {
	DrawerContentScrollView,
	DrawerItemList,
	DrawerItem,
} from "@react-navigation/drawer";
import { Icon, Avatar, Button } from "react-native-elements";

export default function DrawerContent({ ...props }) {
	return (
		<View style={styles.container}>
			<DrawerContentScrollView {...props}>
				<View className=' bg-orange-400'>
					<View className='flex-row  justify-left items-center pl-3 gap-2 pt-2 pb-2'>
						<Avatar
							rounded
							source={{
								uri: "https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_640.jpg",
							}}
							size={"large"}
							avatarStyle={styles.avatar}
						/>
						<View>
							<Text className='font-bold text-slate-200 text-xl'>John Doe</Text>
							<Text className='text-slate-200 text-sm'>john@doe.com</Text>
						</View>
					</View>

					<View className='flex-row justify-evenly  pb-3'>
						<View className='flex-row mt-2.5'>
							<View className='ml-2.5 items-center justify-center'>
								<Text className='font-bold text-slate-200 text-xl'>1</Text>
								<Text className='font-bold text-slate-200 text-lg'>
									My Favorite
								</Text>
							</View>
						</View>

						<View className='flex-row mt-2.5'>
							<View className='ml-2.5 items-center justify-center'>
								<Text className='font-bold text-slate-200 text-xl'>10</Text>
								<Text className='font-bold text-slate-200 text-lg'>
									My Cart
								</Text>
							</View>
						</View>
					</View>
				</View>

				<DrawerItemList {...props} />
				<DrawerItem
					label='Driver Console'
					onPress={() => props.navigation.navigate("ClientTabs")}
					icon={({ color, size }) => (
						<Icon
							name='scooter'
							type='material-community'
							color={color}
							size={size}
						/>
					)}
				/>

				<DrawerItem
					label='Payment'
					onPress={() => props.navigation.navigate("ClientTabs")}
					icon={({ color, size }) => (
						<Icon
							name='credit-card-outline'
							type='material-community'
							color={color}
							size={size}
						/>
					)}
				/>
				<DrawerItem
					label='Promotions'
					onPress={() => props.navigation.navigate("ClientTabs")}
					icon={({ color, size }) => (
						<Icon
							name='tag-outline'
							type='material-community'
							color={color}
							size={size}
						/>
					)}
				/>
				<DrawerItem
					label='Settings'
					onPress={() => props.navigation.navigate("ClientTabs")}
					icon={({ color, size }) => (
						<Icon
							name='cog-outline'
							type='material-community'
							color={color}
							size={size}
						/>
					)}
				/>
				<DrawerItem
					label='Help'
					onPress={() => props.navigation.navigate("ClientTabs")}
					icon={({ color, size }) => (
						<Icon
							name='help-circle-outline'
							type='material-community'
							color={color}
							size={size}
						/>
					)}
				/>

				<View style={{ borderTopWidth: 1, borderTopColor: "#e1e8ee" }}>
					<Text className='font-bold text-slate-400 text-xl pt-2.5 pl-5'>
						Preferences
					</Text>

					<View style={styles.switchText}>
						<Text className='text-slate-800 text-lg font-bold'>Dark Theme</Text>
						<Switch
							trackColor={{ false: "#767577", true: "#81b0ff" }}
							thumbColor={true ? "#f5dd4b" : "#f4f3f4"}
						/>
					</View>
				</View>
			</DrawerContentScrollView>

			<DrawerItem
				label='Sign Out'
				onPress={() => props.navigation.navigate("ClientTabs")}
				icon={({ color, size }) => (
					<Icon
						name='logout'
						type='material-community'
						color={color}
						size={size}
					/>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	avatar: {
		borderWidth: 4,
		borderColor: "white",
	},

	switchText: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingLeft: 20,
		paddingRight: 10,
		paddingVertical: 5,
	},
});
