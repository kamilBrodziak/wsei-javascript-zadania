// Zadanie 1
console.log('Zadanie 1');
const car = {
    name: 'ferrari',
    color: 'black',
    km: 300,
    fuelCapacity: 100
}
console.log(car.name);
console.log(car.color);
console.log(car.km);
console.log(car.fuelCapacity);

// Zadanie 2
console.log('Zadanie 2');
car.changeName = (newName) => car.name = newName;
car.changeName('lamborghini');
console.log(car.name);

// Zadanie 3
console.log('Zadanie 3');
const mathSum = {
    sum: 0,
    sumArr: (arr) => mathSum.sum = arr.reduce((a, b) => a + b, 0)
}
mathSum.sumArr([1,2,3,4,5]);
console.log(mathSum.sum);

// Zadanie 4
console.log('Zadanie 4');
const car2 = {
    name: 'BMW',
    age: 12,
    color: 'red',
    km: 150
}
for(let property in car2) {
   console.log(`${property}: ${car[property]}`);
}

// Zadanie 5
console.log('Zadanie 5');
car2.seat = {
    color: 'white',
    material: 'leather'
}
for(let property in car2.seat) {
    console.log(`${property}: ${car2.seat[property]}`);
}

// Zadanie 6
console.log('Zadanie 6');
car2.mileage = 70000;
car2.hello = () => console.log('Hello');
console.log(car2.mileage);
car2.hello();
