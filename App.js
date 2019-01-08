import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NavigationApp from "./src/screens/NavigationApp";
import { useScreens } from "react-native-screens";

useScreens();

export default class App extends React.Component {
	render() {
		return <NavigationApp />;
	}
}
