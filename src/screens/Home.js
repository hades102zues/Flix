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
			topRatedMovies: [],
			searchMovies: [],
			searchInput: ""
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

	onSearch = () => {
		fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${
				this.state.searchInput
			}&page=1&include_adult=true`
		)
			.then(response => response.json())
			.then(movieList =>
				this.setState({ searchMovies: movieList.results })
			)
			.catch(err => console.log(err));
	};

	onInputChangeHandler = value => {
		this.setState({ searchInput: value }, this.onSearch);
	};

	render() {
		return (
			<Container>
				<ScrollView showsVerticalScrollIndicator={false}>
					<HomeHeader
						inputChanged={this.onInputChangeHandler}
						buttonClicked={this.onSearchButtonPressHandler}
					/>

					{/*
					could possible make this list below reflect what is in the search
					and show a normal list if nothing is there 

				*/}
					<MovieList
						movieListHeight={210} //unecessary
						imageBoxHeight={210}
						imageBoxWidth={140}
						moviesList={
							this.state.searchInput !== ""
								? this.state.searchMovies
								: this.state.latestMovies
						}
					/>
					<View style={styles.favoriteSection}>
						<Text
							style={{
								fontSize: 22,
								marginBottom: 10,
								color: "#333"
							}}
						>
							User Favourites
						</Text>

						<MovieList
							movieListHeight={130} //unecessary
							imageBoxHeight={130}
							imageBoxWidth={90}
							moviesList={this.state.popularMovies}
						/>
					</View>

					<View style={styles.favoriteSection}>
						<Text
							style={{
								fontSize: 22,
								marginBottom: 10,
								color: "#333"
							}}
						>
							Top Rated
						</Text>

						<MovieList
							movieListHeight={130} //unecessary
							imageBoxHeight={130}
							imageBoxWidth={90}
							moviesList={this.state.topRatedMovies}
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
