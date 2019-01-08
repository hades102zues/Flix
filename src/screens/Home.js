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
			latestMovies: []
		};
	}
	componentDidMount() {
		fetch(
			`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
		)
			.then(response => response.json())
			.then(list => this.setState({ latestMovies: list.results }))
			.catch(err => alert("Error getting Latest Movies"));
	}

	render() {
		return (
			<Container>
				<ScrollView>
					<HomeHeader />
					{/*<View style={{ marginTop: 35 }}></View>*/}
					<MovieList
						movieListHeight={190}
						latestMoviesList={this.state.latestMovies}
					/>
				</ScrollView>
			</Container>
		);
	}
}

const styles = StyleSheet.create({});

export default Home;
