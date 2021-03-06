import { Dimensions, PixelRatio } from "react-native";

export let screenHeight = Dimensions.get("window").height;
export let screenWidth = Dimensions.get("window").width;

export const screenWidthPercentage = perc => {
	return PixelRatio.roundToNearestPixel(screenWidth * (perc / 100));
};

export const screenHeightPercentage = perc => {
	return PixelRatio.roundToNearestPixel(screenHeight * (perc / 100));
};

export const screenListener = that =>
	Dimensions.addEventListener("change", () => {
		screenHeight = Dimensions.get("window").height;
		screenWidth = Dimensions.get("window").width;
		that.setState({ screen: 1 });
	});

//automatically merges an object to state to force an update
//place the follow function call in component did mount : screenListener(this);
//all dynamics must be placed directly in style object and not in object created
//in stylesheet
