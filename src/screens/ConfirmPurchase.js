import React from 'react';
import { View, Text, StyleSheet} from 'react-native';


const confirmPurchase = () => (
	<View style={styles.confirmPurchaseView}>
		<Text>confirmPurchase</Text>
	</View>
);

const styles = StyleSheet.create({
	confirmPurchaseView : {
		flex : 1,
		justifyContent : 'center',
		alignItems : 'center'
	},
});

export default confirmPurchase;


