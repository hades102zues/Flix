import React, { Component } from "react";
import FormControl from "../../components/FormControl/FormControl";
import { View, StyleSheet, Button } from "react-native";

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
				mail: {
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
			}
		};
	}

	onTextInputHandler = (incomingValue, inputName) => {
		if (this.props.authState === "login") {
			const newObj = {
				...this.state.loginFormConfigs,
				[inputName]: {
					...this.state.loginFormConfigs[inputName],
					value: incomingValue
				}
			};

			this.setState({ loginFormConfigs: newObj });
		} else {
			const newObj = {
				...this.state.signupFormConfigs,
				[inputName]: {
					...this.state.signupFormConfigs[inputName],
					value: incomingValue
				}
			};

			this.setState({ signupFormConfigs: newObj });
		}
	};

	/*todo
		setup onpress handler to button
		to send request to server
	*/

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

		return (
			<React.Fragment>
				{form}
				<Button
					title={
						this.props.authState === "login" ? "Login" : "Signup"
					}
					onPress={() => this.props.navigation.navigate("Tab")}
				/>
			</React.Fragment>
		);
	}
}

const styles = StyleSheet.create({});

export default LoginForm;
