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
		<FlatList
			data={props.productList}
			renderItem={({ item }) => (
				<Product
					movieId={item.movieId}
					movieName={item.movieName}
					cost={item.price}
					posterPath={item.posterPath}
					onDeleteButtonPress={props.deleteHandler}
				/>
			)}
			keyExtractor={item => item._id.toString()}
		/>
	);
};

const styles = StyleSheet.create({});

export default productList;
