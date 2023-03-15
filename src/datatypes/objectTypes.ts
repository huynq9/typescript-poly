const arr: Array<any> = ["a", 1, false];
//tuple
const arr2: [string, number, boolean] = ["a", 1, false];
console.log(typeof arr);
//array
const arr3: Array<string> = ["a", "1", "false"];

//tuple
const arr4: [string, number, boolean] = ["a", 1, true];

//nested array
const arr5: string[][] = [
  ["a", "1", "false"],
  ["a", "1", "true"],
];

const arr6: Array<[string, number, boolean]> = [["a", 1, false]];
//emum

enum STATUS {
  PENDING,
  REJECTED,
  FULFILLED,
}
const trangthai: STATUS = STATUS.PENDING;

enum CODE {
  SUCCESS = 200,
  CLIENT_ERROR = 403,
}
 