import HospitalEmployee  from "./HospitalEmployee";

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }
  // getter
  get certifications() {
    return this._certifications;
  }
  //method
  addCertification(newCretification) {
    this._certifications.push(newCretification);
  }
}

const nurseOlynyk = new Nurse("Olynyk", ["Trauma", "Pediatrics"]);

console.log(nurseOlynyk);
nurseOlynyk.addCertification('Genetics')
console.log(nurseOlynyk.certifications)

// TODO : fix import