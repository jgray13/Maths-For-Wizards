//  +1
var globalRandomOne;

function randomMoreOne(min, max) {
 var randomNumberOne = Math.floor(Math.random() * (max - min)) + min;
 document.getElementById("rnl-num-one").innerHTML = randomNumberOne;
  globalRandomOne = parseInt(randomNumberOne);
  console.log(randomNumberOne);
    console.log(globalRandomOne);
}
function getInput() {
	var answ1 = document.getElementById("more-num-line-1").value;
	var answ1Num = parseInt(answ1);
	var answ2 = document.getElementById("more-num-line-2").value;
	var answ2Num = parseInt(answ2);
	var answ3 = document.getElementById("more-num-line-4").value;
	var answ3Num = parseInt(answ3);
	var answ4 = document.getElementById("more-num-line-5").value;
	var answ4Num = parseInt(answ4);
	var input = parseInt(globalRandomOne);
	  console.log(answ1Num);
	  console.log(answ2Num);
	  console.log(answ3Num);
	  console.log(answ4Num);
    console.log(input);
	if (answ1Num === (input - 2) && answ2Num === (input - 1) && answ3Num === (input + 1) && answ4Num === (input + 2)) {
				document.getElementById("tickcontainerRNumberLines1").style.display = "flex";
			}		else {
				document.getElementById("tickcontainerRNumberLines1").style.display = "none";
	}
}
function clearInput() {
	document.getElementById("more-num-line-1").value = '';
	document.getElementById("more-num-line-2").value = '';
	document.getElementById("more-num-line-4").value = '';
	document.getElementById("more-num-line-5").value = '';
	document.getElementById("tickcontainerRNumberLines1").style.display = "none";
}

//   +10
var globalRandomTwo;
function randomMoreTwo(min, max) {
 var randomNumberTwo = Math.floor(Math.random() * (max - min)) + min;
 document.getElementById("rnl-num-three").innerHTML = randomNumberTwo;
  globalRandomTwo = parseInt(randomNumberTwo);
  return false;
}
function getInputTwo() {
	var answ1 = document.getElementById("more-num-line-6").value;
	var answ1Num = parseInt(answ1);
	var answ2 = document.getElementById("more-num-line-7").value;
	var answ2Num = parseInt(answ2);
	var answ3 = document.getElementById("more-num-line-8").value;
	var answ3Num = parseInt(answ3);
	var answ4 = document.getElementById("more-num-line-9").value;
	var answ4Num = parseInt(answ4);
	var input = parseInt(globalRandomTwo);
	  console.log(answ1Num);
	  console.log(answ2Num);
	  console.log(answ3Num);
	  console.log(answ4Num);
    console.log(input);
	if (answ1Num === (input - 20) && answ2Num === (input - 10) && answ3Num === (input + 10) && answ4Num === (input + 20) ) {
				document.getElementById("tickcontainerRNumberLines3").style.display = "flex";
			} else {
				document.getElementById("tickcontainerRNumberLines3").style.display = "none";
	}
	}
function clearInputTen() {
	document.getElementById("more-num-line-6").value = '';
	document.getElementById("more-num-line-7").value = '';
	document.getElementById("more-num-line-8").value = '';
	document.getElementById("more-num-line-9").value = '';
	document.getElementById("tickcontainerRNumberLines2").style.display = "none";
}	
	
//    +2
var globalRandomThree;

function randomMoreThree(min, max) {
 var randomNumberOne = Math.floor(Math.random() * (max - min)) + min;
 document.getElementById("rnl-num-two").innerHTML = randomNumberOne;
  globalRandomThree = parseInt(randomNumberOne);
  console.log(randomNumberOne);
    console.log(globalRandomThree);
}
function getInputThree() {
	var answ1 = document.getElementById("more-num-line-10").value;
	var answ1Num = parseInt(answ1);
	var answ2 = document.getElementById("more-num-line-11").value;
	var answ2Num = parseInt(answ2);
	var answ3 = document.getElementById("more-num-line-12").value;
	var answ3Num = parseInt(answ3);
	var answ4 = document.getElementById("more-num-line-13").value;
	var answ4Num = parseInt(answ4);
	var input = parseInt(globalRandomThree);
	  console.log(answ1Num);
	  console.log(answ2Num);
	  console.log(answ3Num);
	  console.log(answ4Num);
    console.log(input);
	if (answ1Num === (input - 4) && answ2Num === (input - 2) && answ3Num === (input + 2) && answ4Num === (input + 4)) {
				document.getElementById("tickcontainerRNumberLines2").style.display = "flex";
			} else {
				document.getElementById("tickcontainerRNumberLines2").style.display = "none";
	}
	}
function clearInputTwo() {
	document.getElementById("more-num-line-10").value = '';
	document.getElementById("more-num-line-11").value = '';
	document.getElementById("more-num-line-12").value = '';
	document.getElementById("more-num-line-13").value = '';
	document.getElementById("tickcontainerRNumberLines3").style.display = "none";
}