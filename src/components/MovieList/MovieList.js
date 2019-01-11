import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import Movie from "./Movie/Movie";

class MovieList extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<FlatList
				data={this.props.moviesList}
				keyExtractor={item => item.id.toString()}
				horizontal
				renderItem={({ item }) => (
					<Movie
						key={item.id}
						imageBoxWidth={this.props.imageBoxWidth}
						imageBoxHeight={this.props.imageBoxHeight}
						movieId={item.id}
						movieName={item.title}
						movieVoteCount={item.vote_count}
						rating={item.vote_average}
						imagePath={item.poster_path}
						description={item.overview}
						blockAccess={this.props.blockScreenAccess}
					/>
				)}
			/>
		);
	}
}

const styles = StyleSheet.create({});

export default MovieList;
