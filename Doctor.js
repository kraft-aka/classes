import HospitalEmployee from "./HospitalEmployee";

class Doctor extends HospitalEmployee {
  constructor(name, insurance) {
    super(name);
    this._insurance = insurance;
    this._remainingVacationDays = 20;
    this._salary = 100000;
  }
  get salary() {
    return this._salary;
  }

  increaseSalary() {
    this._salary = this._salary * 1.2;
  }
}

const docSam = new Doctor("Sam", true);
console.log(docSam.remainingVacationDays);
