alert("You're leaving Earth in");

//increase speed = less fuel

var distance = document.getElementById("distance");
var speed = document.getElementById("speed");

//FUEL

var fuel = 500000;
function updateFuel(){
	if(fuel > 0){
		fuel -= 1243;
		document.getElementById('fuel').innerHTML = fuel + ' ' + 'KG';
	} else {
		document.getElementById('fuel').innerHTML = 'ADD FUEL';
	}
}

//danger sign appeats below when fuel is less than 190000
document.getElementById('danger').style.color = "red";
document.getElementById('danger').innerHTML = 'DANGER';


//DISTANCE
//if speed increase by 1000, Distance decrease by 1000
//function updateDistance(){
//	if()
//}
var distance = 54600000;
function updateDistance(){
	if(distance > 0){
		distance -= 9443;
		document.getElementById('distance').innerHTML = distance + ' ' + 'KM';
	} else {
		document.getElementById('distance').innerHTML = 'LANDING';
	}
}

window.onload = function(){
	setInterval(updateFuel, 1056);
	setInterval(updateDistance, 1056);
	danger.style.display = "none";
}


//SPEED 
var minSpeed = 4395;
var maxSpeed = 58536; //if exceed, danger sign appears
var speedPlus = 0;
var speedMinus;
var newSpeed;


//document.getElementById('speed').innerHTML= minSpeed;

document.getElementById ('speedUpBtn').onclick = function(){
	speedPlus += 1045;
	newSpeed = minSpeed + speedPlus; 
	document.getElementById('speed').innerHTML= newSpeed + ' ' + 'KM / H';
}




//function newSpeed(){
//	if (newSpeed > maxSpeed) {
//		alert("danger");
//	}
//}




//MINUS SPEED, NO IDEA HOW
//document.getElementById ('speedDownBtn').onclick = function(){
//	speedMinus -= 1000;
//	document.getElementById('speed').innerHTML= minSpeed + speedMinus + ' ' + 'KM / H';
//}





//document.getElementsById('speedUpbtn').onclick = function(){

//}










/*var seconds = 10;

function updateCountdown(){
	if(seconds > 0){
		seconds -= 1;
		document.getElementById('countdown').innerHTML = seconds + ' seconds';
	} else {
		document.getElementById('countdown').innerHTML = 'Lift Off';
	}
}

window.onload = function(){
	setInterval(updateCountdown, 1000);
}




//ON CLICK TEXT COLOR CHANGE
//document.getElementsByTagName('h1')[0].onclick = function(){
//	document.getElementsByTagName('h1')[0].innerHTML = 'You clicked me';
//	document.getElementsByTagName('h1')[0].className = 'highlight';
//};


// for distance
*/

