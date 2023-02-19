class Car {
  constructor(model, year, color) {
    this._model = model;
    this._year = year;
    this._color = color;
    this._mileage = 0;
  }

  get fullInfo() {
    return `Model: ${this._model}, Year: ${this._year}, Color: ${this._color}, Mileage: ${this._mileage}`;
  }
  changeMileage(mile) {
    this._mileage = this._mileage + mile;
  }
}

const vw = new Car('VW', 2022, 'Black');
const bmw = new Car('BMW', 2021, 'White');

console.log(vw._color)
console.log(vw.fullInfo)
vw._mileage = 20
console.log(vw.fullInfo)