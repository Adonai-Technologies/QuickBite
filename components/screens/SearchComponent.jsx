import {
	View,
	Text,
	StyleSheet,
	TouchableWithoutFeedback,
	Modal,
	TextInput,
	TouchableOpacity,
	Keyboard,
} from "react-native";
import React, { useState, useRef } from "react";
import { Icon } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import { filter } from "lodash";

const filterData = [
	{
		id: 1,
		name: "Cup cake",
		image: require("../../assets/images/fastfood1.png"),
		price: 10,
	},
	{
		id: 2,
		name: "Burgers",
		image: require("../../assets/images/fastfood2.png"),
		price: 15,
	},
	{
		id: 3,
		name: "Spaghetti",
		image: require("../../assets/images/fastfood3.png"),
		price: 8,
	},
	{
		id: 4,
		name: "Pop Corn",
		image: require("../../assets/images/fastfood4.png"),
		price: 12,
	},
	{
		id: 5,
		name: "Wine",
		image: require("../../assets/images/fastfood5.png"),
		price: 5,
	},
	{
		id: 6,
		name: "Fish",
		image: require("../../assets/images/fastfood6.png"),
		price: 7,
	},
];

export default function SearchComponent() {
	const [data, setData] = useState([...filterData]);
	const navigation = useNavigation();

	const [modalVisible, setModalVisible] = useState(false);
	const [textInputFocus, setTextInputFocus] = useState(false);
	const textInput = useRef(null);

	const contains = ({ name }, query) => {
		if (name.includes(query)) {
			return true;
		} else {
			return false;
		}
	};

	const handleSearch = (text) => {
		const data = filter(filterData, (userSearch) => {
			return contains(userSearch, text);
		});
		setData([...data]);
	};

	return (
		<View style={{ alignItems: "center" }}>
			<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
				<View style={styles.SearchArea}>
					<Icon
						name='search'
						type='material'
						iconStyle={{ marginLeft: 5 }}
						size={20}
						style={styles.searchIcon}
					/>
					<Text style={{ fontSize: 15 }}>What Are You Looking For ?</Text>
				</View>
			</TouchableWithoutFeedback>

			<Modal animationType='fade' transparent={false} visible={modalVisible}>
				<View style={styles.modal}>
					<View style={styles.view1}>
						<View style={styles.TextInput}>
							<Animatable.View
								animation={textInputFocus ? "fadeInLeft" : "fadeInRight"}
								duration={400}>
								<Icon
									onPress={() => {
										if (textInputFocus) {
											setModalVisible(false);
											setTextInputFocus(true);
										}
									}}
									name={textInputFocus ? "arrow-back" : "search"}
									type='material'
									iconStyle={{ marginRight: 5 }}
									size={20}
									style={styles.icons}
								/>
							</Animatable.View>
							<TextInput
								autoFocus={true}
								placeholder=''
								style={{ width: "90%" }}
								ref={textInput}
								onFocus={() => setTextInputFocus(true)}
								onBlur={() => setTextInputFocus(false)}
								onChangeText={handleSearch}
								className='pt-1 pb-1 rounded-3xl mt-2 items-center justify-center pr-10 pl-2'
							/>
							<Animatable.View
								animation={textInputFocus ? "fadeInLeft" : ""}
								duration={400}>
								<Icon
									name={textInputFocus ? "cancel" : null}
									iconStyle={{ color: "#86939e" }}
									type='material'
									onPress={() => {
										textInput.current.clear();
										// handleSearch()
									}}
									style={styles.icons}
								/>
							</Animatable.View>
						</View>
					</View>

					<FlatList
						data={data}
						renderItem={({ item }) => (
							<TouchableOpacity
								onPress={() => {
									Keyboard.dismiss();
									navigation.navigate("SearchResultScreen", {
										item: item.name,
									});
									setModalVisible(false);
									setTextInputFocus(false);
								}}>
								<View style={styles.view2}>
									<Text style={{ color: "#5e6977", fontSize: 15 }}>
										{item.name}
									</Text>
								</View>
							</TouchableOpacity>
						)}
						keyExtractor={(item) => item.id}
					/>
				</View>
			</Modal>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	text1: {
		fontSize: 16,
		color: "#86939e",
	},
	TextInput: {
		borderWidth: 1,
		borderRadius: 12,
		marginHorizontal: 0,
		borderColor: "#86939e",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
		paddingLeft: 10,
		paddingRight: 10,
		marginTop: 5,
	},
	SearchArea: {
		flexDirection: "row",
		alignItems: "center",
		width: "94%",
		height: 50,
		borderWidth: 1,
		borderRadius: 12,
		backgroundColor: "#e1e8ee",
		paddingLeft: 10,
		paddingRight: 10,
		marginTop: 10,
	},
	searchIcon: {
		fontSize: 24,
		color: "#5e6977",
		padding: 5,
	},
	view1: {
		justifyContent: "center",
		paddingHorizontal: 10,
	},
	view2: {
		justifyContent: "left",
		padding: 15,
		alignItems: "left",
	},
	icons: {
		fontSize: 24,
		padding: 5,
		color: "#5e6977",
	},
	modal: {
		flex: 1,
	},
});
