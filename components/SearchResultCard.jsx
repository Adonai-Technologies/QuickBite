import {
	View,
	Text,
	StyleSheet,
	ImageBackground,
	TouchableOpacity,
	FlatList,
} from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import ProductCard from "./ProductCard";

export default function SearchResultCard({
	onPressRestaurantCard,
	restaurantName,
	deliveryAvailable,
	discountAvailable,
	discountPercent,
	numberOfReviews,
	bussinessAddress,
	farAway,
	averageReview,
	images,
	restaurantData,
	productData,
}) {
	return (
		<View>
			<View style={styles.view1}>
				<View style={{ height: 150 }}>
					<ImageBackground
						source={images}
						style={{ height: 150 }}
						imageStyle={styles.imageStyle}
					/>

					<View style={styles.image}>
						<Text style={styles.text1}>{averageReview}</Text>
						<Text style={styles.text2}>reviews</Text>
					</View>
				</View>

				<View styles={styles.view3}>
					<View style={{ paddingTop: 5 }}>
						<Text style={styles.text5}>{restaurantName}</Text>
					</View>
					<View style={{ flexDirection: "row" }}>
						<View style={styles.view4}>
							<Icon
								name='map-marker'
								type='material-community'
								size={15}
								color='#000'
								iconStyle={{ marginTop: 3, marginLeft: 5 }}
								onPress={() => {}}
							/>

							<Text style={styles.view5}>{farAway} min</Text>
						</View>
						<View style={{ flex: 9 }}>
							<Text style={styles.text6}>{bussinessAddress}</Text>
						</View>
					</View>
				</View>
			</View>
			<View style={{ marginTop: 5, paddingBottom: 20 }}>
				<FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
					style={{ backgroundColor: "white" }}
					data={productData}
					keyExtractor={(item, index) => index.toString()}
					renderItem={({ item }) => (
						<ProductCard
							productName={item.name}
							image={item.image}
							price={item.price}
						/>
					)}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	view1: {
		marginHorizontal: 9,
		borderTopRightRadius: 5,
		borderTopLeftRadius: 5,
	},
	image: {
		position: "absolute",
		top: 0,
		right: 0,
		backgroundColor: "rgba(52,52,52,0.4)",
		alignItems: "center",
		justifyContent: "center",
		borderTopRightRadius: 5,
		borderTopLeftRadius: 12,
	},
	imageStyle: {
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
	},
	text1: {
		fontSize: 20,
		color: "white",
		fontWeight: "bold",
		paddingTop: -3,
	},
	text2: {
		fontSize: 12,
		color: "white",
		marginRight: 10,
		marginLeft: 10,
	},
	view2: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: -5,
	},

	text3: {
		fontSize: 12,
		color: "white",
		fontWeight: "bold",
	},
	text4: {
		fontSize: 10,
		color: "white",
		fontWeight: "bold",
	},

	view3: {
		flexDirection: "column",
		marginHorizontal: 5,
		marginBottom: 10,
		marginLeft: 0,
		marginTop: 5,
	},
	text5: {
		fontSize: 12,
		color: "#43484d",
		fontWeight: "bold",
	},
	view4: {
		flexDirection: "row",
		borderRightWidth: 1,
		borderRightColor: "#bdc6cf",
		paddingHorizontal: 5,
	},
	view5: {
		fontSize: 12,
		color: "#86939e",
		fontWeight: "bold",
		paddingTop: 5,
		paddingHorizontal: 5,
	},
	text6: {
		fontSize: 12,
		color: "#86939e",
		paddingTop: 5,
		paddingHorizontal: 10,
	},
});
