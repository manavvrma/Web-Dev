let arr = [1, 34, 2, 45, 3, 67];

// let newArray = [];

// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
//   newArray.push(element ** 2);
// }

let newArray = arr.map((value, index, arr) => {
  return value ** 2;
});

console.log(newArray);

const seven = (m) => {
  if (m > 50) {
    return true;
  }
  return false;
};

console.log(newArray.filter(seven));

let arr2 = [1, 2, 3, 4, 5, 6];

const red = (a, b) => {
  return a * b;
};

console.log(arr2.reduce(red));

console.log(Array.from("Manav"));
