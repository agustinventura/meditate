function showEndScreen() {
	hideAllScreens();
	setEndScreenText();
    $("#endScreen").show();
}

function setEndScreenText() {
	var meditationSessions = localStorage.getItem("meditationSessions");
	var totalMeditationMinutes = localStorage.getItem("totalMeditationMinutes");
	$("#meditationSessions").text(meditationSessions);
	$("#totalMeditationMinutes").text(totalMeditationMinutes);
}