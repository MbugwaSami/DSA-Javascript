//Used for sorted arrays by dividing it into halves recusively.

function binarySearch(arr, startIndex, lastIndex, value) {
  if (lastIndex > startIndex) {
    const arrayMid = startIndex + Math.floor((lastIndex - startIndex) / 2);
    if (arr[arrayMid] === value) return arrayMid;
    if (arr[arrayMid] > value)
      return binarySearch(arr, startIndex, arrayMid - 1, value);
    return binarySearch(arr, arrayMid + 1, lastIndex, value);
  }
}

let arr = [2, 3, 4, 10, 40];
let x = 10;
let n = arr.length;
let result = binarySearch(arr, 0, n - 1, x);
