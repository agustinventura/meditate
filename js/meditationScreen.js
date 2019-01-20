var meditationStartAudio = null;
var meditationInterval = null;
var meditationTime = null;
var circleId = 0;

function showMeditationScreen() {
	hideAllScreens();
	loadMeditationStartAudio();
	hideGraphics();
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

function hideGraphics() {
	for (i = 0; i<5; i++) {
		$("#circle"+i).hide();
	}
}
function setMeditationScreenListeners() {
	setRotaryListener(meditationPause);
	setClickListener($("#meditationDone"), meditationPause);
}

function meditationPause() {
	stopMeditationInterval();
	showPauseScreen();
}

function meditationResume() {
	hideAllScreens();
	setMeditationScreenListeners();
	startMeditationInterval();
	$("#meditationScreen").show();
}

function stopMeditationInterval() {
	clearInterval(meditationInterval);
	meditationInterval = null;
}

function startMeditation() {
	tizen.power.request("SCREEN", "SCREEN_NORMAL");
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
	circleId++;
	hideGraphics();
	$("#circle"+circleId%4).show();
	if (meditationTime.getTime() === 0) {
		meditationEnd();
	}
	setCurrentRestFormattedTime();
}

function meditationEnd() {
	tizen.power.release("SCREEN");
	stopMeditationInterval();
	navigator.vibrate(1000);
	updateMeditationData();
	showEndScreen();
}

function setCurrentRestFormattedTime() {
	var formattedMinutes = preprendZerosIfNeeded(meditationTime.getMinutes(), 2);
	$("#meditationScreenMinutes").text(formattedMinutes);
	var formattedSeconds = preprendZerosIfNeeded(meditationTime.getSeconds(), 2);
	$("#meditationScreenSeconds").text(formattedSeconds);
}

function updateMeditationData() {
	var meditationSessions = Number(localStorage.getItem("meditationSessions"));
	meditationSessions++;
	localStorage.setItem("meditationSessions", meditationSessions);
	var totalMeditationMinutes = Number(localStorage.getItem("totalMeditationMinutes"));
	totalMeditationMinutes += Number(meditationMinutes);
	localStorage.setItem("totalMeditationMinutes", totalMeditationMinutes);
}