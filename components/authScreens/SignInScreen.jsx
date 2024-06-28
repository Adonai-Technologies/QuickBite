import { View, Text, StatusBar, TextInput } from "react-native";
import React, { useState, useRef } from "react";
import Header from "../screens/Header";
import * as Animatable from "react-native-animatable";
import * as Icon from "react-native-feather";
import { Button } from "react-native-elements";
import { Link } from "expo-router";

export default function SignInScreen({ navigation }) {
	const [TextInputFocused, setTextInputFocused] = useState(false);

	const TextInput1 = useRef(1);
	const TextInput2 = useRef(2);

	return (
		<View className='flex-1'>
			<StatusBar barStyle='light-content' backgroundColor='#ff8c52' />
			<Header title={"My Account"} type={"arrowLeft"} navigation={navigation} />

			<View>
				<Text className='text-orange-400 font-bold text-3xl ml-10 mt-10'>
					Sign-In
				</Text>
			</View>
			<View className='items-center mt-4'>
				<Text className='text-xl'>Please Enter Email And Password</Text>
				<Text className='text-xl'>resgistered with your account</Text>
			</View>

			<View>
				<View>
					<TextInput
						className='border border-gray-400 p-2 rounded mt-5 mr-3 ml-3 pl-5'
						placeholder='Email'
						ref={TextInput1}
					/>
				</View>

				<View className='border border-gray-400 p-2 rounded mt-5 flex-row items-center mr-3 ml-3  pl-4'>
					<Animatable.View
						animation={TextInputFocused ? "" : "fadeInRight"}
						duration={300}>
						<Icon.Lock name='lock' color={"gray"} type='feather' />
					</Animatable.View>
					<TextInput
						placeholder='Password'
						style={{ flex: 1, marginLeft: 20 }}
						ref={TextInput2}
						onFocus={() => setTextInputFocused(false)}
						onBlur={() => setTextInputFocused(true)}
					/>
					<Animatable.View
						animation={TextInputFocused ? "" : "fadeInLeft"}
						duration={500}>
						<Icon.EyeOff name='visibility-off' color={"gray"} type='feather' />
					</Animatable.View>
				</View>
			</View>

			<View className='mt-10 mx-3'>
				<Button
				 onPress={() => {navigation.navigate("ClientTabs")}}
					title='SIGN IN'
					buttonStyle={{
						backgroundColor: "#ff8c52",
						borderRadius: 4,
						paddingTop: 12,
						paddingBottom: 12,
					}}
					titleStyle={{ color: "white", fontWeight: "bold",fontSize: 16 }}
				/>
			</View>

            <View className='flex items-center justify-center mt-5'>
				<Text className='text-gray-400 font-bold text-xl underline'>Forgot Password?</Text>
			</View>
            
			<View className='flex items-center justify-center mt-5'>
				<Text className=' font-bold text-xl'>OR</Text>
			</View>



            <View className='mt-5 mx-3'>
				<Button
				  onPress={() => {}}
					title='Sign In With Facebook'
					icon={{ name: "facebook", color: "white", type: "font-awesome" }}
					buttonStyle={{
						backgroundColor: "blue",
						borderRadius: 4,
						paddingTop: 12,
						paddingBottom: 12,
					}}
					titleStyle={{ color: "white", fontWeight: "bold",fontSize: 16 }}
				/>
			</View>
            <View className='mt-5 mx-3'>
				<Button
				  onPress={() => {}}
					title='Sign In With Google'
					icon={{ name: "google", color: "white", type: "font-awesome" }}
					buttonStyle={{
						backgroundColor: "red",
						borderRadius: 4,
						paddingTop: 12,
						paddingBottom: 12,
					}}
					titleStyle={{ color: "white", fontWeight: "bold",fontSize: 16 }}
				/>
			</View>


			<View className='flex items-center justify-center mt-5 ml-0'>
				<Text className='text-gray-600 font-bold text-xl'>New on QuickBite? <Link className="text-blue-500" href=''>Create An Account</Link></Text>
			</View>
            



		</View>
	);
}
