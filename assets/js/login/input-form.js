const form = document.querySelector(".login__form");
const userInput = form.querySelector("#user");
const userPassword = form.querySelector("#user-password");

const userIcon = form.querySelector("#user-icon");
const passwordIcon = form.querySelector("#password-icon");

userInput.addEventListener("input", userIconLeft);
userPassword.addEventListener("input", passwordIconLeft);

function userIconLeft() {

	if (userInput.value.length > 0) {
		userIcon.classList.add("input--active");
	} else {
		userIcon.classList.remove("input--active");
	}

}

function passwordIconLeft() {

	if (userPassword.value.length > 0) {
		passwordIcon.classList.add("input--active");
	} else {
		passwordIcon.classList.remove("input--active");
	}

}