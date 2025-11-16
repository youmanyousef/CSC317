let operation = ""
let currentNumber = "";
let output = ""
let prevOperation = ""
let prevOutput = ""
const nums = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const numsAsString = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let operationList = []
const operators = ["AC", "neg", "pct", "div", "mul", "sub", "plus", "dec", "dzero", "equ"];
const operatorsAsString = ["", "±","%","÷","×","−","+","."]

const isDecValidNumber = (str) => {
	let tempNum = Number(str);
	console.log(tempNum);
	if ((tempNum !== tempNum)) {
		return false;
	}
	return true;
}

const calculateAnswer = (list) => {
	//
}

const updateOperation = (x) => {
	//console.log(x);
	if (nums.includes(x)) {
		let numsIndex = nums.indexOf(x);
		currentNumber = currentNumber.concat(numsAsString[numsIndex]);
		console.log(currentNumber);
		genOutput();
		
	} else if (operators.includes(x)) {
		let operatorsIndex = operators.indexOf(x);
		if (currentNumber === "") {
			return;
		}
		if (x === "equ") {
			//
			return;
		} 
		switch (x) {
			case "AC":
				console.log('hi');
				operation = "";
				operationList = [];
				prevOperation = "";
				currentNumber = "";
				break;
			case "neg":
				if (currentNumber.charAt(0) !== "-") {
					currentNumber = "-" + currentNumber;
				} else {
					currentNumber = currentNumber.slice(1, currentNumber.length);
				}
				break;
			case "div":
			case "mul":
			case "sub":
			case "plus":
				/* if (operators.includes(operationList.at(-1))) {
					operationList.pop();
					operationList.push(x);
				} else  */if (operationList === []) {
					return;
				} else {
					operationList.push(currentNumber);
					operationList.push(x);
					console.log("tryign to clear number");
					currentNumber = "";
				}
				break;
			case "dec":
				
				if (isDecValidNumber(currentNumber.concat('.0'))) {
					currentNumber = currentNumber.concat('.')
				}
				
				break;
			case "pct":
				let parsedCurrentNumber = Number(currentNumber);
				parsedCurrentNumber /= 100;
				currentNumber = String(parsedCurrentNumber);
				break;
			case "dzero":
				currentNumber += "00";
				break;
			case "equ":
				break;
		}
		genPrevOutput();
		console.log(operationList);
	} else {
		console.log('Invalid input!');
	}
}

const genPrevOutput = () => {
	prevOutput = "";
	operationList.forEach(opr =>{
		
		if (operators.includes(opr)) {
			
			oprIndex = operators.indexOf(opr);
			prevOutput = prevOutput.concat(operatorsAsString[oprIndex]+' ');
			
		} else {
			console.log("hii");
			prevOutput = prevOutput.concat(opr+' ');
		}
	});
}

const genOutput = () => {
	output = currentNumber;
}

const updateScreen = () => {
	let screenPrevOperation = document.getElementById("prevOutput");
	let screenOutput = document.getElementById("output");
	screenOutput.innerHTML = output;
	console.log(`output is ${prevOutput}`);
	screenPrevOperation.innerHTML = prevOutput;
}
setInterval(updateScreen, 100);

document.addEventListener("DOMContentLoaded", () => {
	
	let numsAndOperators = nums.concat(operators);
	numsAndOperators.forEach(id => {
		let element = document.getElementById(id);
		element.addEventListener("click", () => {
			updateOperation(id);
		});
	});
	
	document.addEventListener("keydown", (event) => {
		if (event.key === "0") {
			updateOperation("zero");
		} else if (event.key === "1") {
			updateOperation("one");
		} else if (event.key === "2") {
			updateOperation("two");
		} else if (event.key === "3") {
			updateOperation("three");
		} else if (event.key === "4") {
			updateOperation("four");
		} else if (event.key === "5") {
			updateOperation("five");
		} else if (event.key === "6") {
			updateOperation("six");
		} else if (event.key === "7") {
			updateOperation("seven");
		} else if (event.key === "8") {
			updateOperation("eight");
		} else if (event.key === "9") {
			updateOperation("nine");
		} else if (event.key === "Escape") {
			updateOperation("AC");
		} else if (event.key === "-") {
			updateOperation("sub");
		} else if (event.key === "*") {
			updateOperation("mul");
		} else if (event.key === "/") {
			updateOperation("div");
		} else if ((event.key === "=" )|| (event.key === "Enter")) {
			updateOperation("equ");
		} else if (event.key === "+") {
			updateOperation("plus");
		}
	});
});