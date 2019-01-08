import React, { Component } from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import Container from "../components/Container/Container";
import HomeHeader from "../components/HomeHeader/HomeHeader";
import MovieList from "../components/MovieList/MovieList";

const API_KEY = "0dafe06101d3538149cbfe11c6db5ff6";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			latestMovies: [],
			popularMovies: [],
			topRatedMovies: []
		};
	}
	componentDidMount() {
		fetch(
			`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
		)
			.then(response => response.json())
			.then(list => this.setState({ latestMovies: list.results }))
			.catch(err => alert("Error getting Latest Movies"));

		fetch(
			`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1
`
		)
			.then(response => response.json())
			.then(list => this.setState({ popularMovies: list.results }))
			.catch(err => alert("Error getting Popular Movies"));

		fetch(
			`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
		)
			.then(response => response.json())
			.then(list => this.setState({ topRatedMovies: list.results }))
			.catch(err => alert("Error getting Top Rated Movies"));
	}

	render() {
		return (
			<Container>
				<ScrollView>
					<HomeHeader />
					{/*<View style={{ marginTop: 35 }}></View>*/}
					<MovieList
						movieListHeight={210}
						imageBoxWidth={140}
						latestMoviesList={this.state.latestMovies}
					/>
					<View style={styles.favoriteSection}>
						<Text style={{ fonstSize: 22, marginBottom: 10 }}>
							User Favourites
						</Text>

						<MovieList
							movieListHeight={120}
							imageBoxWidth={90}
							latestMoviesList={this.state.popularMovies}
						/>
					</View>

					<View style={styles.favoriteSection}>
						<Text style={{ fonstSize: 22, marginBottom: 10 }}>
							Top Rated
						</Text>

						<MovieList
							movieListHeight={130}
							imageBoxWidth={110}
							latestMoviesList={this.state.topRatedMovies}
						/>
					</View>
				</ScrollView>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	favoriteSection: {
		marginTop: 15,
		paddingVertical: 10
	}
});

export default Home;
