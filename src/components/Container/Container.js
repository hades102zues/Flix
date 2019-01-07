import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const container = (props) => (
	<View style={styles.container}>
		{props.children}
	</View>
);

const styles = StyleSheet.create({
	container : {
		marginHorizontal : 15,
	},
});

export default container;