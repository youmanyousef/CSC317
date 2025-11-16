let operation = ""
let output = ""
let prevOperation = ""
let prevOutput = ""
const nums = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const numsAsString = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let operationList = []
const operators = ["AC", "neg", "pct", "div", "mul", "sub", "plus", "dec", "dzero", "equ"];
const operatorsAsString = ["", "±","%","÷","×","−","+","."]

const calculateAnswer = (list) => {
	//
}

const updateOperation = (x) => {
	console.log(x);
}

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