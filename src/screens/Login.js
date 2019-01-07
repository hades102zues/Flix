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
			<Text style={{color:"#ccc"}}>Enter your details to continue</Text>
		</View>

		<View style={styles.formCard}>
			<View style={styles.form}>
	    		<LoginForm />
	    	</View>
		</View>
	    
	</Container>
);

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		marginTop : StatusBar.currentHeight + 40,
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
	formCard:{
		alignItems: 'center'
	},
	form: {
		width:'90%',
		marginTop: 50,
		paddingVertical: 25
	},

});

export default login;


