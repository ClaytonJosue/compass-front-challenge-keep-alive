let counter = document.querySelector(".footer__count--time");
let counterNum = 600;
let currentCounter = setInterval(() => {

	counterNum--;
	counter.textContent = counterNum;

	if (counterNum == 0) {
		clearInterval(currentCounter);
		let continuePage = confirm("Deseja permanecer logado?");

		if (continuePage === true) {
			location.reload();
		} else {
			localStorage.clear();
			window.location.replace("../index.html");
		}
	}
}, 1000);


