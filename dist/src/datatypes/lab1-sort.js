"use strict";
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}
let numArray = [5, 4, 2, 6, 7, 8, 23, 5, 7, 8];
const stringArr = ["foo", "bar", "baz"];
const ss = selectionSort(stringArr);
const nn = selectionSort(numArray);
console.log(ss);
console.log(nn);
