import React, { Component } from 'react';
import FormControl from '../../components/FormControl/FormControl';
import { View, StyleSheet, Button } from 'react-native';


class LoginForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			loginFormConfigs:{
				email: {
					inputConfig : {
						icon: 'md-mail',
						placeholder: 'Email'
					},
					value: ''
				},
				password: {
					inputConfig : {
						icon: 'md-lock',
						placeholder: 'Password'
					},
					value: ''
				},
			},
			signupFormConfigs:{
				mail: {
					inputConfig : {
						icon: 'md-mail',
						placeholder: 'Email'
					},
					value: ''
				},
				password: {
					inputConfig : {
						icon: 'md-lock',
						placeholder: 'Password'
					},
					value: ''
				},
				confirmPassword: {
					inputConfig : {
						icon: 'md-lock',
						placeholder: 'Confirm Password'
					},
					value: ''
				},
			},
		};
	}

	/*todo
		Implement the function to capture the user inputs
		and test
	*/
	render() {

		const formConfigs = (this.props.authState==='login') ? this.state.loginFormConfigs : this.state.signupFormConfigs;

		const form = Object.keys(formConfigs).map( (inputName, i) => (
				<FormControl 
					key={inputName}
					icon={formConfigs[inputName].inputConfig.icon}
					holder={formConfigs[inputName].inputConfig.placeholder}
				/>
			));

		return (
			<React.Fragment>
				{form}
				<Button 
				  title={ (this.props.authState==='login') ? "Login" : "Signup"} 
				  onPress={()=>this.props.navigation.navigate('Tab')}
				/>
			</React.Fragment>
		);
		
	}
}

const styles = StyleSheet.create({


});

export default LoginForm;