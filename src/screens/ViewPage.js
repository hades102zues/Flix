import React from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	ScrollView,
	Button
} from "react-native";
import Container from "../components/Container/Container";

const viewPage = props => {
	const imagePath = props.navigation.getParam("posterPath", null);
	const movieName = props.navigation.getParam("movieName", null);
	const description = props.navigation.getParam("description", null);
	const voteCount = props.navigation.getParam("voteCount", null);
	const rating = props.navigation.getParam("rating", null);

	const movieCost = rating * 1.75 + 5.0;

	return (
		<View style={styles.viewPageView}>
			<View style={styles.imageBox}>
				<Image
					source={{
						uri: `https://image.tmdb.org/t/p/w500/${imagePath}`
					}}
					height={null}
					width={null}
					resizeMode="cover"
					style={{ flex: 1 }}
				/>
			</View>
			<View style={styles.movieFacts}>
				<Container>
					<ScrollView>
						<Text style={styles.movieName}>{movieName}</Text>
						<Text style={styles.description}>{description}</Text>

						<View
							style={{
								paddingHorizontal: 15,
								marginTop: 20
							}}
						>
							<View style={styles.voters}>
								<Text
									style={styles.voterMetric}
								>{`${rating} / 10`}</Text>
								<Text
									style={{
										...styles.voterMetric,
										borderLeftWidth: 1,
										borderLeftColor: "#ccc"
									}}
								>
									{`${voteCount} Reviews`}
								</Text>
							</View>
						</View>

						<Text style={styles.cost}>${movieCost.toFixed(2)}</Text>

						<View style={styles.buttonBox}>
							<Button title="Add to Cart" onPress={() => null} />
						</View>
					</ScrollView>
				</Container>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	viewPageView: {
		flex: 1
	},
	imageBox: {
		flex: 1
	},
	movieFacts: {
		flex: 3,
		elevation: 15
	},
	movieName: {
		fontSize: 26,
		marginTop: 20,
		color: "#333",
		fontWeight: "500"
	},
	description: {
		marginTop: 15,
		fontSize: 15,
		color: "#333"
	},
	voters: {
		backgroundColor: "#fafafa",
		height: 40,
		flexDirection: "row",
		borderRadius: 4,
		elevation: 3
	},
	voterMetric: {
		width: "50%",
		fontSize: 15,
		textAlign: "center",
		paddingTop: 10
	},
	cost: {
		color: "#333",
		fontSize: 30,
		fontWeight: "500",
		marginTop: 35,
		textAlign: "center"
	},
	buttonBox: {
		marginHorizontal: 30,
		marginTop: 17,
		marginBottom: 10
	}
});

export default viewPage;
