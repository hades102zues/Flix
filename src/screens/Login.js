import React, { Component } from "react";
import {
	View,
	Text,
	StyleSheet,
	StatusBar,
	Button,
	TouchableNativeFeedback
} from "react-native";

import Container from "../components/Container/Container";
import LoginForm from "../containers/LoginForm/LoginForm";

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isAuthStateLogin: true
		};
	}

	toggleAuthState = () => {
		this.setState({ isAuthStateLogin: !this.state.isAuthStateLogin });
	};

	render() {
		let authText =
			this.state.isAuthStateLogin === true ? "SignUp" : "Login";
		let authState =
			this.state.isAuthStateLogin === true ? "login" : "signup";

		return (
			<Container>
				<View style={styles.header}>
					<Text style={styles.welcomeText}>Welcome Back,</Text>

					<TouchableNativeFeedback onPress={this.toggleAuthState}>
						<Text style={styles.authText}>{authText}</Text>
					</TouchableNativeFeedback>
				</View>

				<View>
					<Text style={{ color: "#ccc" }}>
						Enter your details to continue
					</Text>
				</View>

				<View style={styles.formCard}>
					<View style={styles.form}>
						<LoginForm authState={authState} {...this.props} />
					</View>
				</View>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	header: {
		flexDirection: "row",
		marginTop: StatusBar.currentHeight + 40
	},
	welcomeText: {
		width: "50%",
		fontWeight: "700",
		fontSize: 34,
		color: "#333"
	},
	authText: {
		width: "50%",
		textAlign: "right",
		color: "#ec407a"
	},
	formCard: {
		alignItems: "center"
	},
	form: {
		width: "90%",
		marginTop: 50,
		paddingVertical: 25
	}
});

export default Login;
