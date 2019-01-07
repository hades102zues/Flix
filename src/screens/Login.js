import React from 'react';
import { View, Text, StyleSheet, StatusBar, Button, TouchableNativeFeedback} from 'react-native';
import Container from '../components/Container/Container';


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

	{/*<LoginForm />*/ }
	</Container>
);

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		marginTop : StatusBar.currentHeight + 60,
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

});

export default login;


