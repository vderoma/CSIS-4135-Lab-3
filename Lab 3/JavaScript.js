﻿var selectSize = function () {
    var size = document.querySelector("input[type=radio]:checked").value;
	document.querySelector("#receipt").innerHTML = "Size: " + size;
}

var selectBeverage = function(){
	var beverage = document.querySelector("select option:checked").value;
	document.querySelector("#receipt").innerHTML = "Beverage: " + beverage;
}

var customerName = function (){
	var name = document.querySelector("#textInput").value;
	document.querySelector("#receipt").innerHTML = "Name: " + name;
}
var quantity;

var getQuantity = function (){
	quantity = Number(document.querySelector("#quantityInput").value);
	document.querySelector("#receipt").innerHTML = "Quantity: " + quantity;
	
}

var setAge = function(){
	var date = moment();
	var legalDate = date.subtract(21, "years");
	document.querySelector("#ageDate").innerHTML = legalDate.format('ddd MMM DD, YYYY');
}

var showAge = function(){
	if (document.getElementById("beverageList").value > "1"){
		setAge();
        showAgeCheck();
		showAgeChecker();
		hideReceipt();
		}
    else{
        hideAgeCheck();
		hideAgeChecker();
    }        
}



var getOrderPrice = function (){
	var size = document.querySelector("input[type=radio]:checked").value;
	var sizeNum=2;
	if (size=="Small")
	{
		sizeNum=0;
	}
	else if (size=="Medium")
	{
		sizeNum=1;
	}
	else{
		sizeNum=2;
	}

	var beverage = document.querySelector("select option:checked").value;
	
	var beverageList = [{ type: "Coffee"},
    { type: "Tea"},
    { type: "Beer"},
    { type: "Wine"}];

	prices=[
	[1, 2, 3],
	[2, 2.5, 3],
	[4, 5, 6],
	[8, 9, 10]
	];

   

	var name = document.querySelector("#textInput").value;

	quantity = Number(document.querySelector("#quantityInput").value);
	var price = prices[beverage][sizeNum];
	var ordertotal = quantity * price;

	var date = moment();
	var legalDate = date.subtract(21, "years");


	if (beverage == 2 || beverage == 3) {

	    document.querySelector("#ageDate").innerHTML = legalDate.format('ddd MMM DD, YYYY');
	    showAgeChecker();
	    showAgeCheck();
	    hideReceipt();
	    var birthDate = moment(document.querySelector("#ageInput").value);

	    if (legalDate >= birthDate) {
	        document.querySelector("#orderSummary").innerHTML = name + " ordered " + quantity + " " + size + " " + beverageList[beverage].type + " @ $" + prices[beverage][sizeNum];
	        document.querySelector("#orderTotal").innerHTML = "Your order total: $" + ordertotal;

	        showReceipt();

	        hideAgeCheck();
	        hideAgeChecker();
	    }
	    else if (legalDate <= birthDate) {
	        alert("Not old enough.")
	    }
	    else {
	    }
	}

	
	else {
	    
	    document.querySelector("#orderSummary").innerHTML = name + " ordered " + quantity + " " + size + " " + beverageList[beverage].type + " @ $" + prices[beverage][sizeNum];
	    document.querySelector("#orderTotal").innerHTML = "Your order total: $" + ordertotal;
	    
	    showReceipt();
	    
	    hideAgeCheck();
	    hideAgeChecker();
	    
	    
	}

	
       


    
}

var showReceipt = function()
{
    document.getElementById('receipt').style.display = "block";
}

var hideReceipt = function () {
    document.getElementById('receipt').style.display = "none";
}

var showAgeCheck = function () {
    document.getElementById('ageCheck').style.display = "block";
}
var hideAgeCheck = function () {
    document.getElementById('ageCheck').style.display = "none";
}
var showAgeChecker = function () {
    document.getElementById('ageChecker').style.display = "block";
}
var hideAgeChecker = function () {
    document.getElementById('ageChecker').style.display = "none";
}



window.onload = function (event) {
    document.querySelector("#orderSubmit").onclick = getOrderPrice;

}