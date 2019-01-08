import React from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableWithoutFeedback,
	Image
} from "react-native";

import { withNavigation } from "react-navigation";

const movie = props => (
	<TouchableWithoutFeedback
		onPress={() =>
			props.navigation.navigate("Viewer", { movieId: props.movieId })
		}
	>
		<View
			style={{
				...styles.imageBox,
				width: props.imageBoxWidth,
				height: props.imageBoxHeight
			}}
		>
			<Image
				source={{
					uri: `https://image.tmdb.org/t/p/w500/${props.imagePath}`
				}}
				height="null"
				width="null"
				style={{ flex: 1, borderRadius: 5 }}
				resizeMode="cover"
			/>
		</View>
	</TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
	imageBox: {
		//flex: 1,

		borderRadius: 3,
		marginRight: 10,
		elevation: 3
	}
});

export default withNavigation(movie);
