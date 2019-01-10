import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar, Button, Modal } from "react-native";

const modal = () => {
	return (
		<Modal>
			<View style={styles.modal}>
				<Text>Modal</Text>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	modal: {}
});

export default modal;
