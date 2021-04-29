function triplets(a, b, c) {
  a = removeDuplicate(a);
  b = removeDuplicate(b);
  c = removeDuplicate(c);
  let result = 0;
  for (let q of b) {
    let count1 = 0;
    let count2 = 0;
    count1 = binarySearch(a, q) + 1;
    count2 = binarySearch(c, q) + 1;
    result += count1 * count2;
  } 
}

function removeDuplicate(a) {
  let distinctArr = [];
  a = a.sort((x, y) => x - y);
  for (let p of a) {
    if (distinctArr[distinctArr.length - 1] !== p) distinctArr.push(p);
  }
  return distinctArr;
}

function binarySearch(sortedArray, key){
  let start = 0;
  let end = sortedArray.length - 1;
  if (key < sortedArray[0]) return -1;
  
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (key >= sortedArray[end]) return end;

    if (sortedArray[middle] === key || (sortedArray[middle] < key && sortedArray[middle + 1] > key)) {
      // found the key
      return middle;
    } else if (sortedArray[middle] < key) {
      // continue searching to the right
      start = middle + 1;
    } else {
      // search searching to the left
      end = middle - 1;
    }
  }
}

let a = [1, 3, 5];
let b = [2, 3];
let c = [1, 2, 3];

// console.log(triplets(a, b, c));