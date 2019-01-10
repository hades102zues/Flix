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
						uri="https://images.pexels.com/photos/264146/pexels-photo-264146.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
						key={item.id}
						imageBoxWidth={this.props.imageBoxWidth}
						imageBoxHeight={this.props.imageBoxHeight}
						movieId={item.id}
						movieName={item.title}
						movieVoteCount={item.vote_count}
						rating={item.vote_average}
						imagePath={item.poster_path}
						description={item.overview}
					/>
				)}
			/>
		);
	}
}

const styles = StyleSheet.create({});

export default MovieList;
