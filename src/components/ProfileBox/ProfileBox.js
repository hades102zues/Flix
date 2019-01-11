import React from "react";
import { View, Text, StyleSheet, StatusBar, Image } from "react-native";

const profileBox = () => (
	<View style={styles.userDetails}>
		<View style={{ flexDirection: "row" }}>
			<View style={styles.imageBox}>
				<Image />
			</View>
			<View style={styles.credentials}>
				<Text
					style={{
						fontWeight: "bold",
						color: "#333",
						fontSize: 20
					}}
				>
					Joshua Wiggins
				</Text>
				<Text style={{ color: "#ccc" }}>joshua_kar@hotmail.com</Text>
			</View>
		</View>

		<Text style={styles.walletText}>Wallet : $X.XX</Text>
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
