import React, { Component } from "react";
import {
	View,
	Text,
	StyleSheet,
	StatusBar,
	Image,
	ScrollView,
	Dimensions
} from "react-native";
import ProfileBox from "../components/ProfileBox/ProfileBox";

import MovieList from "../components/MovieList/MovieList";
import {
	screenListener,
	screenHeight,
	screenHeightPercentage
} from "../UI/ScreenApi/ScreenApi";

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

	componentDidMount() {
		screenListener(this, this.state.screenChange);
	}

	render() {
		return (
			<View style={styles.profileView}>
				<View style={styles.profileBox}>
					<Text style={styles.profileText}>Profile</Text>
				</View>
				<View
					style={{
						...styles.floatBox,
						height:
							screenHeight < 500
								? screenHeightPercentage(55)
								: null,

						top:
							screenHeight > 600
								? screenHeightPercentage(10)
								: screenHeight > 400
								? screenHeightPercentage(22)
								: screenHeightPercentage(26)
					}}
				>
					<ScrollView contentContainerStyle={styles.scrollView}>
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
					</ScrollView>
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
		backgroundColor: "#1e88e5",
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
		position: "absolute"
	},
	scrollView: {},
	secondHalf: {
		flex: screenHeight > 600 ? 4 : 2
	}
});

export default Profile;

//an outer view with a fixed height, D
// the content generated in the scrollview must exceed D
//
