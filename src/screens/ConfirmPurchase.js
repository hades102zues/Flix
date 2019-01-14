import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Container from "../components/Container/Container";

class ConfirmPurchase extends Component {
	constructor(props) {
		super(props);
		this.state = {
			wallet: 0
		};
	}

	/*
		Displays Wallet and Price data from server
		and click of button the purchase is carried through ang the cost is deducted,iff
		the user HAS ENOUGH FUNDS
	*/

	render() {
		return (
			<Container>
				<Text style={styles.topBarLeftText}>Wallet : $</Text>
				<Text style={styles.topBarLeftText}>Cost : $</Text>
				<Button title="Confirm" onPress={() => null} color="#00C853" />
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	topBarLeftText: {
		fontWeight: "300",
		fontSize: 30,
		color: "#333",
		marginVertical: 15
	}
});

export default ConfirmPurchase;
