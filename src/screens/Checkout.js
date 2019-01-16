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
import { BASE_URL } from "../utilities/constants";

import {
	screenListener,
	screenHeight,
	screenHeightPercentage
} from "../UI/ScreenApi/ScreenApi";

class Checkout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			productList: [],
			totalPrice: 0
		};
	}

	componentDidMount() {
		this.fetchCartContents();
		this.props.navigation.addListener("willFocus", () =>
			this.fetchCartContents()
		);
	}

	fetchCartContents = () => {
		fetch(`${BASE_URL}/cart`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email: "joshua_kar@hotmail.com" })
		})
			.then(response => response.json())
			.then(data =>
				this.setState({ productList: data.cart }, () => {
					this.calculateProductTotal();
				})
			)
			.catch(err => console.log(err));
	};

	onClickDeleteHandler = itemId => {
		fetch(`${BASE_URL}/remove-from-cart`, {
			method: "DELETE",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				email: "joshua_kar@hotmail.com",
				movieId: itemId
			})
		}).then(() => this.fetchCartContents());
	};

	calculateProductTotal = () => {
		let total = 0.0;

		for (let product of this.state.productList) total += product.price;
		this.setState({ totalPrice: total.toFixed(2) });
	};

	render() {
		return (
			<Container>
				<ScrollView showsVerticalScrollIndicator={false}>
					<Text style={styles.pageTitle}>Shopping Cart</Text>
					<View
						style={{
							height:
								screenHeight < 400
									? screenHeightPercentage(25)
									: screenHeightPercentage(45)
						}}
					>
						<ProductList
							productList={this.state.productList}
							deleteHandler={this.onClickDeleteHandler}
						/>
					</View>

					<Text style={styles.cost}>
						{`$${this.state.totalPrice}`}
					</Text>
					<View style={styles.buttonBox}>
						<Button
							title="Checkout"
							color="#00C853"
							onPress={() =>
								this.props.navigation.navigate(
									"ConfirmPurchase"
								)
							}
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
