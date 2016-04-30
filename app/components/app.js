'use strict';

var React = require('react-native');
var {
	StyleSheet,
	View,
	} = React;

import GardenView from './../containers/gardenview.js'

class App extends React.Component {
	render() {
		return <View style={styles.container}>
			<GardenView />
		</View>;
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#008000',
	},
});

export default App;