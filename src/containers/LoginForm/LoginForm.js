import React, { Component } from 'react';
import FormControl from '../../components/FormControl/FormControl';
import { View, StyleSheet, Button } from 'react-native';


class LoginForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			formConfigs:{
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
		};
	}

	render() {

		const formConfigs = this.state.formConfigs;

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
				<Button title="Login" onPress={()=>null}/>
			</React.Fragment>
		);
		
	}
}

const styles = StyleSheet.create({


});

export default LoginForm;