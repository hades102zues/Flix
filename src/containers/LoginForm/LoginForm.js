import React, { Component } from "react";
import FormControl from "../../components/FormControl/FormControl";
import { View, StyleSheet, Button, Text } from "react-native";
import { BASE_URL } from "../../utilities/constants";

import { connect } from "react-redux";

import { storeQueryDetails } from "../../../redux/actions/login";

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loginFormConfigs: {
				email: {
					inputConfig: {
						icon: "md-mail",
						placeholder: "Email"
					},
					value: ""
				},
				password: {
					inputConfig: {
						icon: "md-lock",
						placeholder: "Password"
					},
					value: ""
				}
			},
			signupFormConfigs: {
				name: {
					inputConfig: {
						icon: "md-person",
						placeholder: "Full Name"
					},
					value: ""
				},
				email: {
					inputConfig: {
						icon: "md-mail",
						placeholder: "Email"
					},
					value: ""
				},
				password: {
					inputConfig: {
						icon: "md-lock",
						placeholder: "Password"
					},
					value: ""
				},
				confirmPassword: {
					inputConfig: {
						icon: "md-lock",
						placeholder: "Confirm Password"
					},
					value: ""
				}
			},
			authMessages: []
		};
	}

	onTextInputHandler = (incomingValue, inputName) => {
		if (this.props.authState === "login") {
			const configs = this.state.loginFormConfigs[inputName];
			configs.value = incomingValue;

			const newLoginFormConfigs = this.state.loginFormConfigs;
			newLoginFormConfigs[inputName] = configs;

			this.setState({ loginFormConfigs: newLoginFormConfigs });

			// const newObj = {
			// 	[inputName]: {
			// 		...this.state.loginFormConfigs[inputName],
			// 		value: incomingValue
			// 	},
			// 	...this.state.loginFormConfigs
			// };
		} else {
			const configs = this.state.signupFormConfigs[inputName];
			configs.value = incomingValue;

			const newSignupFormConfigs = this.state.signupFormConfigs;
			newSignupFormConfigs[inputName] = configs;

			this.setState({ signupFormConfigs: newSignupFormConfigs });
		}
	};

	/*todo
		setup onpress handler to button
		to send request to server based on the auth state
	*/
	onButtonPressHandler = () => {
		if (this.props.authState === "login") {
			fetch(`${BASE_URL}/login`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					email: this.state.loginFormConfigs.email.value,
					password: this.state.loginFormConfigs.password.value
				})
			})
				.then(response => response.json())
				.then(data => {
					if (data.token) {
						//server has authenticated the user
						this.props.storeDetailsForServer({
							email: this.state.loginFormConfigs.email.value,
							token: data.token
						});
						return this.props.navigation.navigate("Tab");
					}
					if (data.message.length)
						//server did not authenticate user
						this.setState({ authMessages: data.message });
				})
				.catch(err => console.log(err));
		} else {
			fetch(`${BASE_URL}/signup`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name: this.state.signupFormConfigs.name.value,
					email: this.state.signupFormConfigs.email.value,
					password: this.state.signupFormConfigs.password.value,
					confirmPassword: this.state.signupFormConfigs
						.confirmPassword.value
				})
			})
				.then(response => response.json())
				.then(data => {
					if (data.token) {
						//server has authenticated the user
						this.props.storeDetailsForServer({
							email: this.state.loginFormConfigs.email.value,
							token: data.token
						});
						return this.props.navigation.navigate("Tab");
					}
					if (data.message.length)
						this.setState({ authMessages: data.message });
				})
				.catch(err => console.log(err));
		}
	};

	render() {
		const formConfigs =
			this.props.authState === "login"
				? this.state.loginFormConfigs
				: this.state.signupFormConfigs;

		const form = Object.keys(formConfigs).map(inputName => (
			<FormControl
				key={inputName}
				inputName={inputName}
				icon={formConfigs[inputName].inputConfig.icon}
				holder={formConfigs[inputName].inputConfig.placeholder}
				value={formConfigs[inputName].value}
				textCatcher={this.onTextInputHandler}
			/>
		));

		const authMessages = this.state.authMessages.map((message, i) => (
			<Text key={i}>{message}</Text>
		));

		return (
			<React.Fragment>
				{authMessages.length ? (
					<View style={styles.authMessageBox}>{authMessages}</View>
				) : null}
				{form}
				<Button
					title={
						this.props.authState === "login" ? "Login" : "Signup"
					}
					onPress={this.onButtonPressHandler}
				/>
			</React.Fragment>
		);
	}
}

const styles = StyleSheet.create({
	authMessageBox: {
		borderWidth: 1,
		borderColor: "#d50000",
		backgroundColor: "#e57373",
		padding: 5,
		marginBottom: 4
	}
});

const mapStateToProps = state => {
	return {
		token: state.login.token
	};
};

const mapDispatchToProps = dispatch => {
	return {
		storeDetailsForServer: details => dispatch(storeQueryDetails(details))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginForm);
