let newyearE = document.getElementById("newyear");

let daysE = document.getElementById("days");
let hoursE = document.getElementById("hours");
let minutesE = document.getElementById("minutes");
let secondsE = document.getElementById("seconds");

function countdown(){

	let date = new Date();
	let newyearString = "1 jan "+(date.getFullYear() + 1)+"";
	let newyear = new Date(newyearString);
	let currentDate = new Date();
	newyearE.innerHTML = date.getFullYear() + 1;

	let totalSeconds = (newyear - currentDate) / 1000;

	let days = Math.floor(totalSeconds / 60 / 60 / 24);
	let hours = Math.floor(totalSeconds / 60 / 60 % 24);
	let minutes = Math.floor(totalSeconds / 60 % 60);
	let seconds = Math.floor(totalSeconds % 60);

	if(days < 10){days = "0"+days};
	if(hours < 10){hours = "0"+hours};
	if(minutes < 10){minutes = "0"+minutes};
	if(seconds < 10){seconds = "0"+seconds};

	daysE.innerHTML = days;
	hoursE.innerHTML = hours;
	minutesE.innerHTML = minutes;
	secondsE.innerHTML = seconds;
}
countdown();
setInterval(countdown,1000);