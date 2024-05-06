import './main.scss';

let dateForm = document.forms[0];
console.log(dateForm);
let dayInput = dateForm[0];
let monthInput = dateForm[1];
let yearInput = dateForm[2];
let submitButton = dateForm[3];
let dayLabel = document.querySelector('.ageCalcApp__form-dayLabel');
let dayError = document.querySelector('.ageCalcApp__form-dayInput-error');
let monthLabel = document.querySelector('.ageCalcApp__form-monthLabel');
let monthError = document.querySelector('.ageCalcApp__form-monthInput-error');
let yearLabel = document.querySelector('.ageCalcApp__form-yearLabel');
let yearError = document.querySelector('.ageCalcApp__form-yearInput-error');

function checkEmptyField(e, input, label, error) {
	if (!input.value) {
		e.preventDefault();
		input.style.border = '1px solid hsl(0, 100%, 67%)';
		label.style.color = 'hsl(0, 100%, 67%)';
		error.innerHTML = 'This field is required';
		error.style.display = 'block';
		submitButton.style.gridRow = '4';
		console.log('empty');
	} else console.log('not empty' + input.value);
}

function checkValidField(e, input, label, error, field) {
	if (!input.value) return;
	if (!input.checkValidity() || !inputValue.match(/^[0-9]*$/)) {
		console.log('not valid');
		e.preventDefault();
		input.style.border = '1px solid hsl(0, 100%, 67%)';
		label.style.color = 'hsl(0, 100%, 67%)';
		error.innerHTML = `Must be a valid ${field}`;
		error.style.display = 'block';
		submitButton.style.gridRow = '4';
	} else console.log(`valid ${field}`);
}
submitButton.addEventListener('click', (e) => {
	checkValidField(e, dayInput, dayLabel, dayError, 'day');
	// checkValidField(e, monthInput, monthLabel, monthError, 'month');
	// checkValidField(e, yearInput, yearLabel, yearError, 'year');
	checkEmptyField(e, dayInput, dayLabel, dayError);
	// checkEmptyField(e, monthInput, monthLabel, monthError);
	// checkEmptyField(e, yearInput, yearLabel, yearError);
});
