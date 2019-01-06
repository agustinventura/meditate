TimesEnum = {
	SECONDS: "seconds",
	DECASECONDS: "decaseconds"
}

var times = new Map();
var meditationTime = 60;
var selectedMeditationTime = TimesEnum.SECONDS;
var countdownSeconds = 5;

function init() {
	setBackKeyListener();
	//initRestTime();
	showWelcomeScreen();
}

$(document).ready(init);