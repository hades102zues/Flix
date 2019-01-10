import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import Product from "./Product/Product";

const productList = props => {
	return (
		<View style={styles.productView}>
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
