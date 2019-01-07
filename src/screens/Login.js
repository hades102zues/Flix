import React from 'react';
import { View, Text, StyleSheet} from 'react-native';


const login = () => (
	<View style={styles.loginView}>
		<Text>login</Text>
	</View>
);

const styles = StyleSheet.create({
	loginView : {
		flex : 1,
		justifyContent : 'center',
		alignItems : 'center'
	},
});

export default login;


