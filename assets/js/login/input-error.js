const buttonForm = form.querySelector("#form-btn");
let user = {
	email: "admin@admin",
	password: "admin"
};

buttonForm.addEventListener("click", (event) => {
	event.preventDefault();
	if (userInput.value == user.email && userPassword.value == user.password) {
		window.location.href = "../home.html";
	} else {
		let messageError = form.querySelector(".login__form--message-error");
		messageError.classList.remove("hidden");
		userInput.classList.add("user--error");
		userInput.value = "";
		userInput.focus();
		userIconLeft();

		userPassword.classList.add("password--error");
		userPassword.value = "";
		passwordIconLeft();
	}
});