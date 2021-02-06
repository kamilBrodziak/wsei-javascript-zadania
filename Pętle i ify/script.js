// Zadanie 1
const num1 = 5, num2 = 2;
if(num1 > num2) {
    console.log(num1)
} else {
    console.log(num2)
}

// Zadanie 2
const numb1 = 21, numb2 = 89, numb3 = 13;
if(numb1 > numb2 && numb1 > numb3) {
    console.log(numb1);
} else if(numb2 > numb3) {
    console.log(numb2);
} else {
    console.log(numb3);
}

// Zadanie 3
for(let i = 0; i < 10; ++i) {
  console.log('Lubię Javacript');
}

// Zadanie 4
let result = 0;
for(let i = 1; i < 11; ++i) {
    result += 1;
}
console.log(result);

// Zadanie 5
const n = 11;
for(let i = 0; i < n; ++i) {
    console.log(`${i} - ${i%2 ? 'nieparzysta' : 'parzysta'}`);
}

// Zadanie 6
for(let i = 0; i < 5; i++) {
    for(let j = 0; j < 5; ++j) {
        console.log("i=" + i + ", j=" + j);
    }
}

// Zadanie 7
for(let i = 0; i < 100; ++i) {
    if(i % 15 === 0) {
        console.log('FizzBuzz');
    } else if(i % 3 === 0) {
        console.log('Fizz');
    } else if(i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

// Zadanie 8a
for(let i = 1; i < 5; ++i) {
    console.log("*".repeat(i))
}

// Zadanie 8b
for(let i = 1; i <= 5; ++i) {
    console.log(" ".repeat(5 - i) + "* ".repeat(i))
}

// Zadanie 8c
for(let i = 0; i < 5; ++i) {
    console.log(" ".repeat(5 - i) + "*".repeat(i*2 + 1))
}

// Zadanie 8d
for(let i = 1; i <= 5; i++) {
    console.log("*".repeat(i) + Array.from({length: 5 - i}, (_, j) => j + 1).join(""));
}
console.log("-".repeat(5));
for(let i = 0; i < 5; i++) {
    console.log("*".repeat(5 - i) + Array.from({length: i}, (_, j) => 5 - j - 1).reverse().join(""))
}

// Zadanie 8e
for(let i = 1; i <= 5; ++i) {
    console.log(" ".repeat(5 - i) + "* ".repeat(i))
}
for(let i = 0; i < 3; ++i) {
    console.log(" ".repeat((Math.floor(5 / 2)) * 2) + "*");
}