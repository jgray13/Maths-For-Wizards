var globalRandomOne;
var globalRandomTwo;
function randomNumOne(min, max) {
 var randomNumberOne = Math.floor(Math.random() * (max - min)) + min;
 document.getElementById("random-box-one").innerHTML = randomNumberOne;
  globalRandomOne = parseInt(randomNumberOne);
  console.log(randomNumberOne);
    console.log(globalRandomOne);
 var randomNumberTwo = Math.floor(Math.random() * (max - min)) + min;
 document.getElementById("random-box-two").innerHTML = randomNumberTwo;
  globalRandomTwo = parseInt(randomNumberTwo);
 console.log(randomNumberTwo);
  console.log(globalRandomTwo);
}
console.log(globalRandomOne);
console.log(globalRandomTwo);	
function getInput() {
	var answerStr = document.getElementById("randomNumAnsOne").value;
	var answer = parseInt(answerStr);
	var inputOne = globalRandomOne;
	var inputTwo = globalRandomTwo;
	var input = (inputOne + inputTwo);
	console.log(answer);	
	console.log(inputOne);	
	console.log(inputTwo);	
	console.log(input);	
	if (input === answer) {
		document.getElementById("tickcontainerRandomOne").style.display = "flex";	
	} else {
				document.getElementById("tickcontainerRandomOne").style.display = "none";
	}
}
var globalRandomThree;
var globalRandomFour;
function randomNumThree(min, max) {
 var randomNumberThree = Math.floor(Math.random() * (max - min)) + min;
 document.getElementById("random-box-three").innerHTML = randomNumberThree;
 globalRandomThree = parseInt(randomNumberThree);
  console.log(randomNumberThree);
  console.log(globalRandomThree);
}
function randomNumFour(min, max) {
 var randomNumberFour = Math.floor(Math.random() * (max - min)) + min;
 document.getElementById("random-box-four").innerHTML = randomNumberFour;
 globalRandomFour = parseInt(randomNumberFour);
 console.log(randomNumberFour);
  console.log(globalRandomFour);
}
    console.log(globalRandomThree);
  console.log(globalRandomFour);
function getInputTwo() {
	var answerStr = document.getElementById("randomNumAnsTwo").value;
	var answer = parseInt(answerStr);
	var inputOne = globalRandomThree;
	var inputTwo = globalRandomFour;
		var input = (inputOne - inputTwo);
	console.log(answer);
	console.log(inputOne);
	console.log(inputTwo);	
	console.log(input);
	if (input === answer) {
		document.getElementById("tickcontainerRandomTwo").style.display = "flex";	
	} else {
				document.getElementById("tickcontainerRandomTwo").style.display = "none";
	}
}
var globalRandomFive;
var globalRandomSix;
function randomNumFive(min, max) {
    var randomNumberFive = Math.floor(Math.random() * (max - min)) + min;
    document.getElementById("random-box-five").innerHTML = randomNumberFive;
    globalRandomFive = parseInt(randomNumberFive);
    console.log(randomNumberFive);
    console.log(globalRandomFive);
    var randomNumberSix = Math.floor(Math.random() * (max - min)) + min;
    document.getElementById("random-box-six").innerHTML = randomNumberSix;
    globalRandomSix = parseInt(randomNumberSix);
    console.log(randomNumberSix);
    console.log(globalRandomSix);
}
function getInputThree() {
	var answerStr = document.getElementById("randomNumAnsThree").value;
	var answer = parseInt(answerStr);
	var inputOne = globalRandomFive;
	var inputTwo = globalRandomSix;
	var input = (inputOne * inputTwo);
	console.log(answerStr);
	console.log(answer);
	console.log(inputOne)
	console.log(inputTwo)
	console.log(input);
	if (input === answer) {
		document.getElementById("tickcontainerRandomThree").style.display = "flex";
	} else {
		document.getElementById("tickcontainerRandomThree").style.display = "none";
	}
}
function clearInput() {
	document.getElementById("random-box-one").value = '';
	document.getElementById("random-box-two").value = '';
	document.getElementById("randomNumAnsOne").value = '';
	document.getElementById("tickcontainerRandomOne").style.display = "none"
}
function clearInputTwo() {
	document.getElementById("random-box-three").value = '';
	document.getElementById("random-box-four").value = '';
	document.getElementById("randomNumAnsTwo"). value = '';
	document.getElementById("tickcontainerRandomTwo").style.display = "none";
}
function clearInputThree() {
	document.getElementById("random-box-five").value = '';
	document.getElementById("random-box-six").value = '';
	document.getElementById("randomNumAnsThree"). value = '';
	document.getElementById("tickcontainerRandomThree").style.display = "none";
}