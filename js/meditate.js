TimesEnum = {
	MINUTES: "minutes",
	DECAMINUTES: "decaminutes"
}

var times = new Map();
var meditationTime = 10;
var selectedMeditationTime = TimesEnum.MINUTES;
var countdownSeconds = 5;

function init() {
	setBackKeyListener();
	initTime();
	showWelcomeScreen();
}

$(document).ready(init);