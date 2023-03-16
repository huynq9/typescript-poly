function selectionSort<T>(arr: T[], compare: (a: T, b: T) => number): T[] {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (compare(arr[j], arr[minIndex]) < 0) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

// Sắp xếp mảng số nguyên tăng dần
const numbers = [5, 2, 9, 1, 5, 6];
const sortedNumbers = selectionSort(numbers, (a, b) => a - b);
console.log(sortedNumbers);

// Sắp xếp mảng chuỗi theo thứ tự bảng chữ cái giảm dần
const strings = ["abc", "def", "hij", "klm", "nop"];
const sortedStrings = selectionSort(strings, (a, b) => b.localeCompare(a));
console.log(sortedStrings);
