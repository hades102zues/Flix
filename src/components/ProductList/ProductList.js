import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import Product from "./Product/Product";

import {
	screenListener,
	screenHeight,
	screenHeightPercentage
} from "../../UI/ScreenApi/ScreenApi";

const productList = props => {
	return (
		<ScrollView contentContainerStyle={styles.productView}>
			<FlatList
				data={props.productList}
				renderItem={({ item }) => (
					<Product
						movieId={item.id}
						movieName={item.title}
						cost={item.cost}
						posterPath={item.posterPath}
						onDeleteButtonPress={props.deleteHandler}
					/>
				)}
				keyExtractor={item => item.id.toString()}
			/>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	productView: {
		height:
			screenHeight > 600
				? screenHeightPercentage(70)
				: screenHeightPercentage(50)
	},
	productList: {
		marginTop: 20,
		height: 260
	}
});

export default productList;
