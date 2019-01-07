import React, { Component } from 'react';
import FormControl from '../../components/FormControl/FormControl';
import { View, StyleSheet } from 'react-native';


class LoginForm extends Component {

	constructor(props) {
		super(props);
		this.state = {

		};
	}

	render() {
		return (
			<React.Fragment>
				<FormControl 
					icon="md-mail"
					holder="Email"
				/>
				<FormControl />
				<FormControl />
			</React.Fragment>
		);
		
	}
}

const styles = StyleSheet.create({


});

export default LoginForm;