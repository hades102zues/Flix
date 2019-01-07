import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const formControl = (props) => (
	<View style={styles.formControl}>
		<Icon name={props.icon} size={26} color="#ccc" style={{marginTop:9, marginRight:3}}/>
		<TextInput 
			placeholder = {props.holder}
			placeholderTextColor = "#ccc"
			style={styles.input}
			value={props.value}
		/>
	</View>
);

const styles = StyleSheet.create({
	formControl:{
		flexDirection: 'row',
		paddingLeft: 5
	},
	input : {
		borderBottomColor: '#ccc',
		borderBottomWidth: 1,
		width:'95%',
		paddingLeft: 5,
		marginBottom: 20,
		height: 40,
		fontWeight: '300'
	}
});

export default formControl;