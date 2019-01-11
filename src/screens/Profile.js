import React from "react";
import {
	View,
	Text,
	StyleSheet,
	StatusBar,
	Image,
	ScrollView
} from "react-native";
import ProfileBox from "../components/ProfileBox/ProfileBox";

const profile = () => {
	return (
		<View style={styles.profileView}>
			<View style={styles.profileBox}>
				<Text style={styles.profileText}>Profile</Text>
			</View>
			<View style={styles.floatBox}>
				<ProfileBox
					name="Joshua Wiggins"
					email="joshua_kar@hotmail.com"
					cash="X.XX"
				/>
				<ScrollView contentContainerStyle={styles.scrollView}>
					<View style={{ flex: 1, flexWrap: "wrap" }} />
				</ScrollView>
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
	scrollView: {
		height: 240,
		marginTop: 10,
		elevation: 2,
		borderRadius: 5
	},
	secondHalf: {
		flex: 2
	}
});

export default profile;
