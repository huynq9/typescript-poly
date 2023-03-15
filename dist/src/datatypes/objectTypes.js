"use strict";
const arr = ["a", 1, false];
//tuple
const arr2 = ["a", 1, false];
console.log(typeof arr);
//array
const arr3 = ["a", "1", "false"];
//tuple
const arr4 = ["a", 1, true];
//nested array
const arr5 = [
    ["a", "1", "false"],
    ["a", "1", "true"],
];
const arr6 = [["a", 1, false]];
//emum
var STATUS;
(function (STATUS) {
    STATUS[STATUS["PENDING"] = 0] = "PENDING";
    STATUS[STATUS["REJECTED"] = 1] = "REJECTED";
    STATUS[STATUS["FULFILLED"] = 2] = "FULFILLED";
})(STATUS || (STATUS = {}));
const trangthai = STATUS.PENDING;
var CODE;
(function (CODE) {
    CODE[CODE["SUCCESS"] = 200] = "SUCCESS";
    CODE[CODE["CLIENT_ERROR"] = 403] = "CLIENT_ERROR";
})(CODE || (CODE = {}));
