const buttonLogout = document.querySelector("#logout");
buttonLogout.addEventListener("click", () => {
	let pageContinue = confirm("Deseja sair da página?");
	if (pageContinue === true) {
		localStorage.clear();
		window.location.replace("../index.html");
	} else {
		return;
	}
});