import React from 'react';
import { View, Text, StyleSheet} from 'react-native';


const viewPage = () => (
	<View style={styles.viewPageView}>
		<Text>viewPage</Text>
	</View>
);

const styles = StyleSheet.create({
	viewPageView : {
		flex : 1,
		justifyContent : 'center',
		alignItems : 'center'
	},
});

export default viewPage;


