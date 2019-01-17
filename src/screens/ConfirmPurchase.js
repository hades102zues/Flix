import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Container from "../components/Container/Container";

import { BASE_URL } from "../utilities/constants";
import { connect } from "react-redux";

class ConfirmPurchase extends Component {
	constructor(props) {
		super(props);
		this.state = {
			wallet: 0,
			cartCost: 0,
			message: ""
		};
	}

	componentDidMount() {
		this.fetchContent();
		this.props.navigation.addListener("willFocus", () =>
			this.fetchContent()
		);
	}

	fetchContent = () => {
		fetch(`${BASE_URL}/pre-checkout`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer = ${this.props.token}`
			},
			body: JSON.stringify({ email: this.props.userEmail })
		})
			.then(response => response.json())
			.then(data =>
				this.setState({ wallet: data.wallet, cartCost: data.cartCost })
			)
			.catch(err => console.log(err));
	};

	onButtonCheckoutHandler = () => {
		fetch(`${BASE_URL}/confirm-purchase`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer = ${this.props.token}`
			},
			body: JSON.stringify({ email: this.props.userEmail })
		})
			.then(response =>
				response.status === "200"
					? this.props.navigation.navigate("Home")
					: response.json()
			)
			.then(data => this.setState({ message: data.message }))
			.catch(err => console.log(err));
	};

	render() {
		return (
			<Container>
				{this.state.message ? (
					<View style={styles.authMessageBox}>
						<Text style={{ fontWeight: "500", fontSize: 40 }}>
							{this.state.message}
						</Text>
					</View>
				) : null}

				<Text style={styles.topBarLeftText}>
					{` Wallet :$${this.state.wallet}`}
				</Text>
				<Text style={styles.topBarLeftText}>
					{` Cost :$${this.state.cartCost}`}
				</Text>

				<Button
					title="Confirm"
					onPress={this.onButtonCheckoutHandler}
					color="#00C853"
				/>
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
	},
	authMessageBox: {
		borderWidth: 1,
		borderColor: "#d50000",
		backgroundColor: "#e57373",
		padding: 5,
		marginVertical: 10,
		alignItems: "center"
	}
});
const mapStateToProps = state => {
	return {
		userEmail: state.login.email,
		token: state.login.token
	};
};

export default connect(mapStateToProps)(ConfirmPurchase);
