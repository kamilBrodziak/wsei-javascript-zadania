// Zadanie 1
function writeText() {
    console.log("Udało się!");
}

// Zadanie 2
function writeParam(param) {
    console.log(param);
}

// Zadanie 3
function getArray(arr) {
    return arr;
}

// Zadanie 4
function writeStr(str) {
    let i = 0;
    const interval = setInterval(() => {
        console.log(str);
        if(++i === 5) {
            clearInterval(interval);
            console.log("Koniec");
        }
    }, 3000);
}