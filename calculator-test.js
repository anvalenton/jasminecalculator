//it('should calculate the monthly rate correctly', function() {
//	// ...
//});
//beforeEach(function() {
//
//});

it('should collect an object of values', function() {
	let form = document.getElementById('calc-form');
	var amount = document.getElementById('loan-amount');
	var years = document.getElementById('loan-years');
	var rate = document.getElementById('loan-rate');
	amount.value = 7000;
	years.value = 3;
	rate.value = 10;
	expect(getCurrentUIValues()).toBeInstanceOf(Object);

	//	form.addEventListener('submit', function(e) {
	//    e.preventDefault();
	//
	//
	//	});

	//expect(getCurrentUIValues()).toBeInstanceOf(Object);
});

//it('should return a result with 2 decimal places', function() {
//	let testObject = [ (amount: 100000000), (rate: 10), (years: 100) ];
//	expect(calculateMonthlyPayment(testObject).toBeCloseTo(8333894.89, 2));
//
//	// ..
//});

/// etc
