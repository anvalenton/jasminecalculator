window.addEventListener('DOMContentLoaded', function() {
	const form = document.getElementById('calc-form');
	if (form) {
		setupIntialValues();
		form.addEventListener('submit', function(e) {
			e.preventDefault();
			console.log();
			update();
		});
	}
});

// Get the current values from the UI
// Update the monthly payment
//returns monthly payment
function update() {
	let values = getCurrentUIValues();
	let monthly = calculateMonthlyPayment(values);
	updateMonthly(monthly);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
//returns string monthly payment with two decimal places
function calculateMonthlyPayment(values) {
	console.log('calculatemonthlypaymentfunc');
	let principal = parseInt(values['amount']);
	let moRate = parseInt(values['rate']) / 100 / 12;
	let numOfPmts = parseInt(values['years']) * 12;
	let firstCalc = 1 + moRate;
	let secondCalc = Math.pow(firstCalc, -numOfPmts);
	let finalTop = 1 - secondCalc;
	let finalMo = principal / (finalTop / moRate);
	return finalMo.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
	document.getElementById('monthly-payment').innerText = monthly;
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
	var amount = document.getElementById('loan-amount');
	var years = document.getElementById('loan-years');
	var rate = document.getElementById('loan-rate');
	amount.value = 0;
	years.value = 0;
	rate.value = 0;
}

function getCurrentUIValues() {
	return {
		amount: +document.getElementById('loan-amount').value,
		years: +document.getElementById('loan-years').value,
		rate: +document.getElementById('loan-rate').value
	};
}
