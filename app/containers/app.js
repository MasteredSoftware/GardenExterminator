'use strict';

var React = require('react-native');
var {
	StyleSheet,
	View,
	} = React;

import { connect } from 'react-redux'

import GardenView from './../containers/gardenview.js'
import Scoreboard from './../components/scoreboard.js'

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <View style={styles.container}>
			<Scoreboard score={this.props.score} />
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

const getScore = (hits) => {
	return hits.map((h) => {
		switch (h.type) {
			case 'MISS':
				return -1;
			case 'GOOD':
				return 1;
			case 'BAD':
				return -2;
			default:
				return 0;
		}
	}).reduce((prev, curr) => {
		return prev + curr;
	}, 0);
};

const mapStateToProps = (state) => {
	return {
		...state,
		score: getScore(state.hits)
	}
};

export default connect(
	mapStateToProps
)(App);