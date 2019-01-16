import React, { Component } from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	ScrollView,
	Button,
	StatusBar,
	TouchableWithoutFeedback,
	TouchableNativeFeedback
} from "react-native";
import Container from "../components/Container/Container";
import Icon from "react-native-vector-icons/Ionicons";

import { BASE_URL } from "../utilities/constants";

class ViewPage extends Component {
	constructor(props) {
		super(props);
	}

	onCartButtonPressHandler = () => {
		const price =
			this.props.navigation.getParam("rating", null) * 1.75 + 5.0;
		fetch(`${BASE_URL}/add-to-cart`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: "key"
			},
			body: JSON.stringify({
				email: "joshua_kar@hotmail.com",
				movieId: this.props.navigation.getParam("movieId", null),
				name: this.props.navigation.getParam("movieName", null),
				posterPath: this.props.navigation.getParam("posterPath", null),
				price: price.toFixed(2)
			})
		})
			.then(
				response =>
					(response.status = "200" ? alert("Added to Cart") : null)
			)
			.catch(err => console.log(err));
	};

	render() {
		const imagePath = this.props.navigation.getParam("posterPath", null);
		const movieName = this.props.navigation.getParam("movieName", null);
		const description = this.props.navigation.getParam("description", null);
		const voteCount = this.props.navigation.getParam("voteCount", null);
		const rating = this.props.navigation.getParam("rating", null);

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
					<TouchableWithoutFeedback
						onPress={() => this.props.navigation.goBack()}
					>
						<View style={styles.iconBox}>
							<Icon name="md-arrow-back" size={24} color="#333" />
						</View>
					</TouchableWithoutFeedback>
				</View>

				<View style={styles.movieFacts}>
					<Container>
						<ScrollView>
							<Text style={styles.movieName}>{movieName}</Text>
							<Text style={styles.description}>
								{description}
							</Text>

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

							<Text style={styles.cost}>
								${movieCost.toFixed(2)}
							</Text>

							<View style={styles.buttonBox}>
								<Button
									title="Add to Cart"
									color="#00C853"
									onPress={this.onCartButtonPressHandler}
								/>
							</View>
						</ScrollView>
					</Container>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	viewPageView: {
		flex: 1
	},
	imageBox: {
		flex: 1
	},
	iconBox: {
		position: "absolute",
		top: StatusBar.currentHeight + 10,
		left: 10,
		width: 40
	},
	movieFacts: {
		flex: 3,
		elevation: 30
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

export default ViewPage;
