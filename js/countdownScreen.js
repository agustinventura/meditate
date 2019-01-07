var countdownInterval = null;

function showCountdownScreen() {
	hideAllScreens();
	countdownSeconds = 10;
	$("#meditationMinutes").text(meditationTime);
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
        //showCurrentSetScreen();
    } else {
    	$("#countdownSeconds").text(countdownSeconds);
    }
}