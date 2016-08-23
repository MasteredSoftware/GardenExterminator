import React, {
	StyleSheet,
	Component,
	View,
	Text,
	TouchableOpacity,
	PropTypes
} from 'react-native';

const styles = StyleSheet.create({
	textbox: {
		width: 100,
		height: 30,
		padding: 10,
		backgroundColor: 'lightgray',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 3
	}
});

const Scoreboard = ({ score, level }) => (
	<View style={{alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
		<Text>Level:</Text>
		<Text style={styles.textbox}>{level+1}</Text>
		<Text>Score:</Text>
		<Text style={styles.textbox}>{score}</Text>
	</View>
)

Scoreboard.propTypes = {
	score: PropTypes.number.isRequired,
	level: PropTypes.number.isRequired
}

export default Scoreboard