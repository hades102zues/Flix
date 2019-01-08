import React, { Component } from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import Container from "../components/Container/Container";
import HomeHeader from "../components/HomeHeader/HomeHeader";
import MovieList from "../components/MovieList/MovieList";

class Home extends Component {
	render() {
		return (
			<Container>
				<ScrollView>
					<HomeHeader />
					{/*<View style={{ marginTop: 35 }}></View>*/}
					<MovieList movieListHeight={190} />
				</ScrollView>
			</Container>
		);
	}
}

const styles = StyleSheet.create({});

export default Home;
