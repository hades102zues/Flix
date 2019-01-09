import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Container from "../components/Container/Container";

const viewPage = props => {
	const imagePath = props.navigation.getParam("posterPath", null);
	const movieName = props.navigation.getParam("movieName", null);
	const description = props.navigation.getParam("description", null);

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

						<View style={styles.voters}>
							<Text style={styles.voterMetric} />
							<Text style={styles.voterMetric} />
						</View>

						<Text style={styles.cost}>$X.XX</Text>
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
		elevation: 5
	},
	movieName: {
		fontSize: 26,
		marginTop: 20,
		color: "#333",
		fontWeight: "500"
	},
	description: {
		marginTop: 15,
		fontSize: 22,
		color: "#333"
	},
	voters: {
		backgroundColor: "#fafafa",
		height: 70
	},
	voterMetric: {
		width: "50%"
	},
	cost: {
		color: "#333",
		fontSize: 30,
		fontWeight: "500"
	}
});

export default viewPage;
