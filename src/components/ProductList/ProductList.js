import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const productList = () => {
	return (
		<View style={styles.productList}>
			<Text>Here go the cart items</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	productList: {
		marginTop: 20,
		height: 260,
		borderColor: "red",
		borderWidth: 1
	}
});

export default productList;
