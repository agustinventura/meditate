function hideAllScreens() {
	$("#welcomeScreen").hide();
	$("#timeScreen").hide();
	$("#countdownScreen").hide();
	$("#meditationScreen").hide();
	$("#pauseScreen").hide();
	$("#endScreen").hide();
}

function setClickListener(element, listener) {
	element.off("click");
	element.click(listener);
}

function setRotaryListener(listener) {
	$(document).off('rotarydetent');
	$(document).on('rotarydetent', listener);
}

function setBackKeyListener() {
	$(window).off('tizenhwkey');
    $(window).on('tizenhwkey', function(e) {
    	backPressed(e);
    });
}

function backPressed(e) {
    var activeDivId = $('.clock:visible').not(":hidden").prop("id")
    if (e.originalEvent.keyName === 'back') {
		goBack(activeDivId);
    }
}

function goBack(activeDivId) {
	switch (activeDivId) {
		case "welcomeScreen":
			exit();
			break;
		case "timeScreen":
			showWelcomeScreen();
			break;
		case "countdownScreen":
			showCountdownScreen();
			break;
		case "meditationScreen":
			meditationPause();
			break;
		case "pauseScreen":
			meditationResume();
			break;
		case "endScreen":
			showWelcomeScreen();
			break;
	}
}

function exit() {
	tizen.power.release("SCREEN");
    tizen.application.getCurrentApplication().exit();
}


function preprendZerosIfNeeded(number, size) {
	var numberLength = number.toString().length;
	var numberOfZeroes = size - numberLength;
	for (var i=0; i<numberOfZeroes; i++) {
		number = "0" + number;
	}
	return number;
}