var EMOJI_NAME_LIST_ENEMY = ['spider', 'rat', 'mouse2', 'rabbit2', 'snail', 'bug', 'ant', 'scorpion'];
var EMOJI_NAME_LIST_FRIENDLY = ['beetle', 'bee', 'cat2', 'dog2', 'seedling', 'tulip', 'cherry_blossom', 'rose', 'hibiscus', 'sunflower', 'blossom', 'herb'];

var EMOJI_NAME_LIST = EMOJI_NAME_LIST_ENEMY.concat(EMOJI_NAME_LIST_FRIENDLY);

var EMOJI_TYPE_BY_NAME = {};
EMOJI_NAME_LIST_ENEMY.forEach((n) => {
	EMOJI_TYPE_BY_NAME[n] = {type:'ENEMY', name: n};
});
EMOJI_NAME_LIST_FRIENDLY.forEach((n) => {
	EMOJI_TYPE_BY_NAME[n] = {type:'FRIENDLY', name: n};
});

exports.getEmojiType = function(name) {
	return EMOJI_TYPE_BY_NAME[name];
};

exports.getRandomEmojiName = function() {
	var index = getRandomInt(0, EMOJI_NAME_LIST.length);
	return EMOJI_NAME_LIST[index];
};

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}