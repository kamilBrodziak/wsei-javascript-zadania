// Zadanie 1
let i = 1;
const interval = setInterval(() => {
    console.log(`Cześć po raz ${++i}`);
    if(i === 15) clearInterval(interval);
}, 3000);


// Zadanie 2
const test = ['t', 'te', 'tes', 'test'];
setTimeout(() => {
    console.log(test.join(" "));
    let i = 0;
    const interval = setInterval(() => {
        console.log(test[i++]);
        if(i === test.length) {
            clearInterval(interval);
        }
    }, 3000);
}, 2000);
