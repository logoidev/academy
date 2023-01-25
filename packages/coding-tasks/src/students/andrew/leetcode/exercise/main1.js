function sayGoodTimeOfDay(time, mood) {
	const ERROR_CODE = 'ERROR';

	let dayTime = ERROR_CODE;

	if (time >= 0) {
		dayTime = 'morning';
	}
	if (time >= 12) {
		dayTime = 'day';
	}
	if (time >= 18) {
		dayTime = 'evening';
	}
	if (time >= 21) {
		dayTime = 'night';
	}

	if (dayTime !== ERROR_CODE) {
		alert(`${mood} ${dayTime}!`);
	} else {
		alert(ERROR_CODE);
	}
}

const time = Number(prompt('Enter current time'));
const mood = prompt('Enter your mood');
sayGoodTimeOfDay(time, mood);
