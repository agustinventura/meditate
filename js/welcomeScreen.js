function showWelcomeScreen() {
	hideAllScreens();
	setWelcomeScreenListeners();
	setWelcomeScreenText();
    $("#welcomeScreen").show();
}

function setWelcomeScreenListeners() {
	setRotaryListener(showTimeScreen);
	setClickListener($("#start"), showTimeScreen);
}

function setWelcomeScreenText() {
	$("#firstMedidation").hide();
	$("#subsequentMedidations").hide();
	var meditationSessions = Number(localStorage.getItem("meditationSessions"));
	if (meditationSessions > 0) {
		$("#subsequentMedidations").show();
		$("#meditationSessionNumber").text(meditationSessions+1);
	} else {
		$("#firstMedidation").show();
	}
}