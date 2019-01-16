import React from "react";
import {
	createStackNavigator,
	createBottomTabNavigator,
	createAppContainer
} from "react-navigation";

import ProfileScreen from "./Profile";
import HomeScreen from "./Home";
import ViewPageScreen from "./ViewPage";
import CheckoutScreen from "./Checkout";
import ConfirmPurchaseScreen from "./ConfirmPurchase";
import LoginScreen from "./Login";

import Icon from "react-native-vector-icons/Ionicons";

const HomeStack = createStackNavigator({
	Home: {
		screen: HomeScreen,
		navigationOptions: {
			header: null
		}
	},
	Viewer: {
		screen: ViewPageScreen,
		navigationOptions: {
			header: null
		}
	}
});

const CartStack = createStackNavigator({
	Checkout: {
		screen: CheckoutScreen,
		navigationOptions: {
			header: null
		}
	},
	ConfirmPurchase: {
		screen: ConfirmPurchaseScreen,
		navigationOptions: {
			title: "Confirm Purchase",
			headerTintColor: "white",
			headerStyle: {
				backgroundColor: "#80cbc4"
			}
		}
	}
});

const TabApp = createBottomTabNavigator(
	{
		Profile: {
			screen: ProfileScreen,
			navigationOptions: {
				tabBarIcon: props => (
					<Icon name="md-person" size={24} color={props.tintColor} />
				)
			}
		},
		Home: {
			screen: HomeStack,
			navigationOptions: {
				tabBarIcon: props => (
					<Icon name="md-home" size={24} color={props.tintColor} />
				)
			}
		},
		Cart: {
			screen: CartStack,
			navigationOptions: {
				tabBarIcon: props => (
					<Icon name="md-cart" size={24} color={props.tintColor} />
				)
			}
		}
	},
	{
		initialRouteName: "Home"
	}
);

const EntryStack = createStackNavigator(
	{
		Login: LoginScreen,
		Tab: TabApp
	},
	{
		initialRouteName: "Login",
		defaultNavigationOptions: {
			header: null
		}
	}
);

const NavigationApp = createAppContainer(EntryStack);

export default NavigationApp;
