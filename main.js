'use strict';

/*
Задача

создать 3 объкта (objA, objB, objC) Придумать как минимум 1 свойство и 1 метод каждому объекту.

Прототипом objC дожен быть objB, а прототипом objB должен быть objA.


*/

//Реализовать цепочку протитопов с помощью Object.create

let fruit = {
	isfruit: true,
	 setName(name) {
	  this.name = name;
	},
	getName() {
		return this.name;
	}

}

let apple = Object.create(fruit);
apple.setName('apple');

let goldenApple = Object.create(apple);
goldenApple.setName('goldenApple');
goldenApple.type = 'sweet apple';
console.log(goldenApple);
console.log(goldenApple.isfruit);


//Реализовать цепочку протитопов с помощью непосредственного изменения прототипа 
//(__proto__, setPrototypeOf)

let obj1 = {
	IsWorker: true,
	gsetSalary(amount) {
		 this.salary = amount;
	},
	getSalary() {
		return this.salary;
	}
}

let obj2 = {
	isRemoteWork: true,
	getHours(hours) {
		this.hours = hours;
	},
	__proto__: obj1
}

let obj3 = {
	name: 'Vladimir',
	__proto__: obj2
}

console.log( obj3.IsWorker);// true 

let obj4 = Object.setPrototypeOf({}, obj3);
obj4.name = 'Olga';


//Реализовать цепочку протитопов с помощью функций конструкторов.
function Person(name) {
	this.type ='human';
}

Person.prototype.getName = function () {
	return this.name;
}

Person.prototype.setAge = function(age) {
	this.age = age;
}

Person.prototype.getAge = function() {
	return this.age;
}

function Teacher(name) {
	this.name = name;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.works = function() {};
Teacher.prototype.constructor = Teacher;

function Assistant(name) {
	this.name = name;
}

Assistant.prototype = Object.create(Teacher.prototype);
Assistant.prototype.helps = true;
Assistant.prototype.constructor = Assistant;


let vova = new Teacher('Vova');
let oleg = new Assistant('Oleg');
console.log(vova.getName());
console.log(oleg.getName());
oleg.setAge(28);
console.log(oleg.getAge());