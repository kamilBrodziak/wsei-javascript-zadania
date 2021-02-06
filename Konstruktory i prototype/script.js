function Person(name, surname, age, country, city, language) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.country = country;
    this.city = city;
    this.language = language;
    this.changeAge = function(age) {
        this.age = age;
    }
    this.changeCity = function(city) {
        this.city = city;
    }
}

const p1 = new Person('Andrzej', 'Andrzej', 22, 'Poland', 'Cracow', 'Polish');
const p2 = new Person('Tomasz', 'Romasz', 33, 'Poland', 'Warsaw', 'Polish');
const p3 = new Person('Samuel', 'L. Jackson', 72, 'USA', 'Washington', 'English');
const p4 = new Person('Andrzej', 'Duda', 48, 'DudaLand', 'DudaCity', 'Dudish');
const p5 = new Person('Person', 'Personik', 112, 'Pers', 'Per', 'Personish');
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
console.log(p5);
p4.changeAge(52);
p4.changeCity('Ostry cien mgly');
console.log(p4);

// Zadanie 2
class Calculator {
    constructor() {
        this.history = [];
    }
    add(a, b) {
        this.history.push({operation: 'add', firstNumber: a, secondNumber: b, result: a+b});
        return a+b;
    }
    substract(a, b) {
        this.history.push({operation: 'substract', firstNumber: a, secondNumber: b, result: a-b});
        return a-b;
    }
    multiply(a, b) {
        this.history.push({operation: 'multiply', firstNumber: a, secondNumber: b, result: a*b});
        return a*b;
    }
    divide(a, b) {
        const result = (b !== 0) ? a/b : NaN;
        this.history.push({operation: 'divide', firstNumber: a, secondNumber: b, result: result});
        return result;
    }
    showHistory() {
        console.log(this.history);
    }
    clearHistory() {
        this.history = [];
    }
}
const calculator = new Calculator();
calculator.add(2,55);
calculator.substract(52,214);
calculator.multiply(22,22);
calculator.divide(5,2);
calculator.divide(5, 0);
calculator.showHistory();
const calculator2 = new Calculator();
calculator2.add(232,125);
calculator2.clearHistory();
calculator2.substract(212,24);
calculator2.multiply(2,2);
calculator2.divide(4,44);
calculator2.showHistory();

// Zadanie 3
function Game() {
    this.changeNum = function() {
        const _this = this;
        Game.prototype.interval = setInterval(() => {
            Game.prototype.num = Math.round(Math.random() * 10);
            console.log(Game.prototype.num);
            _this.checkNum();
        }, 100);
    }
    this.checkNum = function() {
        if(Game.prototype.num > 5) {
            console.log('Game ends');
            clearInterval(Game.prototype.interval);
        }
    }
}
const game = new Game();
game.changeNum();