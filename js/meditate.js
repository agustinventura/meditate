TimesEnum = {
	MINUTES: "minutes",
	DECAMINUTES: "decaminutes"
}

var times = {
		minutes: 0,
		decaminutes: 0
};
var meditationMinutes = 10;
var selectedMeditationTime = TimesEnum.MINUTES;
var countdownSeconds = 10;

function init() {
	setBackKeyListener();
	initTime();
	showWelcomeScreen();
}

$(document).ready(init);