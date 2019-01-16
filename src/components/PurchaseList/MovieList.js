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
				keyExtractor={item => item._id.toString()} //change to _id
				horizontal
				renderItem={({ item }) => (
					<Movie
						key={item.id}
						imageBoxWidth={this.props.imageBoxWidth}
						imageBoxHeight={this.props.imageBoxHeight}
						movieId={item.movieId}
						movieName={item.movieName}
						imagePath={item.posterPath}
						//below are not used
						movieVoteCount={item.vote_count}
						rating={item.vote_average}
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
