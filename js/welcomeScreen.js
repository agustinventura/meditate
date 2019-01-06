function showWelcomeScreen() {
	hideAllScreens();
	setWelcomeScreenListeners();
    $("#welcomeScreen").show();
}

function setSetsScreenListeners() {
	setRotaryListener(setsChange);
	//setClickListener($("#start"), showTimeScreen);
}