var correctAnswers = [];
var hundredOne = document.getElementById("hundred-1");
hundredOne.onkeyup = function() {
	var inputOne = hundredOne.value;
	var resultOne = "3";
	if (inputOne === resultOne) {
		correctAnswers.push(inputOne);
		console.log(correctAnswers);
	}
};
var hundredTwo = document.getElementById("hundred-2");
hundredTwo.onkeyup = function() {
	var inputTwo = hundredTwo.value;
	var resultTwo = "8";
	if (inputTwo === resultTwo) {
		correctAnswers.push(inputTwo);
		console.log(correctAnswers);
	}
};
var hundredThree = document.getElementById("hundred-3");
hundredThree.onkeyup = function() {
	var inputThree = hundredThree.value;
	var resultThree = "15";
	if (inputThree === resultThree) {
		correctAnswers.push(inputThree);
		console.log(correctAnswers);
	}
};
var hundredFour = document.getElementById("hundred-4");
hundredFour.onkeyup = function() {
	var inputFour = hundredFour.value;
	var resultFour = "17";
	if (inputFour === resultFour) {
		correctAnswers.push(inputFour)
		console.log(correctAnswers);
	}
};
var hundredFive = document.getElementById("hundred-5");
hundredFive.onkeyup = function() {
	var inputFive = hundredFive.value;
	var resultFive = "22";
	if (inputFive === resultFive) {
		correctAnswers.push(inputFive);
		console.log(correctAnswers);
	}
};
var hundredSix = document.getElementById("hundred-6");
hundredSix.onkeyup = function() {
	var inputSix = hundredSix.value;
	var resultSix = "30";
	if (inputSix === resultSix) {
		correctAnswers.push(inputSix);
		console.log(correctAnswers);
	}
};
var hundredSeven = document.getElementById("hundred-7");
hundredSeven.onkeyup = function() {
	var inputSeven = hundredSeven.value;
	var resultSeven = "33";
	if (inputSeven === resultSeven) {
		correctAnswers.push(inputSeven);
		console.log(correctAnswers);
	}
};
var hundredEight = document.getElementById("hundred-8");
hundredEight.onkeyup = function() {
	var inputEight = hundredEight.value;
	var resultEight = "39";
	if (inputEight === resultEight) {
		correctAnswers.push(inputEight);
		console.log(correctAnswers);
	}
};
var hundredNine = document.getElementById("hundred-9");
hundredNine.onkeyup = function() {
	var inputNine = hundredNine.value;
	var resultNine = "44";
	if (inputNine === resultNine) {
		correctAnswers.push(inputNine);
		console.log(correctAnswers);
	}
};
var hundredTen = document.getElementById("hundred-10");
hundredTen.onkeyup = function() {
	var inputTen = hundredTen.value;
	var resultTen = "47";
	if (inputTen === resultTen) {
		correctAnswers.push(inputTen);
		console.log(correctAnswers);
	}
};
var hundredEleven = document.getElementById("hundred-11");
hundredEleven.onkeyup = function() {
	var inputEleven = hundredEleven.value;
	var resultEleven = "52";
	if (inputEleven === resultEleven) {
		correctAnswers.push(inputEleven);
		console.log(correctAnswers);
	}
};
var hundredTwelve = document.getElementById("hundred-12");
hundredTwelve.onkeyup = function() {
	var inputTwelve = hundredTwelve.value;
	var resultTwelve = "60";
	if (inputTwelve === resultTwelve) {
		correctAnswers.push(inputTwelve);
		console.log(correctAnswers);
	}
};
var hundredThirteen = document.getElementById("hundred-13");
hundredThirteen.onkeyup = function() {
	var inputThirteen = hundredThirteen.value;
	var resultThirteen = "64";
	if (inputThirteen === resultThirteen) {
		correctAnswers.push(inputThirteen);
		console.log(correctAnswers);
	}
};
var hundredFourteen = document.getElementById("hundred-14");
hundredFourteen.onkeyup = function() {
	var inputFourteen = hundredFourteen.value;
	var resultFourteen = "66";
	if (inputFourteen === resultFourteen) {
		correctAnswers.push(inputFourteen);
		console.log(correctAnswers);
	}
};
var hundredFifteen = document.getElementById("hundred-15");
hundredFifteen.onkeyup = function() {
	var inputFifteen = hundredFifteen.value;
	var resultFifteen = "71";
	if (inputFifteen === resultFifteen) {
		correctAnswers.push(inputFifteen);
		console.log(correctAnswers);
	}
};
var hundredSixteen = document.getElementById("hundred-16");
hundredSixteen.onkeyup = function() {
	var inputSixteen = hundredSixteen.value;
	var resultSixteen = "78";
	if (inputSixteen === resultSixteen) {
		correctAnswers.push(inputSixteen);
		console.log(correctAnswers);
	}
};
var hundredSeventeen = document.getElementById("hundred-17");
hundredSeventeen.onkeyup = function() {
	var inputSeventeen = hundredSeventeen.value;
	var resultSeventeen = "86";
	if (inputSeventeen === resultSeventeen) {
		correctAnswers.push(inputSeventeen);
		console.log(correctAnswers);
	}
};
var hundredEighteen = document.getElementById("hundred-18");
hundredEighteen.onkeyup = function() {
	var inputEighteen = hundredEighteen.value;
	var resultEighteen = "89";
	if (inputEighteen === resultEighteen) {
		correctAnswers.push(inputEighteen);
		console.log(correctAnswers);
	}
};
var hundredNineteen = document.getElementById("hundred-19");
hundredNineteen.onkeyup = function() {
	var inputNineteen = hundredNineteen.value;
	var resultNineteen = "91";
	if (inputNineteen === resultNineteen) {
		correctAnswers.push(inputNineteen);
		console.log(correctAnswers);
	}
};
var hundredTwenty = document.getElementById("hundred-20");
hundredTwenty.onkeyup = function() {
	var inputTwenty = hundredTwenty.value;
	var resultTwenty = "95";
	if (inputTwenty === resultTwenty) {
		correctAnswers.push(inputTwenty);
		console.log(correctAnswers);
	}
};
function hundredSub() {
	count = correctAnswers.length;
    var el = document.getElementById("message-hundred");
    if (count === 0) {
		el.style.display = "flex";
		el.innerHTML = "<h4>Try again!<br>" + count + " out of 20</h4>";
	} else {
		el.style.display = "flex";
		el.innerHTML = "<h4>Well done!<br>You scored " + count + " out of 20!</h4>";
	}
	console.log(count);
    console.log(correctAnswers);
}