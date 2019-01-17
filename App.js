import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NavigationApp from "./src/screens/NavigationApp";
import { useScreens } from "react-native-screens";

import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import loginReducer from "./redux/reducers/login";

//useScreens();

const rootReducer = combineReducers({
	login: loginReducer
});

const store = createStore(rootReducer, composeWithDevTools());

const app = (
	<Provider store={store}>
		<NavigationApp />
	</Provider>
);

export default class App extends React.Component {
	render() {
		return app;
	}
}
