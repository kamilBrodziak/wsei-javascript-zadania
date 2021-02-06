// Zadanie 1
const button = document.getElementById("test-event");
button.addEventListener('click', (e) => {
    console.log(e);
})
// Zakomentowałem aby widzieć inne eventy
// window.addEventListener('mousemove', (e) => console.log(e));

button.addEventListener('mouseenter', (e) => console.log(e));
window.addEventListener('keydown', (e) => console.log(e));
window.addEventListener('scroll', (e) => console.log(e));
const inputTest = document.getElementById('input-test');
inputTest.addEventListener('change', (e) => console.log(e));

// Zadanie 2
document.getElementById('ex2').addEventListener('click', (e) => {
    const span = e.target.nextElementSibling;
    span.innerText = e.target.dataset.text;
})

// Zadanie 3
const square = document.getElementById('ex3');
const button2Color = square.style.backgroundColor;
square.addEventListener('mouseenter', (e) => square.style.backgroundColor = 'blue');
square.addEventListener('mouseleave', (e) => square.style.backgroundColor = button2Color);

// Zadanie 4
inputTest.addEventListener('keyup', (e) => {
    if(/[0-9]/.test(e.target.value)) {
        e.target.nextElementSibling.innerText = 'You cannot enter numbers';
    } else {
        e.target.nextElementSibling.innerText = '';
    }
})

// Zadanie 5
const div5 = document.getElementById('ex5');
let counter = 0;
document.getElementById('ex5-button').addEventListener('click',
    (e) => document.getElementById('ex5-span').innerText = ++counter);

// Zadanie 6
window.addEventListener('scroll', (e) => {
        document.body.style.backgroundColor = window.scrollY > 200 ? 'red' : 'white';
})

// Zadanie 7
class Calculator {
    constructor(container) {
        this.operation = "";
        this.numbers = container.getElementsByTagName('div')[0].children;
        this.operators = container.getElementsByTagName('div')[1].children;
        this.resultInput = container.getElementsByTagName('input')[0];
    }

    run() {
        const _this = this;
        [...this.numbers].forEach((el) => {
            el.addEventListener('click', (e) => {
                if(_this.operation.length < 2) {
                    _this.operation = "" + e.target.innerText;
                    _this.resultInput.value = _this.operation;
                } else {
                    _this.operation += e.target.innerText;
                    _this.doOperation();
                }
            })
        });
        [...this.operators].forEach((el) => {
            el.addEventListener('click', (e) => {
                if(this.operation.length < 3) {
                    _this.operation = _this.operation.slice(0, 1) + e.target.innerText;
                    _this.resultInput.value = _this.operation;
                }
            })
        })
    }
    doOperation() {
        switch (this.operation[1]) {
            case '+':
                this.add();
                break;
            case '-':
                this.substract();
                break;
            case '*':
                this.multiply();
                break;
            case '/':
                this.divide();
                break;
        }
        this.operation = "";
    }
    add() {
        console.log(parseInt(this.operation[0]) + parseInt(this.operation[2]));
        this.resultInput.value = parseInt(this.operation[0]) + parseInt(this.operation[2]);
    }
    substract() {
        this.resultInput.value = parseInt(this.operation[0]) - parseInt(this.operation[2]);
    }
    multiply() {
        this.resultInput.value = parseInt(this.operation[0]) * parseInt(this.operation[2]);
    }
    divide() {
        this.resultInput.value = parseInt(this.operation[0]) / parseInt(this.operation[2]);
    }
}
const calculator = new Calculator(document.getElementById('calculator'));
calculator.run();