let s = 'ifailuhkqq';

function sortStr(str) {
  let strArr = str.split('');
  strArr.sort();
  return strArr.join('');
}

function countValue(obj) {
  let objKey = Object.keys(obj);
  let keyValid = objKey.filter(key => obj[key] > 1);
  let count = keyValid.reduce((a, c) => {
    let val = obj[c];
    return a + (val * (val - 1)) / 2;
  }, 0);
  
  return count;
}

let result = 0;
for (let j = 1; j < s.length; j++) {
  let map = {}
  for (let i = 0; i < s.length - j + 1; i++) {
    let sortedStr = sortStr(s.substring(i, i + j));
    if(map[sortedStr]) map[sortedStr]++;
    else map[sortedStr] = 1;
  }
  result += countValue(map);
}

console.log(result);