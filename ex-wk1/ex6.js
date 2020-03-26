  class Car {
      constructor(model, year) {
          this.model = model;
          this.year = year;
      }
      carInfo() {
          return "Model: " + `${this.model} \nYear:  ${this.year} \n`;
      }
  }

  class Sedan extends Car {
      constructor(model, year, balance) {
          super(model, year)
          this.balance = balance;
      }
      info() {
          return `${this.model}'s balance is ${this.balance}` + '.00';
      }
  }

  const chevrolet = new Car('Chevrolet Camaro', 2010);
  console.log(chevrolet.carInfo());

  const lada = new Sedan('Lada', 2001, 100);
  console.log(lada.info());