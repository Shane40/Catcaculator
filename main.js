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


button1.onclick = function () {
	var output1 = Number(inputField1.value) + Number(inputField2.value);
	console.log(output1);
	output.innerHTML = output1;
}
button2.onclick = function () {
	var output2 = Number(inputField1.value) - Number(inputField2.value);
	console.log(output2);
	output.innerHTML = output2;
}
button3.onclick = function () {
	var output3 = Number(inputField1.value) * Number(inputField2.value);
	console.log(output3);
	output.innerHTML = output3;
}
button4.onclick = function () {
	var output4 = Number(inputField1.value) / Number(inputField2.value);
	console.log(output4);
	output.innerHTML = output4;
}


