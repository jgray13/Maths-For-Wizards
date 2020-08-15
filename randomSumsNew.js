var globalRandomOne;
var globalRandomTwo;
function randomNumOne(min, max) {
 var randomNumberOne = Math.floor(Math.random() * (max - min)) + min;
 document.getElementById("random-inner-one").innerHTML = randomNumberOne;
  globalRandomOne = parseInt(randomNumberOne);
  console.log(randomNumberOne);
    console.log(globalRandomOne);
}
function randomNumTwo(min, max) {
 var randomNumberTwo = Math.floor(Math.random() * (max - min)) + min;
 document.getElementById("random-inner-two").innerHTML = randomNumberTwo;
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
 document.getElementById("random-inner-three").innerHTML = randomNumberThree;
 globalRandomThree = parseInt(randomNumberThree);
  console.log(randomNumberThree);
  console.log(globalRandomThree);
}
function randomNumFour(min, max) {
 var randomNumberFour = Math.floor(Math.random() * (max - min)) + min;
 document.getElementById("random-inner-four").innerHTML = randomNumberFour;
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


