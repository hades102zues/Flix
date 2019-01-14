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

import {
	screenListener,
	screenHeight,
	screenHeightPercentage
} from "../UI/ScreenApi/ScreenApi";

class Checkout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			productList: [
				{
					id: 424783,
					title: "Aquaman",
					cost: 7.5,
					posterPath: "/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg"
				},
				{
					id: 405774,
					title: "Bird Box",
					cost: 7.55,
					posterPath: "/rGfGfgL2pEPCfhIvqHXieXFn7gp.jpg"
				},
				{
					id: 504172,
					title: "The Mule",
					cost: 5.55,
					posterPath: "/t0idiLMalKMj2pLsvqHrOM4LPdQ.jpg"
				}
			],
			totalPrice: 0
		};
	}

	componentDidMount() {
		this.calculateProductTotal();
		screenListener(this);
	}

	onClickDeleteHandler = itemId => {
		const productList = this.state.productList;

		const newProductList = productList.filter(
			product => product.id !== itemId
		);

		this.setState({ productList: newProductList }, () => {
			this.calculateProductTotal();
		});
	};

	calculateProductTotal = () => {
		let total = 0.0;

		for (let product of this.state.productList) total += product.cost;
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
