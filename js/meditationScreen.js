var meditationStartAudio = null;
var meditationInterval = null;
var meditationTime = null;

function showMeditationScreen() {
	hideAllScreens();
	loadMeditationStartAudio();
	setMeditationScreenListeners();
	stopMeditationInterval();
	startMeditation();
	$("#meditationScreen").show();
}

function loadMeditationStartAudio() {
	meditationStartAudio = document.createElement('audio');
    meditationStartAudio.src = 'snd/bell.mp3';
    meditationStartAudio.name = 'bell';
}

function setMeditationScreenListeners() {
	setRotaryListener(meditationPause);
	setClickListener($("#meditationDone"), meditationPause);
}

function meditationPause() {
	stopMeditationInterval();
	//showPauseScreen();
}

function stopMeditationInterval() {
	clearInterval(meditationInterval);
	meditationInterval = null;
}

function startMeditation() {
	meditationStartAudio.load();
	meditationStartAudio.play();
	meditationTime = new Date(meditationMinutes*60*1000);
	startMeditationInterval();
}

function startMeditationInterval() {
	meditationInterval = setInterval(refreshMeditationTime, 1000);
}

function refreshMeditationTime() {
	meditationTime.setTime(meditationTime.getTime()-1000);
	if (meditationTime.getTime() === 0) {
		meditationEnd();
	}
	setCurrentRestFormattedTime();
}

function meditationEnd() {
	navigator.vibrate(1000);
}

function setCurrentRestFormattedTime() {
	var formattedMinutes = preprendZerosIfNeeded(meditationTime.getMinutes(), 2);
	$("#meditationScreenMinutes").text(formattedMinutes);
	var formattedSeconds = preprendZerosIfNeeded(meditationTime.getSeconds(), 2);
	$("#meditationScreenSeconds").text(formattedSeconds);
}