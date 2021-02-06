// Zadanie 1
const person = {
    name: 'Kamil',
    surname: 'Brodziak',
    age: 22,
    country: 'Poland',
    city: 'Cracow',
    print() {
        console.log(`Imię: ${this.name}, Nazwisko: ${this.surname}, Wiek: ${this.age}, Kraj: ${this.country}, Miasto: ${this.city}`);
    },
    addAge() {
        this.age++;
    }
}

const person2 = {
    name: 'Chytra',
    surname: 'Baba',
    age: 122,
    country: 'Poland',
    city: 'Radom',
    print() {
        console.log(`Imię: ${this.name}, Nazwisko: ${this.surname}, Wiek: ${this.age}, Kraj: ${this.country}, Miasto: ${this.city}`);
    },
    addAge() {
        this.age += 1;
    }
}

person.print();
person.addAge();
person.print();
person.addAge();
person.print();
person.addAge();
person.addAge();
person.print();
person2.print();
person2.addAge();
person2.addAge();
person2.print();

// Zadanie 2
person.favouriteDishes = ['Pizza', 'Spaghetti'];
person2.favouriteDishes = ['Zbyszko 3 cytryny'];
person.printDishes = function() {
    console.log(this.favouriteDishes);
}
person2.printDishes =function() {
    console.log(this.favouriteDishes);
}
person.addDish = function(dish) {
    this.favouriteDishes.push(dish);
}
person2.addDish = function(dish) {
    this.favouriteDishes.push(dish);
}
person.printDishes();
person2.printDishes();
person.addDish('Platki na mleku');
person2.addDish('Pierogi');
person.printDishes();
person2.printDishes()

// Zadanie 3
const calculator = {
    a: 0,
    b: 0,
    changeNums(a, b) {
        this.a = a;
        this.b = b;
    },
    sum() {
        console.log(this.a + this.b);
    },
    substract() {
        console.log(this.a - this.b);
    },
    multiply() {
        console.log(this.a * this.b);
    },
    divide() {
        if(this.b === 0) {
            console.log("Nie można dzielić przez 0");
        } else {
            console.log(this.a / this.b);
        }
    }
}
calculator.changeNums(2,5);
calculator.sum();
calculator.substract();
calculator.multiply();
calculator.divide();

// Zadanie 4
const ladderSimulator = {
    length: 3,
    current: 0,
    climbUp() {
        if(this.current + 1 <= this.length) {
            this.current++;
            this.printCurrent();
        } else {
            console.log('Udalo Ci sie wejsc po drabinie!');
        }
    },
    climbDown() {
        if(this.current - 1 > 0) {
            this.current--;
            this.printCurrent();
        } else {
            console.log('Udalo Ci sie zejsc po drabinie!');
        }
    },
    printCurrent() {
        console.log(`Jestes na ${this.current} stopniu z ${this.length}`);
    }
}
ladderSimulator.climbUp();
ladderSimulator.printCurrent();
ladderSimulator.climbUp();
ladderSimulator.climbUp();
ladderSimulator.climbUp();
ladderSimulator.climbDown();
ladderSimulator.climbDown();
ladderSimulator.climbDown();
ladderSimulator.climbDown();