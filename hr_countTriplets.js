let arr = [1,2,2,4];
let r = 2;
let map = {};
function countTriplets(arr, r) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) map[arr[i]].push(i);
    else map[arr[i]] = [i];
  }
  
  let count = 0;
  for (let key in map) {
    if (map[key * r] && map[key * r * r]) {
      count += buildPermutation(map[key], map[key * r], map[key * r * r]);
    }
  }
  return count;
}

function buildPermutation(arr1, arr2, arr3) { 
  let count = 0;

  for (let a2 of arr2) {
    let count1 = 0;
    let count2 = 0;
    for (let a1 of arr1) {
      if (a1 < a2) count1++;
    };

    for (let a3 of arr3) {
      if (a3 > a2) count2++;
    };
    count += count1 * count2;
  }

  return count;
}

console.log(countTriplets(arr, r));