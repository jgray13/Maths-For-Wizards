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
/*
function squareFunc() {
	if ( document.getElementById("sq2").checked) {
		document.getElementById("tickcontainerOne").style.display = 'flex';
	} else {
		document.getElementById("tickcontainerOne").style.display = 'none';
	}
}
function notSquareFunc() {
	if ( document.getElementById("sq1").checked) {
		document.getElementById("tickcontainerOne").style.display = 'none';
	} else if (document.getElementById("sq3").checked) {
		document.getElementById("tickcontainerOne").style.display = 'none';
	}
}
*/

/*
function isEvenRecursion(number) {
  if (number < 0)  {
    number = Math.abs(number);
	}
  if (number === 0) {
    return true;
	}
  if (number === 1) {
    return false;
	} else {
    number = number - 2;
    return isEvenRecursion(number);
	}
}
function getNum(min, max) {
	var num = Math.floor(Math.random() * (max - min + 1)) + min;
	console.log(num);
	var msgEven = num + " is even";
	var msgOdd = num + " is odd";
	var answer = isEvenRecursion(num);
	if (answer === true) {
		document.getElementById("section").innerHTML = msgEven;
	} else {
		document.getElementById("section").innerHTML = msgOdd;
	}
}
*/