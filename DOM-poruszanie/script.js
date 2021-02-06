// Zadanie 1
console.log(document.getElementById('buz').parentElement);
console.log(document.getElementById('baz').previousElementSibling);
const foo = document.getElementById('foo');
console.log(foo.children);
console.log(foo.parentElement);
console.log(foo.children[0]);
console.log(foo.children[Math.round(foo.children.length / 2)]);

// Zadanie 2
function ex2(el) {
    el.addEventListener('click', (e) => {
        console.log(e.target.children[0].innerText);
    })
}
ex2(document.getElementById('ex2'));

// Zadanie 3
[...document.getElementById('ex3').getElementsByTagName('button')].forEach((button) => {
    button.addEventListener('click', () => {
        button.nextElementSibling.style.display = button.nextElementSibling.style.display === 'none' ? 'initial' : 'none';
    })
})

// Zadanie 4
function changeColor() {
    [...document.getElementById('ex3').getElementsByTagName('button')].forEach((button) => {
        button.addEventListener('click', () => {
            button.parentElement.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        })
    })
}
changeColor();

// Zadanie 5
const ex5 = document.getElementById('ex5');
const list = ex5.getElementsByTagName('ul')[0];
let num = 0;
[...ex5.getElementsByTagName('div')].forEach((div) => {
    div.addEventListener('mouseenter', (e) => {
        switch (num) {
            case 0:
                list.children[0].style.backgroundColor = e.target.style.backgroundColor;
                break;
            case 1:
                list.children[list.children.length - 1].style.backgroundColor = e.target.style.backgroundColor;
                break;
            case 2:
                [...list.children].forEach((el, i) => {
                    if(i%2 === 0) {
                        el.style.backgroundColor = e.target.style.backgroundColor;
                    }
                });
                break;
            case 3:
                [...list.children].forEach((el, i) => {
                        el.style.backgroundColor = e.target.style.backgroundColor;
                });
                break;
            case 4:
                list.style.backgroundColor = e.target.style.backgroundColor;
                break;
        }
        num = ++num % 5;
    });
    div.addEventListener('mouseleave', (e) => {
        [...list.children].forEach((el) => {
            el.style.backgroundColor = "initial";
        });
        list.style.backgroundColor = "initial";
    });
});

// Zadanie 6
const ex6 = document.getElementById('ex6');

const x = ex6.children[0].children[0].children[0];
const y = ex6.children[0].parentElement.children[0].children[0].nextElementSibling.parentElement;
const z = ex6.parentElement.children[0].parentElement.children[1].children[0].children[0].children[0];
console.log(x);
console.log(y);
console.log(z);