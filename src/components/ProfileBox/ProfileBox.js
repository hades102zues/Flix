import React from "react";
import { View, Text, StyleSheet, StatusBar, Image } from "react-native";

const profileBox = props => (
	<View style={styles.userDetails}>
		<View style={{ flexDirection: "row" }}>
			<View style={styles.imageBox}>
				<Image
					source={{
						uri:
							"https://images.pexels.com/photos/1576937/pexels-photo-1576937.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
					}}
					height={null}
					width={null}
					resizeMode="cover"
					style={{ flex: 1 }}
				/>
			</View>
			<View style={styles.credentials}>
				<Text
					style={{
						fontWeight: "bold",
						color: "#333",
						fontSize: 20
					}}
				>
					{props.name}
				</Text>
				<Text style={{ color: "#ccc" }}>{props.email}</Text>
			</View>
		</View>

		<Text style={styles.walletText}>Wallet : ${props.cash}</Text>
	</View>
);

const styles = StyleSheet.create({
	userDetails: {
		backgroundColor: "#eeeeee",
		borderRadius: 5,
		paddingHorizontal: 5,
		paddingVertical: 5,
		elevation: 5
	},
	imageBox: {
		backgroundColor: "#ccc",
		height: 65,
		flex: 1,
		borderRadius: 3,
		marginRight: 10
	},
	credentials: {
		flex: 4
	},
	walletText: {
		marginTop: 10,
		paddingTop: 5,
		width: "100%",
		borderTopColor: "#ccc",
		borderTopWidth: 1
	}
});

export default profileBox;
