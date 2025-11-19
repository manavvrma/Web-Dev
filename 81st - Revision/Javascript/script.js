// closyure
let count = 1;
function outer() {
  return function () {
    count++;
    console.log(count);
  };
}

const counter = outer();

counter();
counter();
