import React, {
	StyleSheet,
	Component,
	View,
	Text,
	TouchableOpacity,
	PropTypes
} from 'react-native';

const styles = StyleSheet.create({
	text: {
		width: 100,
		height: 30,
		padding: 10,
		backgroundColor: 'lightgray',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 3
	}
});

const Scoreboard = ({ score }) => (
	<View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
		<Text style={styles.text}>{score}</Text>
	</View>
)

Scoreboard.propTypes = {
	score: PropTypes.number.isRequired
}

export default Scoreboard