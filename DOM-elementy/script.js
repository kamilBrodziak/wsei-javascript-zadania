// Zadanie 1
function tagList(elements) {
    return [...elements].map((el) => el.localName);
}
console.log(tagList(document.getElementsByClassName('more-divs')));

// Zadanie 2
function ex2(list) {
    console.log(list.innerHTML);
    console.log(list.outerHTML);
    console.log(list.className);
    console.log(list.classList);
    console.log(list.dataset);
}
ex2(document.querySelector('.short-list'));

// Zadanie 3
function ex3(el) {
    let sum = 0, substract = 0;
    Object.values(el.dataset).forEach((el, i) => {
        if(/[0-9]+/.test(el)) {
            const num = parseInt(el);
            sum += num;
            substract = i === 0 ? num : substract - num;
        }
    })
    return [sum, substract];
}
console.log(ex3(document.getElementById('datasetCheck')));

// Zadanie 4
document.getElementById('spanText').innerText = "dowolny :D";

// Zadanie 5
document.getElementById('spanText').className = "dowolna";

// Zadanie 6
function ex6(classes) {
    classes.forEach((el) => console.log(el));
    console.log([...classes].join('+'));
}
const ex6el = document.getElementById('classes');
ex6(ex6el.classList);
ex6el.removeAttribute('class');
console.log('Usunięto wszystkie klasy')

// Zadanie 7
function ex7(list) {
    [...list].forEach((el) => {
        if(!el.hasAttribute('data-text')) {
            el.setAttribute('data-text', 'text');
        }
    });
}
ex7(document.querySelectorAll('#longList li'))

// Zadanie 8
function ex8(str) {
    return {newClass: str};
}

function ex8_2(obj) {
    const str = obj.newClass;
    document.getElementById('myDiv').className = str;
}
ex8_2(ex8('klasa_sama_w_sobie'));

// Zadanie 9
function ex9(num) {
    const el = document.getElementById('numbers');
    if(num%2 === 0) {
        el.classList.add('even');
    } else {
        el.classList.add('odd');
    }
}
ex9(Math.round(Math.random() * 10));

// Zadanie 10
function ex10(el) {
    return [...el.children].map((li) => li.innerHTML);
}
console.log(ex10(document.getElementById('longList')));

// Zadanie 11
function ex11(elements) {
    [...elements].forEach((el) => {
        el.setAttribute('data-old_val', el.innerText);
        el.innerText = Math.round(Math.random() * 10);
    })
}
ex11(document.getElementById('longList').children);