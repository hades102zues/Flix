import React from 'react';
import { View, Text, StyleSheet, StatusBar, Button, TouchableNativeFeedback} from 'react-native';

import Container from '../components/Container/Container';
import LoginForm from '../containers/LoginForm/LoginForm';

const login = () => (
	<Container>
		<View style={styles.header}>
			<Text style={styles.welcomeText}>Welcome Back,</Text>
			<TouchableNativeFeedback onPress={ ()=> alert('hi')}>
			<Text style={styles.authText}>Sign Up</Text>
			</TouchableNativeFeedback>
		</View>

		<View>
			<Text>Enter your details to continue</Text>
		</View>

	    <View style={styles.form}>
	    	<LoginForm />
	    </View>
	</Container>
);

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		marginTop : StatusBar.currentHeight + 90,
	},
	welcomeText: {
		width: '50%',
		fontWeight: '700',
		fontSize: 34,
	},
	authText : {
		width: '50%', 
		textAlign:'right',
		color: '#ec407a'
	},
	form: {
		borderWidth: 1,
		borderColor: 'red',
		marginTop: 100,
		paddingVertical: 25
	},

});

export default login;


