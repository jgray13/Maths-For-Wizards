function getInputFootprints() {
	var input = document.getElementById("counting-2s-number-input").value;
	var inputNew = parseInt(input);
	console.log(inputNew);
	if(inputNew === 24) {
		document.getElementById("tickcontainerOne-in2s").style.display = "flex";
	} else {
		document.getElementById("tickcontainerOne-in2s").style.display = "none";
	}
}

function getInputFrogs() {
	var input = document.getElementById("frog-number-input").value;
	var inputNew = parseInt(input);
	console.log(inputNew);
	if(inputNew === 8) {
		document.getElementById("tickcontainerTwo-in2s").style.display = "flex";
	} else {
		document.getElementById("tickcontainerTwo-in2s").style.display = "none";
	}
}

function getInputBroomsticks() {
	var input = document.getElementById("broomstick-number-input").value;
	var inputNew = parseInt(input);
	console.log(inputNew);
	if(inputNew === 16) {
		document.getElementById("tickcontainerThree-in2s").style.display = "flex";
	} else {
		document.getElementById("tickcontainerThree-in2s").style.display = "none";
	}
}

function getInputSpiders() {
	var input = document.getElementById("spider-number-input").value;
	var inputNew = parseInt(input);
	console.log(inputNew);
	if(inputNew === 12) {
		document.getElementById("tickcontainerFour-in2s").style.display = "flex";
	} else {
		document.getElementById("tickcontainerFour-in2s").style.display = "none";
	}
}

function getInputWands() {
	var input = document.getElementById("wands-number-input").value;
	var inputNew = parseInt(input);
	console.log(inputNew);
	if(inputNew === 32) {
		document.getElementById("tickcontainerFive-in2s").style.display = "flex";
	} else {
		document.getElementById("tickcontainerFive-in2s").style.display = "none";
	}
}