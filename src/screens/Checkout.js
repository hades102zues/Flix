import React, { Component } from "react";
import {
	View,
	Text,
	StyleSheet,
	StatusBar,
	Button,
	ScrollView
} from "react-native";

import Container from "../components/Container/Container";
import ProductList from "../components/ProductList/ProductList";

class Checkout extends Component {
	render() {
		return (
			<Container>
				<ScrollView showsVerticalScrollIndicator={false}>
					<Text style={styles.pageTitle}>Shopping Cart</Text>
					<ProductList />
					<Text style={styles.cost}>$X.XX</Text>
					<View style={styles.buttonBox}>
						<Button
							title="Checkout"
							color="#00C853"
							onPress={() => null}
						/>
					</View>
				</ScrollView>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	pageTitle: {
		marginTop: StatusBar.currentHeight + 10,
		fontWeight: "300",
		textAlign: "center",
		fontSize: 30,
		color: "#333"
	},
	cost: {
		color: "#333",
		fontSize: 30,
		fontWeight: "500",
		marginTop: 20,
		textAlign: "center"
	},
	buttonBox: {
		marginHorizontal: 30,
		marginTop: 5,
		marginBottom: 10
	}
});

export default Checkout;
