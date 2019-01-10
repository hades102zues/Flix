import React from "react";
import {
	View,
	Text,
	Touch,
	StyleSheet,
	StatusBar,
	TextInput
} from "react-native";

const homeHeader = () => (
	<View style={styles.header}>
		<View style={styles.topBar}>
			<View style={styles.topBarLeft}>
				<Text style={styles.topBarLeftText}>Movies</Text>
			</View>
			<View style={styles.topBarRight}>
				<Text style={styles.topBarRightText}>WishList</Text>
			</View>
		</View>
		<View style={{ alignItems: "center", marginTop: 20 }}>
			<TextInput
				placeholder="..Search"
				placeholderTextColor="#333"
				style={styles.searchbar}
			/>
		</View>
	</View>
);

const styles = StyleSheet.create({
	header: {
		paddingBottom: 20
	},
	topBar: {
		flexDirection: "row",
		marginTop: StatusBar.currentHeight + 20
	},
	topBarLeft: {
		width: "50%"
	},
	topBarLeftText: {
		fontWeight: "300",
		fontSize: 30,
		color: "#333"
	},
	topBarRight: {
		width: "50%",
		alignItems: "flex-end"
	},
	topBarRightText: {
		fontWeight: "300",
		fontSize: 15,
		backgroundColor: "#ba68c8",
		color: "white",
		padding: 5,
		borderRadius: 3
	},
	searchbar: {
		width: "100%",
		paddingLeft: 5,
		marginTop: 15,
		backgroundColor: "#ccc",
		borderRadius: 4
	}
});

export default homeHeader;
