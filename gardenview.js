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
var Tile = require('./tile.js');

var {width, height} = require('Dimensions').get('window');//get window dimensions
var MAX_GRID_SIZE = 4; // width and height of the grid
var CELL_SIZE = Math.floor(width / MAX_GRID_SIZE); // base cell size on screen width
var CELL_PADDING = Math.floor(CELL_SIZE * .05); // 5% of the cell size
var BORDER_RADIUS = CELL_PADDING * 8;
var TILE_SIZE = CELL_SIZE - CELL_PADDING * 2;
var LETTER_SIZE = Math.floor(TILE_SIZE * .75);
var EMOJI_NAME_LIST_ENEMY = ['spider', 'rat', 'mouse2', 'rabbit2', 'snail', 'bug', 'ant', 'scorpion'];
var EMOJI_NAME_LIST_FRIENDLY = ['beetle', 'bee', 'cat2', 'dog2', 'seedling', 'tulip', 'cherry_blossom', 'rose', 'hibiscus', 'sunflower', 'blossom', 'herb'];

class GardenView extends Component {
	constructor(props) {
		super(props);
		this.state = {"points":0};
	}

	render() {
		return <View style={styles.container}>
			{this.renderTiles()}
		</View>;
	}

	renderTiles() {
		var result = [];
		for (var row = 0; row < MAX_GRID_SIZE; row++) {
			for (var col = 0; col < MAX_GRID_SIZE; col++) {
				var id = row * MAX_GRID_SIZE + col;
				var name = EMOJI_NAME_LIST_ENEMY.concat(EMOJI_NAME_LIST_FRIENDLY)[id];
				var left = col * CELL_SIZE + CELL_PADDING,
					top = row * CELL_SIZE + CELL_PADDING;
				result.push(<Tile key={id} name={name} styles={styles} left={left} top={top} />);
			}
		}
		return result;
	}

}

var styles = StyleSheet.create({
	container: {
		width: CELL_SIZE * MAX_GRID_SIZE,
		height: CELL_SIZE * MAX_GRID_SIZE,
		backgroundColor: 'transparent',
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

module.exports = GardenView;