function initTime() {
	times.set(TimesEnum.MINUTES, 0);
	times.set(TimesEnum.DECAMINUTES, 1);
}

function showTimeScreen() {
	hideAllScreens();
	setTimeScreenListeners();
	setTimesText();
    $("#timeScreen").show();
}

function setTimesText() {
	for (var time in TimesEnum) {
		$("#"+TimesEnum[time]).text(times.get(TimesEnum[time]));
	}
}

function setTimeScreenListeners() {
	setClickListener($("#decreaseTime"), decreaseTime);
	setClickListener($("#increaseTime"), increaseTime);
	setClickListener($("#upArrowTimeDecaminutes"), increaseDecaminutes);
	setClickListener($("#upArrowTimeMinutes"), increaseMinutes);
	setClickListener($("#decaminutes"), selectDecaminutes);
	setClickListener($("#minutes"), selectMinutes);
	setClickListener($("#downArrowTimeDecaminutes"), decreaseDecaminutes);
	setClickListener($("#downArrowTimeMinutes"), decreaseMinutes);
	setClickListener($("#timeDone"), setTime);
}

function increaseDecaminutes() {
	selectedTime = TimesEnum.DECAMINUTES;
	increaseTime();
}

function increaseMinutes() {
	selectedTime = TimesEnum.MINUTES;
	increaseTime();
}

function selectDecaminutes() {
	selectedTime = TimesEnum.DECAMINUTES;
}

function selectMinutes() {
	selectedTime = TimesEnum.MINUTES;
}

function decreaseDecaminutes() {
	selectedTime = TimesEnum.DECAMINUTES;
	decreaseTime();
}

function decreaseMinutes() {
	selectedTime = TimesEnum.MINUTES;
	decreaseTime();
}

function timeChange(ev) {
	var direction = ev.detail.direction;
    if (direction === "CW") {
        increaseTime();
    } else {
        decreaseTime();
    }
}

function decreaseTime() {
	var time = times.get(selectedTime);
    if (time > 0) {
    	time--;
    	times.set(selectedTime, time);
        $("#"+selectedTime).text(times.get(selectedTime));
    }
}

function increaseTime() {
	var time = times.get(selectedTime);
    if (time < 9) {
        time++;
        times.set(selectedTime, time);
        $("#"+selectedTime).text(times.get(selectedTime));
    }
}

function setTime() {
	meditationMinutes = times.get(TimesEnum.DECAMINUTES) + "" + times.get(TimesEnum.MINUTES);
	showCountdownScreen();
}