// Zadanie 1
const lists = document.getElementsByClassName('list');
console.log(lists);

// Zadanie 2
function getTags(tag) {
    return document.getElementsByTagName(tag);
}

console.log(getTags('div'));

// Zadanie 3
console.log(document.getElementById('list'));

// Zadanie 4
function printElements(elements) {
    [...elements].forEach((el) => console.log(el));
    console.log('end');
}

printElements(document.getElementsByTagName('li'));
printElements(document.getElementsByTagName('ul'));
printElements(document.getElementsByTagName('span'));
printElements(document.querySelectorAll('div.list span'));
printElements(document.getElementById('spans').getElementsByTagName('span'));