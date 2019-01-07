import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';


class Checkout extends Component {


  render() {
	return (
		<View style={styles.checkoutView}>
			<Text>checkout</Text>
		</View>
	);
  }

} 


const styles = StyleSheet.create({
	checkoutView : {
		flex : 1,
		justifyContent : 'center',
		alignItems : 'center'
	},
});

export default Checkout;

