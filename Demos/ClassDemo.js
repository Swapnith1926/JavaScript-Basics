/*
The code given explains the usage of static method, Inheritance and super keyword.
Problem Statement
The given code highlights the creation of a class,Inheritance. 
Usage of static method and super keyword.
Call the static method(code()) using the child class name and observe the output.
*/

class Employee {
  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
  swipeIn() {
    console.log("Employee " + this.id + " has swiped in at " + new Date());
  }
  //static method that can be called only by using class name.
  static code() {
    console.log("Employee is coding");
  }
}
//child class that can inherit all the properties of parent class(Employee)
class PartTimeEmployee extends Employee {
  constructor(id, name, age, contractPeriod) {
    //to access parent class constructor
    super(id, name, age);
    this.contractPeriod = contractPeriod;
  }
  static code() {
    console.log("Part Time Employee is coding");
  }
}
let e1 = new Employee(19, "Swapnith", 21);
let e2 = new PartTimeEmployee(26, "Shreya", 20, 1926);
console.log("Calling Static method with Employee Class");
Employee.code();
e1.swipeIn();

console.log(
  "Employee Details are : " + "\n" + "Emp ID - ",
  e1.id,
  "Emp Name - ",
  e1.name,
  "Emp Age - ",
  e1.age
);

console.log("Calling Static method with Part Time Employee Class");
PartTimeEmployee.code();
e2.swipeIn();

console.log(
  "Part Time Employee Details are : " + "\n" + "Part Time Emp ID - ",
  e2.id,
  "Part Time Emp Name - ",
  e2.name,
  "Part Time Emp Age - ",
  e2.age,
  "Part Time Emp Contract period - ",
  e2.contractPeriod
);
