function Person(name, age) {
    // this = Object.create(Person.prototype)
    this.name = name;
    this.age = age;
    // return this;
  }
  
  Person.prototype.work = function () {
    console.log(`${this.name} is working`);
  };
  
  Person.prototype.sleep = function () {
    console.log(`${this.name} is sleeping`);
  };
  
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    work() {
      console.log(`${this.name} is working`);
    }
  
    sleep() {
      console.log(`${this.name} is sleeping`);
    }
  }
  
  const mikasa = new Person("Mikasa", 25);
  mikasa.sleep();