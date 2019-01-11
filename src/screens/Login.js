import React, { Component } from "react";
import {
	View,
	Text,
	StyleSheet,
	StatusBar,
	Button,
	TouchableNativeFeedback,
	ScrollView
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
				<ScrollView>
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
					{/*error messg goes here*/}
					<View style={styles.formCard}>
						<View style={styles.form}>
							<LoginForm authState={authState} {...this.props} />
						</View>
					</View>
				</ScrollView>
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
	errorMessage: {
		backgroundColor: "#e53935",
		position: "relative",
		zIndex: 3
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
// <View style={styles.errorMessage}>
// 	<Text>Error</Text>
// </View>
