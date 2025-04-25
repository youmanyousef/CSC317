// calculator.js
console.log("hi");
let operation = ""
let output = ""
let prevOperation = ""
let prevOutput = ""
let operationList = []
const nums = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const numsAsString = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const operators = ["AC", "neg", "pct", "div", "mul", "sub", "plus", "dec", "dzero", "equ"];
const operatorsAsString = ["", "±","%","÷","×","−","+","."]
const isLastCharANum = (str) =>  {
	let lastCharacter = str.charAt(str.length - 1);
	let lastChIndex = numsAsString.indexOf(lastCharacter);
	return lastChIndex;
}

const calculateAnswer = (list) => {
	const operators = {
		"plus": "+",
		"sub": "-",
		"mul": "*",
		"div": "/"
	};
	let expression = "";
	for (let item of list) {
		if (operators[item]) {
			expression += ` ${operators[item]} `;
		} else {
			expression += item;
		}
	}

	// Use eval to evaluate the expression string
	try {
		return eval(expression);
	} catch (e) {
		console.error("Invalid expression:", expression);
		return null;
	}
}


const updateOperation = (x) => {
	let numsIndex = nums.indexOf(x);
	let operatorsIndex = operators.indexOf(x);
	document.getElementById("output").textContent = operation;
	if (numsIndex !== -1) {
		operation += numsAsString[numsIndex];
		document.getElementById("output").textContent = operation;
	} 
	else if (operatorsIndex !== -1) {
		switch(x) {
			case "AC":
				operation = "";
				operationList = [];
				prevOperation = ""
				break;
			case "neg":
				operation = "-"+operation;
				break;
			case "div":
			case "mul":
			case "sub":
			case "plus":
				if (isLastCharANum(operation) !== -1) {
					operationList.push(operation);
					operationList.push(x);
					prevOperation += operation + operatorsAsString[operatorsIndex];
					operation = "";
				} else {
					operationList.pop();
					operationList.push(x);
					prevOperation = prevOperation.substring(0,prevOperation.length - 1) 
									+ operatorsAsString[operatorsIndex];
				}
				break;
			case "dec":
				if (isLastCharANum(operation) !== -1) {
					operation += ".";
				}
				break;
			case "pct":
				let operationAsNumber = parseInt(operation);
				operationAsNumber *= 100;
				operation = String(operationAsNumber);
				document.getElementById("output").textContent = operation;
				break;
			case "dzero":
				operation += "00";
				document.getElementById("output").textContent = operation;
				break;
			case "equ":
				operationList.push(operation);
				prevOperation+=operation;
				let answer = calculateAnswer(operationList);
				console.log(answer);
				operation = answer;
				document.getElementById("prevOperation").textContent = prevOperation;
				document.getElementById("output").textContent = operation;
				operation = "";
				prevOperation = "";
				break;
		}
		console.log(operation);
		console.log(operationList);
		
		document.getElementById("prevOperation").textContent = prevOperation;
	} else {
		console.log("Something wrong happened.");
	}
		
	
	//console.log(operation);
}

document.addEventListener("DOMContentLoaded", () => {
	
	let defaultTheme = document.getElementById('default');
	let lightTheme = document.getElementById('light');
	let colorfulTheme = document.getElementById('colorful');
	
	defaultTheme.addEventListener('click', () => {
		document.body.style.setProperty("--primary-color", "black");
		document.body.style.setProperty("--secondary-color", "#ffa500");
		document.body.style.setProperty("--text-color", "white");
	});
	lightTheme.addEventListener('click', () => {
		document.body.style.setProperty("--primary-color", "white");
		document.body.style.setProperty("--secondary-color", "#ffa500");
		document.body.style.setProperty("--text-color", "black");
	});
	colorfulTheme.addEventListener('click', () => {
		document.body.style.setProperty("--primary-color", "linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet)");
		document.body.style.setProperty("--secondary-color", "#ffa500");
		document.body.style.setProperty("--text-color", "black");
	});
	
	let numsAndOperators = nums.concat(operators);
	numsAndOperators.forEach(id => {
		let element = document.getElementById(id);
		element.addEventListener("click", () => {
			updateOperation(id);
		});
	});
	document.addEventListener("keydown", (event) => {
	if (event.key === "0") {
		
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
	} else if (event.key === "=") {
		updateOperation("equ");
	} else if (event.key === "+") {
		updateOperation("plus");
	}
});

});

