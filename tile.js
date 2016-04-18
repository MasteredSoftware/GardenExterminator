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
var Emoji = require('react-native-emoji');

class Tile extends Component {
	constructor(props) {
		super(props);

		var bounce = new Animated.Value(0);
		var interpolated = bounce.interpolate({
			inputRange: [0, 1],
			outputRange: ['0deg', '-30deg']
		});
		var style = {
			left: props.left,
			top: props.top
		};
		var animated_style = {
			transform: [{perspective: 50},
				{rotateX: interpolated}]
		};

		this.state = {bounce, style, animated_style};
	}

	render() {
		return <View style={[this.props.styles.tile, this.state.style]}>
			<Animated.View style={this.state.animated_style} onStartShouldSetResponder={() => this.clickTile()}>
			<Text style={this.props.styles.letter}><Emoji name={this.props.name}/></Text>
			</Animated.View>
		</View>;
	}

	clickTile() {
		this.state.bounce.setValue(1); // mapped to -30 degrees
		Animated.timing(this.state.bounce, {
			toValue: 0, // mapped to 0 degrees (no bounce)
			duration: 250, // milliseconds
			easing: Easing.quad // quadratic easing function: (t) => t * t
		}).start();
	}
}

module.exports = Tile;
