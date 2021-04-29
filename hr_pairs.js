function pairs(k, arr) {
  let count = 0;
  let sortedArr = arr.sort((a, b) => a - b);
  for (let a of arr) {
    let b = binarySearch(sortedArr, a - k);
    if (b !== -1) count++;
  }
  return count;
}

function binarySearch(sortedArray, key){
  let start = 0;
  let end = sortedArray.length - 1;
  
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (sortedArray[middle] === key) {
      return middle;
    } else if (sortedArray[middle] < key) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
}

pairs(1, [1, 2, 3, 4]);