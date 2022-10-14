const localization = document.querySelector(".weather__locality");
let currentIcon = document.querySelector(".weather__icon");
let currentTemperature = document.querySelector(".weather__temperature");

let api = {
	key: "737e6c40271140fa8ba192031221410",
	url: "https://api.weatherapi.com/v1/current.json",
	lang: "pt"
}

window.addEventListener("load", () => {
	if (navigator.geolocation) {
		navigator.geolocation.watchPosition(getLocalization, localizationError);
	} else {
		alert("Seu navegador não suporta");
	}

	function getLocalization(pos) {
		let latitude = pos.coords.latitude;
		let longitude = pos.coords.longitude;
		getWeather(latitude, longitude);
	}

	function localizationError(err) {
		alert(`Erro: ${err.message}`);
	}
});

function getWeather(lat, long) {
	fetch(`${api.url}?key=${api.key}&q=${lat},${long}&lang=${api.lang}`)
		.then(response => {
			if (!response.ok) {
				throw new Error(`Error status: ${response.status}`);
			}
			return response.json();
		})
		.catch(error => {
			alert(error.message);
		})
		.then(response => {
			showWeather(response);
		});
}

function showWeather(weather) {
	localization.textContent = `${weather.location.name} - ${weather.location.region}`;
	currentIcon.setAttribute('src', `${weather.current.condition.icon}`);
	currentTemperature.textContent = `${weather.current.temp_c}°`
}

