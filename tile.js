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
		var style = {
			left: props.left,
			top: props.top
		};
		var animated_style = {
			flex: 1,
			transform: [                        // `transform` is an ordered array
				{scale: bounce},  // Map `bounce` to `scale`
			]
		};

		this.state = {bounce, style, animated_style};
	}

	componentDidMount() {
		this.state.bounce.setValue(1.5);     // Start large
		Animated.spring(                          // Base: spring, decay, timing
			this.state.bounce,                 // Animate `bounceValue`
			{
				toValue: 1,                         // Animate to smaller size
				friction: 1,                          // Bouncier spring
			}
		).start();                                // Start the animation
	}

	render() {
		return <View style={[this.props.styles.tile, this.state.style]}>
			<Animated.View style={this.state.animated_style} onStartShouldSetResponder={() => this.clickTile()}>
			<Text style={this.props.styles.letter}><Emoji name={this.props.name}/></Text>
			</Animated.View>
		</View>;
	}

	clickTile() {
		this.state.bounce.setValue(1.2); // bounce larger
		Animated.timing(this.state.bounce, {
			toValue: 1, // bounce back
			duration: 250, // milliseconds
			easing: Easing.quad // quadratic easing function: (t) => t * t
		}).start();
	}
}

module.exports = Tile;
