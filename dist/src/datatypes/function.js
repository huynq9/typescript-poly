"use strict";
// 1.function returns
function demoFunction() {
    return;
}
//never : chay mai mai
function neverFunction() {
    const error = new Error("cc");
    throw error;
}
const result = demoFunction();
console.log(result);
//2.function parameter
const showInfo = (fistName, lastName, midName) => {
    return "Ten sinh vien" + fistName + " " + midName + " " + lastName;
};
//hoisting
function sum(a, b) {
    return a + b;
}
// 3.optional la dau ? co the co hoac co the khong
//4. function declaration
const func2 = function () { };
const func3 = () => { };
//5. callback function
function we_map(arr, callback) {
    const temp = [];
    for (let i = 0; i < arr.length; i++) {
        const newArr = callback(arr[i]);
        temp.push(newArr);
    }
    return temp;
}
//6. rest parameter
const info = (name, ...classes) => {
    console.log(name, classes.join(","));
};
info("huy", "1", "2", "3");
function we_sort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
const numArray3 = [13, 5, 8, 2, 3, 1];
we_sort(numArray3);
console.log(numArray3);
