import HospitalEmployee  from "./HospitalEmployee";

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }
}

const nurseOlynyk = new Nurse("Olynyk", ["Trauma", "Pediatrics"]);

console.log(nurseOlynyk);

// TODO : fix import