function getNum(min, max) {
	var num = Math.floor(Math.random() * (max - min + 1)) + min;
	console.log(num);
	document.getElementById("odd-even-num").innerHTML = num;
}
function odd() {
	var getNum = parseInt(document.getElementById("odd-even-num").innerHTML);
	console.log(getNum);
	if (getNum % 2 !== 0) {
		document.getElementById("tickcontainerOne").style.display = 'flex';
		document.getElementById("evenButton").checked = false;
	} else {
		document.getElementById("tickcontainerOne").style.display = 'none';
	}
	if (document.getElementById("evenButton").checked = true) {
		document.getElementById("evenButton").checked = false;
	}
}
function even() {
	var getNum = parseInt(document.getElementById("odd-even-num").innerHTML);
	console.log(getNum);
	if (getNum % 2 === 0) {
		document.getElementById("tickcontainerOne").style.display = "flex";
	} else {
		document.getElementById("tickcontainerOne").style.display = "none";
	}
	if (document.getElementById("oddButton").checked = true) {
		document.getElementById("oddButton").checked = false;
	}
}

function clearInput() {
	document.getElementById("oddButton").checked = false;
	document.getElementById("evenButton").checked = false;
	document.getElementById("tickcontainerOne").style.display = "none";
}