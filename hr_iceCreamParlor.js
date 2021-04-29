function whatFlavors(cost, money) {
  let map = buildMap(cost);

  for (let i = 0; i < cost.length; i++) {
    let j = map[money - cost[i]];
    if (j && (j.length > 1) && (cost[i] * 2 === money)) {
      console.log(parseInt(j[0]) + 1, parseInt(j[1]) + 1);
      j.splice(0, 2);
      
      if (j.length === 0) delete map[cost[i]];
    } else if (j && parseInt(j[0]) !== i) {
      console.log(i + 1, parseInt(j[0]) + 1);
      delete map[cost[i]];
      delete map[cost[parseInt(j[0])]];
      break;
    }
  }
}

function buildMap(cost) {
  let map = {};
  for (let i = 0; i < cost.length; i++) {
    if (map[cost[i]]) map[cost[i]].push(i);
    else map[cost[i]] = [i];
  }

  return map;
}

let cost = [1, 4, 5, 3, 2];
let money = 4;
whatFlavors(cost, money);
// console.log(buildMap(cost));