'use strict';

var React = require('react-native');
var {
	Component,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Animated,
	Easing,
	} = React;

import { connect } from 'react-redux'
import { hitNone, hitBad, hitGood } from '../actions'
import constants, {getEmojiType} from '../../shared'

var Tile = require('./../components/tile.js');

var {width, height} = require('Dimensions').get('window');//get window dimensions

var CELL_SIZE = Math.floor(width / constants.MAX_GRID_SIZE); // base cell size on screen width
var CELL_PADDING = Math.floor(CELL_SIZE * .05); // 5% of the cell size
var BORDER_RADIUS = CELL_PADDING * 8;
var TILE_SIZE = CELL_SIZE - CELL_PADDING * 2;
var LETTER_SIZE = Math.floor(TILE_SIZE * .75);

class GardenView extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <View style={styles.container}>
			{this.renderTiles()}
		</View>;
	}

	renderTiles() {
		var result = [];
		this.props.tiles.forEach((t) => {
			var left = t.col * CELL_SIZE + CELL_PADDING,
				top = t.row * CELL_SIZE + CELL_PADDING;
			result.push(<Tile key={t.id} name={t.tile_state.name} styles={styles} left={left} top={top} onClick={(name) => this.props.onTileClick(name)} />);
		});

		return result;
	}

}

var styles = StyleSheet.create({
	container: {
		width: CELL_SIZE * constants.MAX_GRID_SIZE,
		height: CELL_SIZE * constants.MAX_GRID_SIZE,
		backgroundColor: '#000000',
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 2,
		borderColor: '#00ff00'
	},
	tile: {
		position: 'absolute',
		width: TILE_SIZE,
		height: TILE_SIZE,
		borderRadius: BORDER_RADIUS,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#CC9',
	},
	letter: {
		color: '#333',
		fontSize: LETTER_SIZE,
		fontFamily: 'Arial',
		backgroundColor: 'transparent',
	},
});

const mapStateToProps = (state) => {
	return { state };
};

const mapDispatchToProps = (dispatch) => {
	return {
		onTileClick: (name) => {
			dispatch(hitGood(name))
		}
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GardenView);