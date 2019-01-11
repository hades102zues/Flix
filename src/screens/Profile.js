import React from "react";
import { View, Text, StyleSheet, StatusBar, Image } from "react-native";
import ProfileBox from "../components/ProfileBox/ProfileBox";

const profile = () => {
	return (
		<View style={styles.profileView}>
			<View style={styles.profileBox}>
				<Text style={styles.profileText}>Profile</Text>
			</View>
			<View style={styles.floatBox}>
				<ProfileBox />
			</View>
			<View style={styles.secondHalf} />
		</View>
	);
};

const styles = StyleSheet.create({
	profileView: {
		flex: 1,
		backgroundColor: "#eeeeee"
	},
	profileBox: {
		flex: 1,
		backgroundColor: "blue",
		paddingHorizontal: 15
	},
	profileText: {
		fontWeight: "700",
		fontSize: 30,
		color: "white",
		marginTop: StatusBar.currentHeight + 20
	},
	floatBox: {
		width: "100%",
		paddingHorizontal: 15,
		position: "absolute",
		top: "22%"
	},

	secondHalf: {
		flex: 2
	}
});

export default profile;
