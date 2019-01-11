import React, { Component } from "react";
import {
	View,
	Text,
	StyleSheet,
	StatusBar,
	Image,
	ScrollView
} from "react-native";
import ProfileBox from "../components/ProfileBox/ProfileBox";
import MovieList from "../components/MovieList/MovieList";

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			purchases: [
				{
					id: 424783,
					poster_path: "/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg"
				},
				{
					id: 405774,
					poster_path: "/rGfGfgL2pEPCfhIvqHXieXFn7gp.jpg"
				},
				{
					id: 504172,
					poster_path: "/t0idiLMalKMj2pLsvqHrOM4LPdQ.jpg"
				}
			]
		};
	}
	render() {
		return (
			<View style={styles.profileView}>
				<View style={styles.profileBox}>
					<Text style={styles.profileText}>Profile</Text>
				</View>
				<View style={styles.floatBox}>
					<ProfileBox
						name="Joshua Wiggins"
						email="joshua_kar@hotmail.com"
						cash="X.XX"
					/>
					<View style={styles.scrollView}>
						<Text>Purchased:</Text>
						<MovieList
							imageBoxHeight={210}
							imageBoxWidth={140}
							moviesList={this.state.purchases}
							blockScreenAccess
						/>
					</View>
				</View>
				<View style={styles.secondHalf} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	profileView: {
		flex: 1,
		backgroundColor: "#eeeeee"
	},
	profileBox: {
		flex: 1,
		backgroundColor: "blue",
		paddingHorizontal: 15
	},
	profileText: {
		fontWeight: "700",
		fontSize: 30,
		color: "white",
		marginTop: StatusBar.currentHeight + 20
	},
	floatBox: {
		width: "100%",
		paddingHorizontal: 15,
		position: "absolute",
		top: "22%"
	},
	scrollView: {
		height: 240,
		marginTop: 10
	},
	secondHalf: {
		flex: 2
	}
});

export default Profile;
