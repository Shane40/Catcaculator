console.log("Come here, kitty, kitty!");


/*
What we want to do
1. Number area
2. Calculate
3. Answer
parseFloat
(inputField1 + inputField2; inputField1 - inputField2; inputField1 * inputField2; inputField1 / inputField2)
*/



var inputField1, inputField2, button, output, inputValue;

// Set up my variables
inputField1 = document.getElementById('num_one');
inputField2 = document.getElementById('num_two');
button1 = document.getElementById('calculateBtn1');
button2 = document.getElementById('calculateBtn2');
button3 = document.getElementById('calculateBtn3');
button4 = document.getElementById('calculateBtn4');
output = document.getElementById('answer');

/*
	1. Watch for a click of "button"
	2. When click happens, I grab value of "inputField"
	3. Dump that value into my "output" getElementById
*/

// button.onclick = function() {
// console.log ('Button was clicked');
// 	output.innerHTML = (inputField1.value + inputField2.value) || 
// 	(inputField1.value - inputField2.value) || (inputField1.value * inputField2.value) || (inputField1.value / inputField2.value);
// 	console.log(output.innerHTML);

button1.onclick = function () {
	var output = Number(inputField1.value) + Number(inputField2.value);
	console.log(output);
}
button2.onclick = function () {
	var output = Number(inputField1.value) - Number(inputField2.value);
	console.log(output);
}
button3.onclick = function () {
	var output = Number(inputField1.value) * Number(inputField2.value);
	console.log(output);
}
button4.onclick = function () {
	var output = Number(inputField1.value) / Number(inputField2.value);
	console.log(output);
}

