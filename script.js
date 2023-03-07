/*
   JavaScript 6th Edition
   Chapter 7
   Hands-on Project 7-5

   Author: Douglas Faulkner
   Date:   March 5, 2023

   Filename: script.js
*/
//Step3
"use strict";
var delivInfo = {};
var delivSummary = document.getElementById("deliverTo");
//Step4
var foodInfo = {};
var foodSummary = document.getElementById("order");
function processDeliveryInfo() {
	var prop;
	delivInfo.name = document.getElementById("nameinput").value;
	delivInfo.addr = document.getElementById("addrinput").value;
	delivInfo.city = document.getElementById("cityinput").value;
	delivInfo.email = document.getElementById("emailinput").value;
	delivInfo.phone = document.getElementById("phoneinput").value;
	for (prop in delivInfo) {
		delivSummary.innerHTML += "<p>" + delivInfo[prop] + "</p>";
	}
}
function previewOrder() {
	processDeliveryInfo();
	document.getElementById("sec").style.display = "block";
}
function createEventListeners() {
	var btn = document.getElementById("previewBtn");
	btn.addEventListener("click", previewOrder, false);
}
if (window.addEventListener) {
	window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", createEventListeners);
}
//Step5
function processFood(){
	var prop;
	var crustOpt = document.getElementsByName("crust");
	var toppings = 0;
	var toppingBoxes = document.getElementsByName("toppings");
	var instr = document.getElementById("instructions");
	if (crustOpt[0].checked) {
		foodInfo.crust = crustOpt[0].value;
	} else {
		foodInfo.crust = crustOpt[1].value;
	}
	foodInfo.size = document.getElementById("size").value;
	for (var i = 0; i < toppingBoxes.length; i++) {
		if (toppingBoxes[i].checked) {
			toppings++;
			foodInfo["topping" + toppings] = toppingBoxes[i].value;
		}
		if (!(instr.value === "")) {
			foodInfo.instructions = instr.value;
		}
	}
	//Step6
	foodSummary.innerHTML += "<p><span>Crust</span>: " + foodInfo.crust + "</p>";
	foodSummary.innerHTML += "<p><span>Size</span>: " + foodInfo.size + "</p>";
	foodSummary.innerHTML += "<p><span>Topping(s)</span>: " + "</p>";
	foodSummary.innerHTML += "<ul>";
	for (var i = 1; i < 6; i++) {
		if (foodInfo["topping" + i]) {
			foodSummary.innerHTML += "<li>" + foodInfo["topping" + i] + "</li>";
		}
	}
	foodSummary.innerHTML += "</ul>";
	foodSummary.innerHTML += "<p><span>Instructions</span>: " + foodInfo.instructions;
	document.getElementById("order").style.display = "block";
}