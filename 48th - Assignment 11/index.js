let a = 6;

function factorial(number) {
  let arr = Array.from(Array(number + 1).keys());
  let c = arr.slice(1).reduce((a, b) => {
    return a * b;
  });

  console.log(c);
}

function facfor(number) {
  let fac = 1;
}

factorial(a);
