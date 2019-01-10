import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

const product = props => (
	<View style={styles.product}>
		<View style={styles.imageBox}>
			<Image
				source={{
					uri: `https://image.tmdb.org/t/p/w500/${props.posterPath}`
				}}
				height={null}
				width={null}
				style={{ flex: 1 }}
			/>
		</View>
		<View style={styles.details}>
			<Text style={styles.movieName}>{props.movieName}</Text>
			<Text style={styles.cost}>{`$${props.cost.toFixed(2)}`}</Text>
			<View style={{ alignItems: "flex-end" }}>
				<View style={styles.buttonBox}>
					<Button
						title="Delete"
						color="#f44336"
						onPress={() => {
							props.onDeleteButtonPress(props.movieId);
						}}
					/>
				</View>
			</View>
		</View>
	</View>
);

const styles = StyleSheet.create({
	product: {
		flexDirection: "row",
		backgroundColor: "#fafafa",
		marginTop: 10,
		borderRadius: 3
	},
	imageBox: {
		width: "35%"
	},
	details: {
		width: "65%",
		paddingLeft: 5
	},
	movieName: {
		fontSize: 16,
		marginTop: 10,
		color: "#333",
		fontWeight: "500"
	},
	cost: {
		color: "#333",
		fontSize: 15,
		fontWeight: "300",
		marginTop: 20
	},
	buttonBox: {
		width: "40%",
		marginRight: 5,
		marginBottom: 10
	}
});

export default product;
