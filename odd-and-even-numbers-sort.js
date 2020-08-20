function allowDrop(ev) {
  ev.preventDefault();
}
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
/*
function oddEvenFunc() {
	var evenArray = document.getElementById("even-container").childNodes;
console.log(evenArray);
}
*/
/*
function oddEvenFunc() {
if (document.getElementById("number-tiles2").parentElement.nodeName && document.getElementById("number-tiles5").parentElement.nodeName === "even-tiles") {
	var scores;
	scores.push(document.getElementById("number-tiles2"), document.getElementById("number-tiles5")
	console.log(scores);
}
}
*/
function oddEvenFunc() {
	var results = [];
	var count;
	var oddNode = "odd-tiles";
	var evenNode = "even-tiles";
	var tile1 = document.getElementById("number-tiles1");
	var tile2 = document.getElementById("number-tiles2");
	var tile3 = document.getElementById("number-tiles3");
	var tile4 = document.getElementById("number-tiles4");
	var tile5 = document.getElementById("number-tiles5");
	var tile6 = document.getElementById("number-tiles6");
	var tile7 = document.getElementById("number-tiles7");
	var tile8 = document.getElementById("number-tiles8");
	var tile9 = document.getElementById("number-tiles9");
	var tile10 = document.getElementById("number-tiles10");
	var tile11 = document.getElementById("number-tiles11");
	var tile12 = document.getElementById("number-tiles12");
	var tile13 = document.getElementById("number-tiles13");
	var tile14 = document.getElementById("number-tiles14");
	var tile15 = document.getElementById("number-tiles15");
	var tile16 = document.getElementById("number-tiles16");
	var tile17 = document.getElementById("number-tiles17");
	var tile18 = document.getElementById("number-tiles18");
	var tile19 = document.getElementById("number-tiles19");
	var tile20 = document.getElementById("number-tiles20");
	if (tile1.parentNode.getAttribute("class") === oddNode) {
		results.push(tile1);
		if (tile2.parentNode.getAttribute("class") === evenNode) {
			results.push(tile2);
			if (tile3.parentNode.getAttribute("class") === oddNode) {
				results.push(tile3);
				if (tile4.parentNode.getAttribute("class") === oddNode) {
					results.push(tile4);
					if (tile5.parentNode.getAttribute("class") === oddNode) {
						results.push(tile5);
						if (tile5.parentNode.getAttribute("class") === oddNode) {
							results.push(tile6);
							if (tile7.parentNode.getAttribute("class") === oddNode) {
								results.push(tile7);
								if (tile8.parentNode.getAttribute("class") === oddNode) {
									results.push(tile7);
									if (tile9.parentNode.getAttribute("class") === oddNode) {
										results.push(tile9);
										if (tile10.parentNode.getAttribute("class")=== oddNode) {
											results.push(tile10);
											if (tile11.parentNode.getAttribute("class") === oddNode) {
												results.push(tile11);
												if (tile12.parentNode.getAttribute("class") === oddNode) {
													results.push(tile12);
													if (tile13.parentNode.getAttribute("class") === oddNode) {
														results.push(tile13);
														if (tile14.parentNode.getAttribute("class") === oddNode) {
															results.push(tile14);
															if (tile15.parentNode.getAttribute("class") === oddNode) {
																results.push(tile15);
																if (tile16.parentNode.getAttribute("class") === oddNode) {
																	results.push(tile16);
																	if (tile17.parentNode.getAttribute("class") === oddNode) {
																		results.push(tile17);
																		if (tile18.parentNode.getAttribute("class") === oddNode) {
																			results.push(tile18);
																			if (tile19.parentNode.getAttribute("class") === oddNode) {
																				results.push(tile19);
																				if (tile20.parentNode.getAttribute("class") === oddNode) {
																					results.push(tile20);
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
											
	console.log(results);
	count = results.length;
	console.log(count);
}