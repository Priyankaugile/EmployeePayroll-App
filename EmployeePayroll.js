
const salary = document.querySelector('#salary');
const salaryOutput = document.querySelector('.salary-output');
salaryOutput.textContent = salary.value;
salary.oninput = function() {
    salaryOutput.textContent = salary.value;
};

const name = document.querySelector('#name');
const nameError = document.querySelector('.name-error');
name.addEventListener('input', function() {
    let nameRegex = RegExp('^[A-Z][a-z]{2,}$');
    if(nameRegex.test(name.value))
        nameError.textContent = "";
    else
        nameError.textContent = "Name is incorrect";
});