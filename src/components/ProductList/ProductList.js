import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import Product from "./Product/Product";

const productList = () => {
	return (
		<View style={styles.productView}>
			<ScrollView>
				<Product
					movieName="Moivename"
					cost="X.XX"
					posterPath="https://images.pexels.com/photos/573892/pexels-photo-573892.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
				/>
				<Product
					movieName="Moivename"
					cost="X.XX"
					posterPath="https://images.pexels.com/photos/573892/pexels-photo-573892.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
				/>
				<Product
					movieName="Moivename"
					cost="X.XX"
					posterPath="https://images.pexels.com/photos/573892/pexels-photo-573892.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
				/>
				<Product
					movieName="Moivename"
					cost="X.XX"
					posterPath="https://images.pexels.com/photos/573892/pexels-photo-573892.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
				/>
				<Product
					movieName="Moivename"
					cost="X.XX"
					posterPath="https://images.pexels.com/photos/573892/pexels-photo-573892.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
				/>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	productView: {
		height: 280
	},
	productList: {
		marginTop: 20,
		height: 260
	}
});

export default productList;
