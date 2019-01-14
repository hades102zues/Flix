import React from "react";
import {
	View,
	Text,
	Touch,
	StyleSheet,
	StatusBar,
	TextInput,
	TouchableWithoutFeedback
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const homeHeader = props => (
	<View style={styles.header}>
		<View style={styles.topBar}>
			<View style={styles.topBarLeft}>
				<Text style={styles.topBarLeftText}>Movies</Text>
			</View>
			<View style={styles.topBarRight}>
				<Text style={styles.topBarRightText}>WishList</Text>
			</View>
		</View>

		<View style={styles.searchArea}>
			<TextInput
				placeholder="..Search"
				placeholderTextColor="#333"
				style={styles.searchbar}
				onChangeText={text => {
					props.inputChanged(text);
				}}
			/>
			<View style={styles.searchButton}>
				<Icon name="md-search" size={28} color="#333" />
			</View>
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
	searchArea: {
		flexDirection: "row",
		marginTop: 20,
		backgroundColor: "#ccc",
		marginHorizontal: 20,
		borderRadius: 4
	},
	searchbar: {
		width: "85%",
		paddingLeft: 5,
		flex: 6
	},
	searchButton: {
		flex: 1,
		alignItems: "center",
		borderRadius: 4
	}
});

export default homeHeader;
