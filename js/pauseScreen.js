function showPauseScreen() {
	hideAllScreens();
	setPauseScreenListeners();
	$("#pauseScreen").show();
}

function setPauseScreenListeners() {
	setRotaryListener(null);
	setClickListener($("#exit"), exit);
	setClickListener($("#continue"), meditationResume);
}