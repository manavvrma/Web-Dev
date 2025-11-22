let arr4 = [11, 23, 47, 2, 67, 32];

arr4.forEach(function (val) {
  console.log(val);
});

// whenever you see a case where one will be used to make a new array , and will have some values we use map.

let newarr = arr4.map(function (val) {
  if (val > 10) return val;
});

console.log(newarr);

//filter: filters some values from old and make new

let newarr2 = arr4.filter(function (val) {
  if (val > 30) return true;
});

console.log(newarr2);

//reduce: reduces the value to 1, accumulator default value added later and acc saves the return value and putsd the final in newarr3

let newarr3 = arr4.reduce(function (accumulator, val) {
  return accumulator + val;
}, 0);

console.log(newarr3);

//find: to find any value in the array, always fins the first find

let find1 = arr4.find(function (val) {
  return val === 2;
});

console.log(find1);

//some: if you want to find some items that satisfies a condition

//destructuring

let arr5 = [1, 2, 3, 4, 5];

let [a, b, c, , e] = arr5;
console.log(a, b, c, e);

// spread

let arr6 = [...arr4];

console.log(arr6);
