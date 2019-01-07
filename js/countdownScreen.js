var countdownInterval = null;

function showCountdownScreen() {
	hideAllScreens();
	countdownSeconds = 5;
	$("#meditationMinutes").text(meditationMinutes);
	$("#countdownSeconds").text(countdownSeconds);
	$("#countdownScreen").show();
	countdown(countdownSeconds);
}

function countdown(seconds) {
    if (seconds === 1) {
    	stopInterval();
        showCurrentSetScreen();
    } else {
        countdownInterval = setInterval(function () {
            refreshSeconds();
        }, 1000);
    }
}

function stopInterval() {
    clearInterval(countdownInterval);
    countdownInterval = null;
}

function refreshSeconds() {
    countdownSeconds--;
    if (countdownSeconds === 0) {
    	stopInterval();
        showMeditationScreen();
    } else {
    	$("#countdownSeconds").text(countdownSeconds);
    }
}