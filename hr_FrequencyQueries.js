/*
You are given  queries. Each query is of the form two integers described below:
- [1, x]  : Insert x in your data structure.
- [2, y] : Delete one occurence of y from your data structure, if present.
- [3, z] : Check if any integer is present whose frequency is exactly z. If yes, print 1 else 0.

The queries are given in the form of a 2-D array
*/


function freqQuery(queries) {
  let mapArr = {};
  let output = [];
  for (let i = 0; i < queries.length; i++) {
    let firstEl = queries[i][0];
    let secondEl = queries[i][1];
    if (firstEl === 1) {
      if (mapArr[secondEl]) mapArr[secondEl] += 1;
      else mapArr[secondEl] = 1;
    } else if (firstEl === 2) {
      if (mapArr[secondEl]) mapArr[secondEl] -= 1;
    } else {
      let numExist = false;
      for (let arr in mapArr) {
        if (mapArr[arr] === secondEl) {
          numExist = true;
          output.push(1);
          break;
        }
      }
      if (!numExist) output.push(0);
    }
  }
  return output; 
}

let queries = [[1,5], [1,6], [3,2], [1,10],[1,10],[1,6],[2,5], [3,2]];
console.log(freqQuery(queries));