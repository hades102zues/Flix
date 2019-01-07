import React from 'react';
import { View, Text, StyleSheet} from 'react-native';


const profile = () => (
	<View style={styles.profileView}>
		<Text>profile</Text>
	</View>
);

const styles = StyleSheet.create({
	profileView : {
		flex : 1,
		justifyContent : 'center',
		alignItems : 'center'
	},
});

export default profile;


