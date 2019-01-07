import React, { Component } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';


class Home extends Component {

  render() {
	return (
		<View style={styles.homeView}>
			<Text>home</Text>
		</View>
	);
  }

} 


const styles = StyleSheet.create({
	homeView : {
		flex : 1,
		justifyContent : 'center',
		alignItems : 'center'
	},
});

export default Home;


