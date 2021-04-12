var outputOne = document.getElementById('output1');   
var outputTwo = document.getElementById('output2');
document.getElementById("dice6").style.display = "flex";
document.getElementById("dice12").style.display = "flex";
var dice1 = 6;
var dice2 = 6;
outputOne.innerHTML = dice1;
outputTwo.innerHTML = dice2;
var correctAnswer = dice1 + dice2;
var rollButton = document.getElementById("roll-button");
rollButton.addEventListener("click", rollFunction);
function rollFunction(){
	console.log(correctAnswer);
	document.getElementById("diceAnswer").value = "";
	document.getElementById("message-hundred").style.display = "none";
	document.getElementById("refresh-container").style.display = "none";
	var highest_number = 6;
	var lowest_number = 1;
	dice1 = Math.floor((Math.random()*highest_number)+lowest_number);
	dice2 = Math.floor((Math.random()*highest_number)+lowest_number);
	outputOne.innerHTML = dice1;   
    outputTwo.innerHTML = dice2;
	console.log(dice1);
	console.log(dice2);
	console.log(correctAnswer);
    var d1 = document.getElementById("dice1");
    var d2 = document.getElementById("dice2");
    var d3 = document.getElementById("dice3");
    var d4 = document.getElementById("dice4");
    var d5 = document.getElementById("dice5");
    var d6 = document.getElementById("dice6");
    var d7 = document.getElementById("dice7");
    var d8 = document.getElementById("dice8");
    var d9 = document.getElementById("dice9");
    var d10 = document.getElementById("dice10");
    var d11 = document.getElementById("dice11");
    var d12 = document.getElementById("dice12");
    if (dice1 === 1) {
	    d1.style.display = "flex";
	    d2.style.display = "none";
	    d3.style.display = "none";
	    d4.style.display = "none";
	    d5.style.display = "none";
	    d6.style.display = "none";
    } else if (dice1 === 2) {
	    d1.style.display = "none";
	    d2.style.display = "flex";
	    d3.style.display = "none";
	    d4.style.display = "none";
	    d5.style.display = "none";
	    d6.style.display = "none";
    } else if (dice1 === 3) {
	    d1.style.display = "none";
	    d2.style.display = "none";
        d3.style.display = "flex";
	    d4.style.display = "none";
	    d5.style.display = "none";
	    d6.style.display = "none";
    } else if (dice1 === 4) {
	    d1.style.display = "none";
        d2.style.display = "none";
	    d3.style.display = "none";
	    d4.style.display = "flex";
	    d5.style.display = "none";
	    d6.style.display = "none";
    } else if (dice1 === 5) {
	    d1.style.display = "none";
	    d2.style.display = "none";
	    d3.style.display = "none";
	    d4.style.display = "none";
	    d5.style.display = "flex";
	    d6.style.display = "none";
    } else if (dice1 === 6) {
	    d1.style.display = "none";
	    d2.style.display = "none";
	    d3.style.display = "none";
	    d4.style.display = "none";
	    d5.style.display = "none";
	    d6.style.display = "flex";
    }
    if (dice2 === 1) {
	    d7.style.display = "flex";
    	d8.style.display = "none";
	    d9.style.display = "none";
	    d10.style.display = "none";
	    d11.style.display = "none";
	    d12.style.display = "none";
    } else if (dice2 === 2) {
	    d7.style.display = "none";
	    d8.style.display = "flex";
	    d9.style.display = "none";
	    d10.style.display = "none";
	    d11.style.display = "none";
	    d12.style.display = "none";
    } else if (dice2 === 3) {
		d7.style.display = "none";
	    d8.style.display = "none";
	    d9.style.display = "flex";
	    d10.style.display = "none";
	    d11.style.display = "none";
	    d12.style.display = "none";
    } else if (dice2 === 4) {
	    d7.style.display = "none";
	    d8.style.display = "none";
	    d9.style.display = "none";
	    d10.style.display = "flex";
	    d11.style.display = "none";
	    d12.style.display = "none";
    } else if (dice2 === 5) {
	    d7.style.display = "none";
	    d8.style.display = "none";
	    d9.style.display = "none";
	    d10.style.display = "none";
	    d11.style.display = "flex";
	    d12.style.display = "none";
    } else if (dice2 === 6) {
	    d7.style.display = "none";
	    d8.style.display = "none";
	    d9.style.display = "none";
	    d10.style.display = "none";
	    d11.style.display = "none";
	    d12.style.display = "flex";
    }
	correctAnswer = dice1 + dice2;
}
var submit = document.getElementById("sub");
submit.addEventListener("click", submitFunction);
function submitFunction() {
	var message1 = "<h4>Well done!</h4>";
	var message2 = "<h4>The answer is " + correctAnswer + "<br>Try again</h4>";
    correctAnswer = dice1 + dice2;
    console.log(correctAnswer);
    var valEntered = document.getElementById("diceAnswer").value;
    var numEntered = parseInt(valEntered);
    console.log(typeof numEntered);
    console.log(numEntered);
	console.log(valEntered);
	if (numEntered === correctAnswer) {
		document.getElementById("message-hundred").style.display = "block";
		document.getElementById("message-hundred").innerHTML = message1;
		document.getElementById("refresh-container").style.display = "flex";
	} else {
		document.getElementById("message-hundred").style.display = "block";
		document.getElementById("message-hundred").innerHTML = message2;
		document.getElementById("refresh-container").style.display = "flex";
	}
}
var refresh = document.getElementById("refresh-button");
refresh.addEventListener("click", rollFunction);