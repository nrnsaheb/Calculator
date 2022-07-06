let values = [];

let expressions = document.getElementById('expressions');
let total = document.getElementById('total');
function calc(parm1) {
	values.push(parm1);
	expressions.innerHTML = values.join('');
}
function sum() {
	let sum = eval(values.join(''));
	total.innerHTML = sum;
}
function allClear() {
	console.log('clear');
	values = [];
	total.innerHTML = '';
	expressions.innerHTML = '';
}
