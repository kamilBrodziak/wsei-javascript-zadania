// Zadanie 1
console.log("Zadanie 1");
const arr = ["t", "te", "tes", "test"];
console.log(arr.join(" "));

// Zadanie 2
console.log("Zadanie 2");
const arr2 = ["t", "te", 1, "tes", 5, "test", 2];
console.log(arr2[0]);
console.log(arr2[1]);
console.log(arr2.join(" "));
for(let i = 0; i < arr2.length; i+=2) {
    console.log(arr2[i]);
}
for(let i = 0; i < arr2.length; ++i) {
    if(typeof arr2[i] === 'string') {
        console.log(arr2[i]);
    }
}

for(let i = 0; i < arr2.length; ++i) {
    if(typeof arr2[i] === 'number') {
        console.log(arr2[i]);
    }
}

// Zadanie 3
console.log("Zadanie 3");
const nums = [5, 21, 13, 11, 5, 14];
const sum = nums.reduce((a,b) => a+b, 0);
const diff = nums.reduce((a,b) => a-b, 0);
console.log(sum);
console.log(diff);
console.log(sum / nums.length);
nums.forEach((val, i) => {
    if(val % 2 === 0) {
        console.log(val);
    }
})
nums.forEach((val, i) => {
    if(val % 2 === 1) {
        console.log(val);
    }
})
// console.log(Math.max(...nums));
// console.log(Math.min(...nums));
let max = nums[0];
let min = nums[0];
for(let i = 1; i < nums.length; ++i) {
    if(nums[i] > max) {
        max = nums[i];
    }
    if(nums[i] < min) {
        min = nums[i];
    }
}
console.log(max);
console.log(min);
console.log(nums.reverse());

// Zadanie 4
console.log("Zadanie 4");
function arraySum(nums) {
    return nums.reduce((a,b) => a+b, 0);
}
console.log(arraySum([22,1,4,5,7]));

// Zadanie 5
console.log("Zadanie 5");
function multiplyByAverage(nums) {
    const avg = nums.reduce((a,b) => a+b, 0) / nums.length;
    const multipliedNums = [];
    nums.forEach((num, i) => {
        multipliedNums.push(num * avg);
    })
    return multipliedNums;
}
console.log(multiplyByAverage([1,2,1,4,5]));

// Zadanie 6
console.log("Zadanie 6");
function averageEvenNumbers(nums) {
    let i = 0;
    let sum = 0;
    nums.forEach((val, j) => {
        if(val % 2 === 0) {
            sum += val;
            i++;
        }
    })
    return sum/i;
}
console.log(averageEvenNumbers([2,14,5,7,11,19,20]));

// Zadanie 7
console.log("Zadanie 7");
function sortArray(nums) {
    return nums.sort((a, b) => a - b);
}
console.log(sortArray([41,2,45,1,3,4,5]))

// Zadanie 8
console.log("Zadanie 8");
function indicesSumOfTwoArrays(arr1, arr2) {
    let arr = [];
    arr1.forEach((val, i) => arr.push(val + arr2[i]));
    return arr;
}
console.log(indicesSumOfTwoArrays([12,321,442], [555, 12, 34]));

// Zadanie 9
console.log("Zadanie 9");
function removeElFromArr(arr, el) {
    return arr.filter((val, i) => val !== el);
}
console.log(removeElFromArr([1,2,3,4,5,6,7,1,2,3,4,1,2], 2));

// Zadanie 10
console.log("Zadanie 10");
function createArrWithNegatedEl(arr) {
    let arr2 = [];
    arr.forEach((val, i) => {
        arr2.push((-1) * val);
    })
    return arr2;
}
console.log(createArrWithNegatedEl([-2, 5, -4, -7, 22, 1]))