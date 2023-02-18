const divs = document.querySelectorAll('div');

function logText(e) {
	console.log(this.classList.value);
	e.stopPropagation(); // stop bubbling
}

document.body.addEventListener('click', logText);

divs.forEach(div => div.addEventListener('click', logText, {
	capture: false,
	once: false
}));