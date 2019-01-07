import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const container = (props) => (
	<View style={styles.page}>
	<View style={styles.container}>
		{props.children}
	</View>
	</View>
);

const styles = StyleSheet.create({
	page:{
		backgroundColor:'#fafafa',
		flex:1
	},
	container : {
		marginHorizontal : 15,
	},
});

export default container;