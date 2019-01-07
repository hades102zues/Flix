import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const formControl = (props) => (
	<View style={styles.formControl}>
		<Icon name={props.icon} size={26} color="#ccc" style={{ marginTop:5, marginRight:3}}/>
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
		paddingLeft: 5,
		borderBottomColor: '#ccc',
		borderBottomWidth: 1,
		marginBottom: 30,
	},
	input : {
		width:'95%',
		paddingLeft: 5,
		height: 40,
		flex:1,
		fontWeight: '500'
	}
});

export default formControl;