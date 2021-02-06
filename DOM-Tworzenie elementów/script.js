const root = document.getElementById('root');

// Zadanie 1
function createDiv(text) {
    const div = document.createElement('div');
    div.innerHTML = text;
    return div;
}
root.appendChild(createDiv('To jest nowy element'));

// Zadanie 2
function createListFromArray(arr) {
    const ul = document.createElement('ul');
    arr.forEach((el) => {
        const li = document.createElement('li');
        li.innerHTML = el;
        ul.appendChild(li);
    })
    return ul;
}
const fruits = ['banana', 'apple', 'kiwi', 'grenade', 'watermelon', 'orange', 'mandarin'];
const fruitsDOMList = createListFromArray(fruits);
root.appendChild(fruitsDOMList);

// Zadanie 3
fruitsDOMList.addEventListener("click", () => {
    for(let i = fruitsDOMList.childNodes.length - 1; i >= 0 ; i-=2) {
        fruitsDOMList.removeChild(fruitsDOMList.childNodes[i]);
    }
})

// Zadanie 4
const button = document.createElement('button');
button.innerHTML = 'Click me';
button.addEventListener('click', () => {
    button.remove();
})
root.appendChild(button);

// Zadanie 5
const divArrLength = Math.random() * 21 // ograniczam dla czytelności liczbę divów maksymalnie do 20
for(let i = 0; i < divArrLength; ++i) {
    root.appendChild(createDiv(`to jest div numer ${i + 1}`));
}
// function createRandomDivs() {
//     let count = Math.floor(Math.random() * 100);
//     for(let i = 0; i < count; ++i) {
//         let div = document.createElement('div');
//         div.innerHTML = `To jest div numer ${i + 1}`;
//     }
// }

// Zadanie 6
function createHtmlFromObj() {
    const div1 = document.createElement('div');
    div1.innerHTML = 'to jest div';
    const span1 = document.createElement('span');
    span1.innerHTML = 'to jest span';
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    div3.innerHTML = 'to jest div';
    div2.appendChild(div3);
    const span2 = document.createElement('span');
    span2.innerHTML = 'to jest span';
}



// Zadanie 7
const someArr = [1, 2, 3, 4, 5, 6, 7];
const firstDOMList = createListFromArray(someArr);
const firstListButton = document.createElement('button');
firstListButton.innerHTML = 'Transfer to second list';
root.appendChild(firstDOMList);
root.appendChild(firstListButton);
const secondDOMList = document.createElement('ul');
const secondListButton = document.createElement('button');
secondListButton.innerHTML = 'Transfer to first list';
secondListButton.setAttribute('disabled', 'disabled');
root.appendChild(secondDOMList);
root.appendChild(secondListButton);

function transferEl(firstList, secondList, firstButton, secondButton) {
    const el = firstList.childNodes[firstList.childNodes.length - 1];
    el.remove();
    secondList.appendChild(el);
    if(secondButton.disabled) {
        secondButton.removeAttribute('disabled');
    }
    if(!firstList.childNodes.length) {
        firstButton.setAttribute('disabled', 'disabled');
    }
}

firstListButton.addEventListener('click',
    () => transferEl(firstDOMList, secondDOMList, firstListButton, secondListButton));

secondListButton.addEventListener('click',
    () => transferEl(secondDOMList, firstDOMList, secondListButton, secondListButton))

// Zadanie 8
function createForm() {
    const form = document.createElement('form');
    const typeInput = document.createElement('input');
    typeInput.type = "text";
    typeInput.placeholder = "Type";
    form.appendChild(typeInput);
    const colorInput = document.createElement('input');
    colorInput.type = "text";
    colorInput.placeholder = "Color";
    form.appendChild(colorInput);
    const textInput = document.createElement('input');
    textInput.type = "text";
    textInput.placeholder = "Text";
    form.appendChild(textInput);
    const numInput = document.createElement("input");
    numInput.type = "number";
    numInput.min = "1";
    numInput.value = "1";
    form.appendChild(numInput);
    const submit = document.createElement("button");
    submit.type = "submit";
    submit.innerHTML = "Utwórz";
    form.appendChild(submit);
    root.appendChild(form);
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        for(let i = 0; i < numInput.value; i++) {
            const el = document.createElement(typeInput.value);
            el.style.color = colorInput.value;
            el.innerText = textInput.value;
            root.appendChild(el);
        }
    })
}
createForm();

// Zadanie 9
function createTableFromForm() {
    const form = document.createElement("form");
    const submit = document.createElement("button");
    submit.type = "submit";
    submit.innerText = "Utwórz";
    const moreButton = document.createElement("button");
    moreButton.innerText = "Więcej";
    const rowsInputs = [];
    const appendDataInputs = () => {
        const nameInput = document.createElement("input");
        nameInput.placeholder = "Imię";
        const surnameInput = document.createElement("input");
        surnameInput.placeholder = "Nazwisko";
        const ageInput = document.createElement("input");
        ageInput.type = "number";
        ageInput.min = "0";
        ageInput.max = "150";
        ageInput.value = "0";
        const childrenInput = document.createElement("input");
        childrenInput.type = "number";
        childrenInput.min = "0";
        childrenInput.max = "100";
        childrenInput.value = "0";
        rowsInputs.push([nameInput, surnameInput, ageInput, childrenInput]);
        if(form.children.length > 0) {
            form.removeChild(moreButton);
            form.removeChild(submit);
        }
        form.appendChild(nameInput);
        form.appendChild(surnameInput);
        form.appendChild(ageInput);
        form.appendChild(childrenInput);
        form.appendChild(document.createElement("br"));
        form.appendChild(moreButton);
        form.appendChild(submit);
    }
    form.addEventListener('submit', (e) => {
       e.preventDefault();
       const table = document.createElement('table');
       const headersRow = document.createElement('tr');
       const nameHeader = document.createElement('th');
       nameHeader.innerText = "Imię";
       const surnameHeader = document.createElement('th');
       surnameHeader.innerText = "Nazwisko";
       const ageHeader = document.createElement("th");
       ageHeader.innerText = "Wiek";
       const childrenHeader = document.createElement("th");
       childrenHeader.innerText = "Ilość dzieci";
       headersRow.appendChild(nameHeader);
       headersRow.appendChild(surnameHeader);
       headersRow.appendChild(ageHeader);
       headersRow.appendChild(childrenHeader);
       table.appendChild(headersRow);
       rowsInputs.forEach((row) => {
          const rowHtml = document.createElement("tr");
          row.forEach((val) => {
              const td = document.createElement("td");
              td.innerText = val.value;
              rowHtml.appendChild(td);
          });
          table.appendChild(rowHtml);
       });
       root.appendChild(table);
    });
    moreButton.addEventListener('click', (e) => {
        e.preventDefault();
        appendDataInputs();
    });
    appendDataInputs();
    root.appendChild(form);
}
createTableFromForm();

// Zadanie 10
function createTableFromForm2() {
    const form = document.createElement("form");
    const submit = document.createElement("button");
    submit.type = "submit";
    submit.innerText = "Utwórz";
    const moreButton = document.createElement("button");
    moreButton.innerText = "Więcej";
    const rowsInputs = [];
    const appendDataInputs = () => {
        const nameInput = document.createElement("input");
        nameInput.placeholder = "Imię";
        const surnameInput = document.createElement("input");
        surnameInput.placeholder = "Nazwisko";
        const ageInput = document.createElement("input");
        ageInput.type = "number";
        ageInput.min = "0";
        ageInput.max = "150";
        ageInput.value = "0";
        const childrenInput = document.createElement("input");
        childrenInput.type = "number";
        childrenInput.min = "0";
        childrenInput.max = "100";
        childrenInput.value = "0";
        rowsInputs.push([nameInput, surnameInput, ageInput, childrenInput]);
        if(form.children.length > 0) {
            form.removeChild(moreButton);
            form.removeChild(submit);
        }
        form.appendChild(nameInput);
        form.appendChild(surnameInput);
        form.appendChild(ageInput);
        form.appendChild(childrenInput);
        form.appendChild(document.createElement("br"));
        form.appendChild(moreButton);
        form.appendChild(submit);
    }
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const table = document.createElement('table');
        const headersRow = document.createElement('tr');
        const nameHeader = document.createElement('th');
        nameHeader.innerText = "Imię";
        const surnameHeader = document.createElement('th');
        surnameHeader.innerText = "Nazwisko";
        const ageHeader = document.createElement("th");
        ageHeader.innerText = "Wiek";
        const childrenHeader = document.createElement("th");
        childrenHeader.innerText = "Ilość dzieci";
        headersRow.appendChild(nameHeader);
        headersRow.appendChild(surnameHeader);
        headersRow.appendChild(ageHeader);
        headersRow.appendChild(childrenHeader);
        table.appendChild(headersRow);
        const capitalize = (string) => {
            return string[0].toUpperCase() + string.slice(1);
        }
        rowsInputs.forEach((row) => {
            const rowHtml = document.createElement("tr");
            row.forEach((val) => {
                const td = document.createElement("td");
                td.innerText = capitalize(val.value);
                rowHtml.appendChild(td);
            });
            table.appendChild(rowHtml);
        });
        root.appendChild(table);
    });
    moreButton.addEventListener('click', (e) => {
        e.preventDefault();
        appendDataInputs();
    });
    appendDataInputs();
    root.appendChild(form);
}
createTableFromForm2();

// Zadanie 11
function createDivsWithCountFromText(text) {
    let divCount = 0, numCount = 0, sum = 0;
    for(let i = 0; i < text.length; ++i) {
        const char = text[i];
        if(/^\d+$/.test(char)) {
            sum += parseInt(char);
            numCount++;
            if(divCount === 0) {
                divCount = parseInt(char);
            } else {
                divCount *= parseInt(char);
            }
        }
    }
    if(numCount > 0) {
        console.log(sum);
    }
    for(let i = 0; i < divCount; ++i) {
        root.appendChild(createDiv(text));
    }
}
createDivsWithCountFromText("142sa,xzfgasat212,zx");
createDivsWithCountFromText("saxzgfdasm,lp[");
createDivsWithCountFromText("12jsajsa421lsaxz");

// Zadanie 12
function changeAlaToOla(text) {
    const obj = {
        text: text,
        change: () => {
            if(/Ala/.test(text)) {
                text = text.replaceAll("Ala", "Ola");
                root.appendChild(createDiv(text));
            } else {
                root.appendChild(createDiv("Słowo Ala nie występuje w tekście."));
            }
        }
    }
    obj.change();
}
changeAlaToOla("Ala ma kota");
changeAlaToOla("Lololo");
changeAlaToOla("Ala nie ma kota, Ala ma psa");

// Zadanie 13
function getStringsLengthArray(arr) {
    const lengths = [];
    arr.forEach((val) => {
        lengths.push(val.length);
    })
    return lengths;
}

function sumOfNums(arr) {
    let sum = 0;
    arr.forEach((val) => sum += val);
    return sum;
}

function avgOfNums(arr) {
    return sumOfNums(arr) / arr.length;
}
console.log(sumOfNums(getStringsLengthArray(["lasas;zx", "sadaklas", "sa", "hajkshkjaskjhsahkjsa"])));
console.log(avgOfNums(getStringsLengthArray(["lasas;zx", "sadaklas", "sa", "hajkshkjaskjhsahkjsa"])));

// Zadanie 14
let obj = {
    name: '',
    surname: '',
    age: ''
};

function changeProperties(obj) {
    obj.name = "Kamil";
    obj.surname = "Brodziak";
    obj.age = "22";
    obj.nameLength = obj.name.length;
    obj.surnameLength = obj.surname.length;
    obj.ageLength = obj.age.length;
    console.log(obj);
    if(obj.nameLength > 5 || obj.surnameLength > 5 || obj.ageLength > 5) {
        const button = document.createElement("button");
        button.innerText = "Resetuj obiekt";
        button.addEventListener('click', (e) => {
            e.preventDefault();
            obj = {
                name : '',
                surname: '',
                age: ''
            }
            console.log(obj);
        })
        root.appendChild(button);
    }
}
changeProperties(obj);