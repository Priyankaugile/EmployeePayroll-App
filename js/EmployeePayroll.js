class EmployeePayrollData {
    // Property
    name;
    gender;
    department;
    salary;
    startDate;
    notes;

    constructor(...params) {
        this.name = params[0];
        this.gender = params[1];
        this.department = params[2];
        this.salary = params[3];
        this.startDate = params[4];
        this.notes = params[5];
    }

    get getName() {
        return this.name;
    }

    get getGender() {
        return this.gender;
    }

    get getDepartment() {
        return this.department;
    }
    
    get getSalary() {
        return this.salary;
    }
    
    get getStartDate() {
        return this.startDate;
    }
    
    get getNotes() {
        return this.notes;
    }

    set setName(name) {
        let nameRegex = RegExp('^[A-Z][a-z A-Z]{2,}$');
        if(name.match(nameRegex)){
        this.name = name;
        }
        else 
        throw "Name: " + name + " is incorrect";   
    }

    set setDepartment(department) {
        this.department = department;
    }

    set setSalary(salary) {
        this.salary = salary;
    }

    set setGender(gender) {
        this.gender = gender;
    }

    set setStartDate(startDate) {
        if(startDate == "Invalid Date")
            throw "Date should neither be empty nor be invalid";
        let presentDate = new Date();
        let year = presentDate.getFullYear();
        let month = presentDate.getMonth();
        let date = presentDate.getDate();
        presentDate = new Date(year, month, date);
        let differenceInTime = presentDate.getTime() - startDate.getTime(); 
        let differenceInDays = differenceInTime / (1000 * 60 * 60 * 24);
        if (startDate  > presentDate)
            throw "Start Date should not be the future date";
        else if(differenceInDays <=30)
            this.startDate = startDate;
        else
            throw "Invalid Date";
    }

    set setNotes(notes) {
          this.notes = notes;
    }

    toString() { 
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = new Date(this.startDate).toLocaleDateString("en-US", options);
        return " Name: " + this.name + "\n Gender: " + this.gender + "\n Department: " + this.department + "\n Salary: " + this.salary + "\n Start Date: " + empDate + "\n Notes: " + this.notes;
    }
}

const salary = document.querySelector('#salary');
const salaryOutput = document.querySelector('.salary-output');
salaryOutput.textContent = salary.value;
salary.oninput = function() {
    salaryOutput.textContent = salary.value;
};


