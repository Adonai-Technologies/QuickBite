import { View, Text, StatusBar, Image } from "react-native";
import React from "react";
import Swiper from "react-native-swiper"; // Default import
import { Button } from "react-native-elements";
import { Link } from "expo-router";

export default function SignInWelcomeScreen({ navigation }) {

  

	return (
		<View className='flex-1'>
			<StatusBar barStyle='light-content' backgroundColor='#ff8c52' />
			<View className='flex justify-center items-center mt-5 pt-5'>
				<Text className='text-3xl font-bold bg-white text-orange-500'>
					DISCOVER RESTAURANTS
				</Text>
				<Text className='text-3xl font-bold bg-white text-orange-500'>
					IN YOUR AREA
				</Text>
			</View>

			<View className='flex-1 pt-5'>
				<Swiper
					activeDotColor='#ff8c52'
					autoplay={true}
					autoplayTimeout={4} // 3 seconds
					loop={true}
					horizontal={true}
					showsPagination={true}
					dotColor='white'>
					<View className='flex-1 justify-center items-center'>
						<Image
							source={require("../../assets/images/food4.png")}
							className='w-full h-80'
						/>
					</View>

					<View className='flex-1 justify-center items-center'>
						<Image
							source={require("../../assets/images/food3.png")}
							className='w-full h-80'
						/>
					</View>
					<View className='flex-1 justify-center items-center'>
						<Image
							source={require("../../assets/images/food2.png")}
							className='w-full h-80'
						/>
					</View>
					<View className='flex-1 justify-center items-center'>
						<Image
							source={require("../../assets/images/food1.png")}
							className='w-full h-80'
						/>
					</View>
					{/* Add more slides if needed */}
				</Swiper>
				<View>
					<Button
						onPress={() => {
							navigation.navigate("SignInScreen");
						}}
						title='SIGN IN'
						buttonStyle={{
							backgroundColor: "#ff8c52",
							borderRadius: 4,
							paddingTop: 12,
							paddingBottom: 12,
							marginBottom: 15,
							marginLeft: 10,
							marginRight: 10,
						}}
						titleStyle={{ color: "white", fontWeight: "bold", fontSize: 16 }}
					/>
					<Button
						onPress={() => {}}
						title='Create Your Account'
						buttonStyle={{
							backgroundColor: "#ffffff",
							borderRadius: 4,
							paddingTop: 12,
							paddingBottom: 12,
                            marginBottom: 40,
							marginLeft: 10,
							marginRight: 10,
                            borderColor:"black",
                            borderWidth:1,
                            
						}}
						titleStyle={{ color: "black", fontWeight: "bold", fontSize: 16, }}
					/>
                    
				</View>

                
			</View>
		</View>
	);
}
