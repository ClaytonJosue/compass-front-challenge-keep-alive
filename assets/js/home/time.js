const hour = document.querySelector(".header__time--hour");
const fullDate = document.querySelector(".header__time--date");

function addZero(number) {
	if (number < 10) {
		return '0' + number;
	} else {
		return number;
	}
}

function date() {
	let today = new Date();

	// Hour
	let currentTime = addZero(today.getHours()) + ':' + addZero(today.getMinutes());
	hour.textContent = currentTime;

	// Full Date
	const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
	const weeks = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];

	let weekName = weeks[today.getDay()];
	let weekDay = addZero(today.getDate());
	let monthName = months[today.getMonth()];
	let year = today.getFullYear()

	fullDate.textContent = `${weekName}, ${weekDay} de ${monthName} de ${year}`;
}

setInterval(date, 1000);