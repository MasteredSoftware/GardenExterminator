'use strict';

var React = require('react-native');
var {
	StyleSheet,
	View,
	} = React;

var GardenView = require('./gardenview.js');

var Main = React.createClass({
	render() {
		return <View style={styles.container}>
			<GardenView/>
		</View>;
	},
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#008000',
	},
});

module.exports = Main;