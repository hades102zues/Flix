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
import { BASE_URL } from "../utilities/constants";
import MovieList from "../components/PurchaseList/MovieList";
import {
	screenListener,
	screenHeight,
	screenHeightPercentage
} from "../UI/ScreenApi/ScreenApi";

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			wallet: 0,
			purchases: [
				{
					movieId: 424783,
					posterPath: "/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg"
				},
				{
					movieId: 405774,
					posterPath: "/rGfGfgL2pEPCfhIvqHXieXFn7gp.jpg"
				},
				{
					movieId: 504172,
					posterPath: "/t0idiLMalKMj2pLsvqHrOM4LPdQ.jpg"
				}
			]
		};
	}

	componentDidMount() {
		screenListener(this, this.state.screenChange);
		fetch(`${BASE_URL}/profile`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email: "joshua_kar@hotmail.com" })
		})
			.then(response => response.json())
			.then(data =>
				this.setState({
					name: data.data.name,
					email: data.data.email,
					wallet: data.data.wallet,
					purchases: data.data.purchaseHistory
				})
			)
			.catch(err => console.log(err));
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
								? screenHeightPercentage(18)
								: screenHeightPercentage(26)
					}}
				>
					<ProfileBox
						name={this.state.name}
						email={this.state.email}
						cash={this.state.wallet}
					/>
					<ScrollView contentContainerStyle={styles.scrollView}>
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
	scrollView: { marginTop: 10 },
	secondHalf: {
		flex: screenHeight > 600 ? 4 : 2
	}
});

export default Profile;

//an outer view with a fixed height, D
// the content generated in the scrollview must exceed D
//
