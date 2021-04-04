function hundredSub() {
    var correctAnswers = [];
    var count;
    var inputOne = document.getElementById("hundred-1").value;
    var resultOne = '3';
    var inputTwo = document.getElementById("hundred-2").value;
    var resultTwo = '8';
    var inputThree = document.getElementById("hundred-3").value;
    var resultThree = '15';
    var inputFour = document.getElementById("hundred-4").value;
    var resultFour = '17';
    var inputFive = document.getElementById("hundred-5").value;
    var resultFive = '22';
    var inputSix = document.getElementById("hundred-6").value;
    var resultSix = '30';
    var inputSeven = document.getElementById("hundred-7").value;
    var resultSeven = '33';
    var inputEight = document.getElementById("hundred-8").value;
    var resultEight = '39';
    var inputNine = document.getElementById("hundred-9").value;
    var resultNine = '44';
    var inputTen = document.getElementById("hundred-10").value;
    var resultTen = '47';
    var inputEleven = document.getElementById("hundred-11").value;
    var resultEleven = '52';
    var inputTwelve = document.getElementById("hundred-12").value;
    var resultTwelve = '60';
    var inputThirteen = document.getElementById("hundred-13").value;
    var resultThirteen = '64';
    var inputFourteen = document.getElementById("hundred-14").value;
    var resultFourteen = '66';
    var inputFifteen = document.getElementById("hundred-15").value;
    var resultFifteen = '71';
    var inputSixteen = document.getElementById("hundred-16").value;
    var resultSixteen = '78';
    var inputSeventeen = document.getElementById("hundred-17").value;
    var resultSeventeen = '86';
    var inputEighteen = document.getElementById("hundred-18").value;
    var resultEighteen = '89';
    var inputNineteen = document.getElementById("hundred-19").value;
    var resultNineteen = '91';
    var inputTwenty = document.getElementById("hundred-20").value;
    var resultTwenty = '95';
    if (inputOne === resultOne) {
	    correctAnswers.push("inputOne");
	    if (inputTwo === resultTwo) {
		    correctAnswers.push("inputTwo");
		    if (inputThree === resultThree) {
		    	correctAnswers.push("inputThree");
			    if (inputFour === inputFour) {
				    correctAnswers.push("inputFour");
				    if (inputFive === resultFive) {
					    correctAnswers.push("inputFive");
					    if (inputSix === resultSix) {
						    correctAnswers.push("inputSix");
						    if (inputSeven === resultSeven) {
							    correctAnswers.push("inputSeven");
							    if (inputEight === resultEight) {
								    correctAnswers.push("inputEight");
								    if (inputNine === resultNine) {
									    correctAnswers.push("inputNine");
									    if (inputTen === resultTen) {
										    correctAnswers.push("inputTen");
										    if (inputEleven === resultEleven) {
											    correctAnswers.push("inputEleven");
										        if (inputTwelve === resultTwelve) {
											        correctAnswers.push("inputTwelve");
											        if (inputThirteen === resultThirteen) {
												        correctAnswers.push("inputThirteen");
												        if (inputFourteen === resultFourteen) {
												        	correctAnswers.push("inputFourteen");
													        if (inputFifteen === resultFifteen) {
														        correctAnswers.push("inputFifteen");
														        if (inputSixteen === resultSixteen) {
															        correctAnswers.push("inputSixteen");
															        if (inputSeventeen === resultSeventeen) {
																        correctAnswers.push("inputSeventeen");
															            if (inputEighteen === resultEighteen) {
																            correctAnswers.push("inputEighteen");
																            if (inputNineteen === resultNineteen) {
																     	        correctAnswers.push("inputNineteen");
																	            if (inputTwenty === resultTwenty) {
																		            correctAnswers.push("inputTwenty");
																	            }
																            }
															            }
														            }
												                }
												     	    }
												        }
											        }
										        }
									        }
								        }
							        }
							    }
						    }
				    	}
				    }
			    }
	    	}
	    }
    }
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
};