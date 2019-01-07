import {
	createStackNavigator,
	createBottomTabNavigator,
	createAppContainer
} from 'react-navigation';

import ProfileScreen from './Profile';
import HomeScreen from './Home';
import ViewPageScreen from './ViewPage';
import CheckoutScreen from './Checkout';
import ConfirmPurchaseScreen from './ConfirmPurchase';
import LoginScreen from './Login';


const HomeStack = createStackNavigator({
	Home : {
		screen : HomeScreen,
		navigationOptions : {
			header : null,
		},
	},
	Viewer : ViewPageScreen,
});

const CartStack = createStackNavigator({
	Checkout : {
		screen : CheckoutScreen,
		navigationOptions : {
			header : null,
		},
	},
	ConfirmPurchase : ConfirmPurchaseScreen
});

const TabApp = createBottomTabNavigator({
	Profile : ProfileScreen,
	Home : HomeStack,
	Cart : CartStack

},
{
	initialRouteName : 'Home',
});

const EntryStack = createStackNavigator({
	Login : LoginScreen,
	Tab : TabApp,
},
{
	initialRouteName : 'Login',
	defaultNavigationOptions : {
		header : null,
	},
});


const NavigationApp = createAppContainer(EntryStack);

export default NavigationApp;