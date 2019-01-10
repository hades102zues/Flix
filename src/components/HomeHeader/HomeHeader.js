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
		<View
			style={{
				flexDirection: "row",
				justifyContent: "center",
				marginTop: 20
			}}
		>
			<TextInput
				placeholder="..Search"
				placeholderTextColor="#333"
				style={styles.searchbar}
				onChangeText={text => {
					props.inputChanged(text);
				}}
			/>
			<TouchableWithoutFeedback onPress={props.buttonClicked}>
				<View style={styles.searchButton}>
					<Icon name="md-search" size={28} color="white" />
				</View>
			</TouchableWithoutFeedback>
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
		width: "75%",
		paddingLeft: 5,
		marginTop: 15,
		backgroundColor: "#ccc",
		borderRadius: 4
	},
	searchButton: {
		width: "10%",
		marginTop: 14,
		backgroundColor: "#42a5f5",
		alignItems: "center",
		borderRadius: 4,
		elevation: 3
	}
});

export default homeHeader;
